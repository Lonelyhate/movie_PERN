const Router = require('express')
const router = new Router()
const movieController = require('../controllers/movieController')

//Передача серверу запросов и методов класса по работе с данными запросами
router.get('/', movieController.getAll) //Метод get и метод класса по получение фильмов
router.post('/', movieController.create) //Метод post и метод класса по созданию фильма
router.delete('/:id', movieController.delete) //Метод delete и метод класса по удалению фильма

module.exports = router