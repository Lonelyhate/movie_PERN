const { Genre } = require('../models/models'); //Получение таблицы жанров из бд
const ApiError = require('../error/ApiError');  //Получение класса по работе с ошибками

//Класс по функционалу с жанрами
class GenreController {
    //Метод класса по получению всех жанров
    async getAll(req, res, next) {
        try {
            const genres = await Genre.findAll(); //Получаем из бд все жанры
            return res.json(genres); //Отправляем клиенту ответ с жанрами
        } catch (e) {
            next(ApiError.internal('Server error')); //В случае ошибки вызыв класса по работе с ошибками
        }
    }

    //Метод класса по созданию жанров
    async create(req, res, next) {
        try {
            const { name } = req.body; //Получаем из запроса название жанра
            const genre = await Genre.create({ name }); //Создание жанра в бд
            return res.json(genre); //Возвращаем на клиент ответ с созданным жанром
        } catch (e) {
            next(ApiError.internal('Server error')); //В случае ошибки вызыв класса по работе с ошибками
        }
    }

    //Метод класса по удалению жанров 
    async delete(req, res, next) {
        try {
            const { id } = req.params; //Получение из запроса айди жанра
            const genre = await Genre.findOne({ where: { id } }); //Поиск в бд жанра с данном айди
            if(!genre) { //Если такой жанр не найден, то возващаем клиенту ошибку о том, что жанр не найден
                return next(ApiError.badRequest('Genre not found'))
            }
            await genre.destroy() //Удаляем жанр из бд
            return res.json({message: "Genre was deleted"}) //Возвращаем ответ об успешном удаление жанра
        } catch (e) {
            next(ApiError.internal('Server error')); //В случае ошибки вызыв класса по работе с ошибками
        }
    }
}

module.exports = new GenreController();
