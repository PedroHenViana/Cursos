import { Sequelize } from 'sequelize';

const connection = new Sequelize('guiaperguntas', 'root', '3245', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export default connection;