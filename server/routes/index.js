const Router = require('express') //Подключение фреймоврка для работы с http
const router = new Router() //Занесение фреймоврка в переменную
const genre = require('./genreRouter') //Подключение роута(путей) по работе с жанрами
const country = require('./countryRouter') //Подключение роута(путей) по работе с странами
const movie = require('./movieRouter') //Подключение роута(путей) по работе с фильмами

//Передача серверу путей и функций по работе с ними
router.use('/genre', genre)
router.use('/country', country) 
router.use('/movie', movie) 

module.exports = router