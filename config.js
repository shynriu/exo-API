const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movie_db', 'jimmy', 'Jimmytran-0502', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;