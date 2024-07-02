const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('localhost', 'database', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;