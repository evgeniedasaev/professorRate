import jsonApiClient from 'jsonapi-client';

const env = process.env.NODE_ENV || 'development';
const customHost = (env === 'production') ? 'whereismyprofessor.djekoff.ru' : 'localhost';

export default new jsonApiClient('http://whereismyprofessor.djekoff.ru:16006/rest');
