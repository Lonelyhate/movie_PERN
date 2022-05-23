const ApiError = require('../error/ApiError') //Получение класса с обработками ошибок
const { Country } = require('../models/models') //Получение таблицы страны из бд

//Класс по функционалу работы со странами
class CountryController {
    //Метод по получнеие стран
    async getAll(req, res, next) {
        try {
            const countries = await Country.findAll()//Получение из бд стран всех
            return res.json(countries) // Возвращаем ответ на клиент со странами
        } catch(e) {
            next(ApiError.internal('Server error')) //В случае ошибки вызыв класса по работе с ошибками
        }
    }

    //Метод по созданию страны
    async create(req, res, next) {
        try {
            const {name} = req.body //Из запроса получаем назавание страны
            const country = await Country.create({name}) //Создание страны в бд
            return res.json(country) //Возвращаем ответ клиенту с созданной страной
        } catch(e) {
            next(ApiError.internal('Server error')) //В случае ошибки вызыв класса по работе с ошибками
        }
    }

    //Метод по удалению страны
    async delete(req, res, next) {
        try {
            const { id } = req.params; //Получаем из запроса айди для поиска в бд
            const country = await Country.findOne({ where: { id } }); //Находим страну в бд
            if(!country) { //Если не находим то возрвщаем ошибку о том, что нет такой страны
                return next(ApiError.badRequest('Country not found'))
            }
            await country.destroy() //Удаляем страну из бд
            return res.json({message: "Country was deleted"}) //Возрвщаем клиенту сообщению об успшеном удаление страны
        } catch(e) {
            next(ApiError.internal('Server error')) //В случае ошибки вызыв класса по работе с ошибками
        }
    }
}

module.exports = new CountryController()