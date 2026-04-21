// J'importe la configuration de la base de données
const dbConfig = require("../config/db.config");

// J'importe Sequelize
const Sequelize = require("sequelize");

// Je crée la connexion à la base de données avec les infos de config
const sequelize = new Sequelize(
    dbConfig.BD, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        operatorsAliases: false, // Désactive les alias d'opérateurs (sécurité)
        dialect: "mysql",

        // Je configure le pool de connexions
        pool: {
            max: dbConfig.pool.max,       // Nombre maximum de connexions
            min: dbConfig.pool.min,       // Nombre minimum de connexions
            acquire: dbConfig.pool.acquire, // Temps max pour obtenir une connexion (ms)
            idle: dbConfig.pool.idle      // Temps avant de fermer une connexion inactive (ms)
        }
    }
);

// Je crée un objet db qui contiendra tout ce dont j'ai besoin
const db = {};

// J'ajoute Sequelize et la connexion dans l'objet db
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// J'importe le modèle User et je l'associe à la connexion
db.user = require("./User")(sequelize, Sequelize); // ⚠️ 2ème argument doit être Sequelize et non sequelize

// J'exporte l'objet db pour l'utiliser dans d'autres fichiers
module.exports = db;