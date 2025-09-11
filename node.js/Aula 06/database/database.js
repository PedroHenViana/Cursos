import { Sequelize } from "sequelize";

const connection = new Sequelize('guiapress', 'root', '3245', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

export default connection;