const jsonApi = require('jsonapi-server')

const storeHandler = require('../handlers/storeHandler');

jsonApi.define({
    namespace: 'json:api',
    resource: 'user',
    description: 'User endpoint.',
    handlers: storeHandler,
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
        courses: jsonApi.Joi.many('course'),
        comments: jsonApi.Joi.many('comment'),
        createdComments: jsonApi.Joi.many('comment')
    },
    examples: [
        {
            id: '1',
            type: 'user',
            userType: 1,
            title: 'Николай Афанасиевич Оц',
            photo: '1.jpg',
            about: `Профессор. Общий стаж работы и стаж работы по специальности – 39 лет.
                    Награжден медалью «В память 850-летия Москвы».`,
            yearStart: 1977,
            rate: 4.9,
            courses: [
                {type: 'course', id: '1'},
                {type: 'course', id: '2'},
                {type: 'course', id: '3'}
            ],
            comments: [
                {type: 'comment', id: '1'},
                {type: 'comment', id: '2'},
                {type: 'comment', id: '3'}
            ]
        },
        {
            id: '2',
            type: 'user',
            userType: 1,
            title: 'Лариса Геннадьевна Разина',
            photo: '2.jpg',
            about: `Прошла путь от инженера, ведущего разработчика радиоэлектронной аппаратуры (г. Курган, г. Новосибирск, г. Липецк, г. Зеленоград) до заведующего кафедрой «Информатика и программного обеспечения вычислительных систем».
                    Удостоена почетного звания «Почетный работник высшего профессионального образования Российской Федерации», награждена медалью «За укрепление боевого содружества».`,
            yearStart: 1977,
            yearFinish: 2003,
            rate: 4.9,
            courses: [
                {type: 'course', id: '1'},
                {type: 'course', id: '2'}
            ]
        },
        {
            id: '3',
            type: 'user',
            userType: 1,
            title: 'Дмитрий Петрович Оц',
            photo: '3.jpg',
            about: `Профессор. Общий стаж работы и стаж работы по специальности – 39 лет.
                    Награжден медалью «В память 850-летия Москвы».`,
            yearStart: 1977,
            rate: 3.9,
            courses: [
                {type: 'course', id: '2'},
                {type: 'course', id: '3'}
            ]
        },
        {
            id: '4',
            type: 'user',
            userType: 2,
            title: 'Василий Огурцов',
            about: `Студент.`,
            yearStart: 1998,
            yearFinish: 2003,
            rate: 5,
            courses: [
                {type: 'course', id: '1'}
            ],
            createdComments: [
                {type: 'comment', id: '1'},
                {type: 'comment', id: '2'},
                {type: 'comment', id: '3'}
            ]
        }
    ]
});
