const Router = require('express') //Подключение фреймоврка для работы с http
const router = new Router() //Занесение фреймоврка в переменную
const countryController = require('../controllers/countryController') //подключение класса с методами по работе со странами

//Передача серверу запросов и методов класса по работе с данными запросами
router.get('/', countryController.getAll) //Метод get и метод класса по получение стран
router.post('/', countryController.create) //Метод post и метод класса по созданию страны
router.delete('/:id', countryController.delete) //Метод post и метод класса по удалению страны

module.exports = router