const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '3245',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;