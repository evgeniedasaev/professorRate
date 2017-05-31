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
