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
        authorName: jsonApi.Joi.string()
            .description('Author name')
            .example('Марина Владимировна'),
        author: jsonApi.Joi.belongsToOne({
                resource: 'user',
                as: 'createdComments'
            })
            .description('The user who wrote the comment'),
        user: jsonApi.Joi.belongsToOne({
                resource: 'user',
                as: 'comments'
            })
            .description('The user about whom the comment was written')
    },
    examples: [
        {
            id: '1',
            type: 'comment',
            rate: 5,
            comment: 'отличный педагог, разжёвывает и объясняет так, чтобы поняли даже самые неподготовленные, очень хороший руководитель, спрашивает ровно то, что даёт, поблажек не делает никому',
            authorName: 'Анастасия Тулина',
            author: {type: 'user', id: '4'},
            user: {type: 'user', id: '1'}
        },
        {
            id: '2',
            type: 'comment',
            rate: 3,
            comment: '"Профессор лапух, приём" - были слова когда он меня на госэкзамене на втором курсе с наушником спалил))) В общем учился на втором курсе хорошо именно по его предмету поскольку занимался дополнительно. Но когда я выходил на экзамен отец мне сказал хоть тройки у него получи и то дело и в этот момент я принципиально хотел написать и теорию которую никогда не учил к сожалению. Написав на тройку начал катать чтоб поднять бал до 5ки, теория была уже на 4 и как вдруг на тебе завис блютуз наушник.Пока ремонтировал и тестировал отправляя голосовые тестовые сообщения моему диктору или лектору кто мне поддиктовывал я и попался)). В общем академик 2005года. Молодец, хоть я и был исключён но признаю что по делу. Главное он не оказался тряпкой взяточником от которых по сей день не мало проблем для общества в целом...',
            authorName: 'Арина Ушакова',
            author: {type: 'user', id: '4'},
            user: {type: 'user', id: '1'}
        },
        {
            id: '3',
            type: 'comment',
            rate: 5,
            comment: 'единственный препод, оставивший за эти пять лет хоть чтото в моей голове.... все остальные ничтожные тени....',
            authorName: 'Дасаев Евгений',
            author: {type: 'user', id: '4'},
            user: {type: 'user', id: '1'}
        }
    ]
});
