const jsonApi = require('jsonapi-server')

const relationalHandler = require('../handlers/relationalHandler.js')

jsonApi.define({
    namespace: 'json:api',
    resource: 'comment',
    description: 'Comment endpoint.',
    handlers: new jsonApi.ChainHandler().chain(relationalHandler).chain(new jsonApi.MemoryHandler()),
    searchParams: {},
    attributes: {
        rate: jsonApi.Joi.number().min(1).max(5).precision(0)
            .description('Rate of user')
            .example(4),
        comment: jsonApi.Joi.string()
            .description('User comment for rate')
            .example('Марина Владимировна - прекрасный педагог'),
        title: jsonApi.Joi.string()
            .description('The persons name')
            .example('Марина Андреевна Шпак'),
        author: jsonApi.Joi.one('user')
            .description('The user who wrote the comment'),
        user: jsonApi.Joi.one('user')
            .description('The user about whom the comment was written')
    }
})
