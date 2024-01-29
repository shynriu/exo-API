const { DataTypes} = require('sequelize');
const sequelize = require('./config');

const Movie = sequelize.define('Movies_list', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Movie;
