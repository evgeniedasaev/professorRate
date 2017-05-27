const server = module.exports = {}

const jsonApi = require('jsonapi-server')
const fs = require('fs')
const path = require('path')
const debug = require('debug')

jsonApi.setConfig({
    graphiql: true,
    swagger: {
        title: 'Rate Ur Professor',
        version: '1.0.0',
        description: 'Simple App For Professor Rate',
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
    hostname: 'localhost',
    port: 16006,
    base: 'rest',
    meta: {
        description: 'Simple App For Professor Rate'
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
        console.log(namespace + ">>>", message);
    }
}

debugging.__overrideDebugOutput(outputFnfactory);

server.start = jsonApi.start
server.close = jsonApi.close
server.getExpressServer = jsonApi.getExpressServer

server.start();