const Router = require('express') //Подключение фреймоврка для работы с http
const router = new Router() //Занесение фреймоврка в переменную
const genreController = require('../controllers/genreController') //подключение класса с методами по работе со странами

//Передача серверу запросов и методов класса по работе с данными запросами
router.get('/', genreController.getAll) //Метод get и метод класса по получение жанров
router.post('/', genreController.create) //Метод post и метод класса по созданию жанра
router.delete('/:id', genreController.delete) //Метод delete и метод класса по удалению жанра

module.exports = router