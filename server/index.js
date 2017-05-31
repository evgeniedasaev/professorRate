/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const path = require('path')
const resolve = path.resolve;
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});

const jsonApi = require('jsonapi-server')
const fs = require('fs')
const debug = require('debug')

jsonApi.setConfig({
    graphiql: true,
    swagger: {
        title: 'Rate Ur Professor',
        version: '1.0.0',
        description: 'Simple App For Professor Rate!!',
        contact: {
            name: 'API Contact',
            email: 'jackensteiny@gmail.com',
            url: 'https://github.com/jackenstein'
        },
        license: {
            name: 'MIT',
            url: 'http://opensource.org/licenses/MIT'
        }
    },
    protocol: 'http',
    hostname: 'whereismyprofessor.djekoff.ru',
    port: 16006,
    base: 'rest',
    meta: {
        description: 'Simple App For Professor Rate!!'
    }
})

jsonApi.authenticate((request, callback) => {
    // Закрываем доступ при наличии заголовка blockMe
    if (request.headers.blockme) return callback('Fail')

    // Закрываем доступ при наличии cookie blockMe
    if (request.cookies.blockMe) return callback('Fail')

    return callback()
})

// Подключаем Resources
fs.readdirSync(path.join(__dirname, '/resources'))
    .filter(filename => /^[a-z].*\.js$/.test(filename))
    .map(filename => path.join(__dirname, '/resources/', filename))
    .forEach(require)


jsonApi.onUncaughtException((request, error) => {
    const errorDetails = error.stack.split('\n')
    console.error(JSON.stringify({
        request,
        error: errorDetails.shift(),
        stack: errorDetails
    }))
})

jsonApi.metrics.on('data', data => {
    debug('metrics')(data)
})

// Подключаем отладку
const debugging = require("jsonapi-server/lib/debugging");

const outputFnfactory = function (namespace) {
    return function (message) {
        console.log("   ");
        console.log(namespace + ">>>", message);
    }
}

debugging.__overrideDebugOutput(outputFnfactory);

jsonApi.start();