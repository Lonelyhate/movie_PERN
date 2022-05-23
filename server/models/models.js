const sequelize = require('../db');// Подключение бд
const { DataTypes } = require('sequelize'); //Подключение типов

//Создание таблиц
const Genre = sequelize.define('genre', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Country = sequelize.define('country', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Movie = sequelize.define('movie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    rating: { type: DataTypes.DECIMAL(10, 1), allowNull: false },
    image: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
    link: {type: DataTypes.STRING, allowNull: false}
});

//Создание связей
Genre.hasMany(Movie)
Movie.belongsTo(Genre)

Country.hasMany(Movie)
Movie.belongsTo(Country)

module.exports = {
    Genre,
    Country,
    Movie
}
