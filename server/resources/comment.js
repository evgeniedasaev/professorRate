const jsonApi = require('jsonapi-server')

const storeHandler = require('../handlers/storeHandler');

jsonApi.define({
    namespace: 'json:api',
    resource: 'comment',
    description: 'Comment endpoint.',
    handlers: storeHandler(),
    searchParams: {},
    attributes: {
        rate: jsonApi.Joi.number().min(1).max(5).precision(0)
            .description('Rate of user')
            .example(4),
        comment: jsonApi.Joi.string()
            .description('User comment for rate')
            .example('Марина Владимировна - прекрасный педагог'),
        authorName: jsonApi.Joi.string()
            .description('Author name')
            .example('Марина Владимировна'),
        isPublished: jsonApi.Joi.boolean().empty(false)
            .description('Publishing flag')
            .example(true)
    }
});
