const jsonApi = require('jsonapi-server')

const storeHandler = require('../handlers/storeHandler');

jsonApi.define({
    namespace: 'json:api',
    resource: 'course',
    description: 'Course endpoint.',
    handlers: storeHandler(),
    searchParams: {},
    attributes: {
        title: jsonApi.Joi.string().empty('')
            .description('The persons name')
            .example('Кафедра ИПОВС'),
        isPublished: jsonApi.Joi.boolean().empty(false)
            .description('Publishing flag')
            .example(true)
    }
});
