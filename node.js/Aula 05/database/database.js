const { Sequelize } = require('sequelize');

const connection = new Sequelize('guiaPerguntas', 'root', '3245', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = connection;