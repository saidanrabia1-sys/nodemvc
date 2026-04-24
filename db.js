/**
 * Permet à Sequelize de se connecter à la base de données 
 */
const Sequelize = require ("sequelize");

const sequelize = new Sequelize(
    'maygourmet', 'root', 'Alma12.2025', {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;