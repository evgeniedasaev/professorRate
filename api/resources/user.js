const jsonApi = require('jsonapi-server')

const relationalHandler = require('../handlers/relationalHandler.js')

jsonApi.define({
    namespace: 'json:api',
    resource: 'user',
    description: 'User endpoint.',
    handlers: new jsonApi.ChainHandler().chain(relationalHandler).chain(new jsonApi.MemoryHandler()),
    searchParams: {},
    attributes: {
        type: jsonApi.Joi.number().min(1).max(2).precision(0)
            .description('User type ref (Professor or Student)')
            .example(1),
        login: jsonApi.Joi.string().email()
            .description('User login aka email')
            .example('john.smith@gmail.com'),
        title: jsonApi.Joi.string()
            .description('The persons name')
            .example('Марина Андреевна Шпак'),
        year_short: jsonApi.Joi.number().min(1900).max(2017).precision(0)
            .description('Year of start (work/studing)')
            .example(1991),
        year_finish: jsonApi.Joi.number().min(1900).max(2017).precision(0)
            .description('Year of finish (work/studing)')
            .example(2002),
        rate: jsonApi.Joi.number().min(1900).max(2017).precision(0)
            .description('Year of finish (work/studing)')
            .example(2002),
        courses: jsonApi.Joi.belongsToMany({
            resource: "course",
            as: "users"
        })
    }
})
