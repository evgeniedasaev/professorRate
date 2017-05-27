const jsonApi = require('jsonapi-server')

const relationalHandler = require('../handlers/relationalHandler.js')

jsonApi.define({
    namespace: 'json:api',
    resource: 'course',
    description: 'Course endpoint.',
    handlers: new jsonApi.ChainHandler().chain(relationalHandler).chain(new jsonApi.MemoryHandler()),
    searchParams: {},
    attributes: {
        title: jsonApi.Joi.string()
            .description('The persons name')
            .example('Кафедра ИПОВС')
    }
})
