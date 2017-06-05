const jsonApi = require('jsonapi-server')

const storeHandler = require('../handlers/storeHandler');

jsonApi.define({
    namespace: 'json:api',
    resource: 'user',
    description: 'User endpoint.',
    handlers: storeHandler(),
    searchParams: {},
    primaryKey: true,
    attributes: {
        userType: jsonApi.Joi.number().empty(0)
            .description('User type ref (Professor or Student)')
            .example(1),
        login: jsonApi.Joi.string().empty('')
            .description('User login aka email')
            .example('john.smith@gmail.com'),
        password: jsonApi.Joi.string().empty('')
            .description('User password'),
        title: jsonApi.Joi.string().empty('')
            .description('The persons name')
            .example('Марина Андреевна Шпак'),
        photo: jsonApi.Joi.string().empty('')
            .description('The persons photo')
            .example('1.jpg'),
        about: jsonApi.Joi.string().empty('')
            .description('The persons name')
            .example('Марина Андреевна Шпак'),
        yearStart: jsonApi.Joi.number().empty(2017)
            .description('Year of start (work/studing)')
            .example(1991),
        yearFinish: jsonApi.Joi.number().empty(2017)
            .description('Year of finish (work/studing)')
            .example(2002),
        rate: jsonApi.Joi.number().empty(0)
            .description('Year of finish (work/studing)')
            .example(4.2),
        isPublished: jsonApi.Joi.boolean().empty(false)
            .description('Publishing flag')
            .example(true),
        courses: jsonApi.Joi.many('course'),
        comments: jsonApi.Joi.many('comment'),
        createdComments: jsonApi.Joi.many('comment')
    }
});
