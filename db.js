/**
 * Permet à Sequelize de se connecter à la base de données 
 */
const Sequelize = require ("sequelize");

const sequelize = new Sequelize(
    'maygourmet', 'root', 'pd+12SQm', {
        host: "localhost",
        dialect: "mysql"
    }
);
