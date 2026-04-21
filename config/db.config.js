module.exports = {
    // Adresse du serveur de base de données
    HOST: "localhost",

    // Nom d'utilisateur MySQL
    USER: "root",

    // Mot de passe MySQL
    PASSWORD: "pd+12sQm",

    // Nom de la base de données
    BD: "maygourmet",

    // Type de base de données utilisée (mysql, postgres, sqlite...)
    dialect: "mysql",

    // Configuration du pool de connexions
    pool: {
        max: 5,         // Maximum de connexions simultanées
        min: 0,         // Minimum de connexions maintenues
        acquire: 30000, // Temps max (ms) pour obtenir une connexion avant erreur
        idle: 10000     // Temps max (ms) qu'une connexion peut rester inactive
    }
};