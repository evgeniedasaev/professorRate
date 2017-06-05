const jsonApi = require('jsonapi-server')

const storeHandler = require('../handlers/storeHandler');

jsonApi.define({
    namespace: 'json:api',
    resource: 'course',
    description: 'Course endpoint.',
    handlers: storeHandler,
    searchParams: {},
    attributes: {
        title: jsonApi.Joi.string().empty('')
            .description('The persons name')
            .example('Кафедра ИПОВС'),
        users: jsonApi.Joi.belongsToMany({
            resource: "user",
            as: "courses"
        })
    },
    examples: [
        {
            id: '1',
            type: 'course',
            title: 'Современные проблемы информатики и вычислительной техники'
        },
        {
            id: '2',
            type: 'course',
            title: 'Автоматизированные информационные системы в экономике'
        },
        {
            id: '3',
            type: 'course',
            title: 'Информационные технологии управления'
        }
    ]
});
