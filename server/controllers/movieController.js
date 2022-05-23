const ApiError = require('../error/ApiError'); //Импорт класса с обработкой ошибок
const { Movie, Genre, Country } = require('../models/models'); //Импорт нужных таблиц
const uuid = require('uuid'); //Импорт модуля по созданию рандомных строк
const path = require('path'); //Импорт модуля по работе с локальными путями
const Op = require('sequelize').Op;
const fs = require('fs'); //Импорт модуля по работе с локальными файалми

//Класс по функционалу с фильмами
class MovieController {

    //Метод класса по получениею фильмов
    async getAll(req, res, next) {
        try {
            const { name, rating, genreId, countryId, year } = req.query; // из запроса получаем данный для поиска фильмтов по определнным меткам
            let movies; //Создание переменной для фильмов
            //Дальше идут условия по поиску фильмов по нужным критериям
            if (name && !rating && !genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && !genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && !genreId && countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && genreId && countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        genreId: genreId,
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        genreId: genreId,
                        countryId: countryId,
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && !genreId && countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && genreId && countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        genreId: genreId,
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && !rating && !genreId && countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && !rating && genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        genreId: genreId,
                        countryId: countryId,
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && !genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && !genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        countryId: countryId,
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && !rating && !genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && !genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && !genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        year: year,
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && !rating && !genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        year: year,
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && !rating && genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        year: year,
                        countryId: countryId,
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && !rating && genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        year: year,
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (name && rating && genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        name: {
                            [Op.like]: '%' + name + '%',
                        },
                        year: year,
                        genreId: genreId,
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        year: year,
                        genreId: genreId,
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        year: year,
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && !genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && !genreId && countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        countryId: countryId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && genreId && countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        countryId: countryId,
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && rating && genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        rating: {
                            [Op.between]: [rating, 10],
                        },
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        genreId: genreId,
                        countryId: countryId,
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    where: {
                        genreId: genreId,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && !genreId && countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        countryId: countryId,
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && !genreId && !countryId && year) {
                movies = await Movie.findAll({
                    where: {
                        year: year,
                    },
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            if (!name && !rating && !genreId && !countryId && !year) {
                movies = await Movie.findAll({
                    include: [
                        {
                            model: Genre,
                        },
                        {
                            model: Country,
                        },
                    ],
                });
            }
            return res.json(movies); //Возвращаем найденный фильмы на клиент
        } catch (e) {
            next(ApiError.internal('Server error')); //В случае ошибки вызыв класса по работе с ошибками
        }
    }

    //Метод класса по созданию фильмов
    async create(req, res, next) {
        try {
            let { name, description, rating, genreId, countryId, year, link } = req.body; //Из запроса получаем название, описание, рейтинг, жанр, страну, год и ссылку
            const { img } = req.files; //Из запроса получение изображения
            let imgName = uuid.v4() + '.jpg'; //Даем название для изображения
            //Создание фильма в бд
            const movie = await Movie.create({
                name,
                description,
                rating,
                genreId,
                countryId,
                year,
                link,
                image: imgName,
            });
            img.mv(path.resolve(__dirname, '..', 'static', imgName)); //Переносим изображение в папку со статичными файалми
            //ПОлучение фильма созданного фильма из бд
            const newMovie = await Movie.findOne({
                where: { id: movie.id },
                include: [
                    {
                        model: Genre,
                    },
                    {
                        model: Country,
                    },
                ],
            });
            return res.json(newMovie); //Отправляем клиенты ответ с созданным фильмом
        } catch (e) {
            console.log(e)
            next(ApiError.internal('Server error')); //В случае ошибки вызыв класса по работе с ошибками
        }
    }

    //Метод класса по удалению фильма
    async delete(req, res, next) {
        try {
            const { id } = req.params; //Из запроса получение айди фильма
            const movie = await Movie.findOne({ where: { id } }); //поиск фильма по айди в б
            if (!movie) { //Если фильм не найден, то возвращем ошибку о том, что фильмы не найдены
                next(ApiError.badRequest('Movie not found'));
            }
            fs.unlinkSync(path.resolve(__dirname, '..', 'static', movie.image)); //Удалению изображние с сервера
            await movie.destroy(); //Удаление фильма из бд
            return res.json({ message: 'Movie was deleted' }); //Возвращаем ответ клиенты с успешным удалением
        } catch (e) {
            next(ApiError.internal('Server error')); //В случае ошибки вызыв класса по работе с ошибками
        }
    }
}

module.exports = new MovieController();
