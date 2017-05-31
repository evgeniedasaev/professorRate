const jsonApi = require('jsonapi-server')

const relationalHandler = require('../handlers/relationalHandler.js')

jsonApi.define({
    namespace: 'json:api',
    resource: 'user',
    description: 'User endpoint.',
    handlers: new jsonApi.ChainHandler().chain(relationalHandler).chain(new jsonApi.MemoryHandler()),
    searchParams: {},
    attributes: {
        userType: jsonApi.Joi.number().min(1).max(2).precision(0)
            .description('User type ref (Professor or Student)')
            .example(1),
        login: jsonApi.Joi.string().email()
            .description('User login aka email')
            .example('john.smith@gmail.com'),
        title: jsonApi.Joi.string()
            .description('The persons name')
            .example('Марина Андреевна Шпак'),
        photo: jsonApi.Joi.string()
            .description('The persons photo')
            .example('public/img/1.JPG'),
        about: jsonApi.Joi.string()
            .description('The persons name')
            .example('Марина Андреевна Шпак'),
        year_start: jsonApi.Joi.number().min(1900).max(2017).precision(0)
            .description('Year of start (work/studing)')
            .example(1991),
        year_finish: jsonApi.Joi.number().min(1900).max(2017).precision(0)
            .description('Year of finish (work/studing)')
            .example(2002),
        rate: jsonApi.Joi.number().min(1).max(5).precision(0)
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
            photo: 'public/img/1.JPG',
            about: `Профессор. Общий стаж работы и стаж работы по специальности – 39 лет.
                    Награжден медалью «В память 850-летия Москвы».`,
            year_start: 1977,
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
            photo: 'public/img/2.jpg',
            about: `Прошла путь от инженера, ведущего разработчика радиоэлектронной аппаратуры (г. Курган, г. Новосибирск, г. Липецк, г. Зеленоград) до заведующего кафедрой «Информатика и программного обеспечения вычислительных систем».
                    Удостоена почетного звания «Почетный работник высшего профессионального образования Российской Федерации», награждена медалью «За укрепление боевого содружества».`,
            year_start: 1977,
            year_finish: 2003,
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
            photo: 'public/img/3.jpg',
            about: `Профессор. Общий стаж работы и стаж работы по специальности – 39 лет.
                    Награжден медалью «В память 850-летия Москвы».`,
            year_start: 1977,
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
            year_start: 1998,
            year_finish: 2003,
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
