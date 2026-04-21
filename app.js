/**
 * Le fichier app.js est une application de type expressjs
 */

const express = require("express");
// importe le mysql2
const mysql2 = require("mysql2");

// J'importe express-myconnection utilisé pour me connecter à la BDD
const myconnection = require('express-myconnection');


//J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");

const authRoute = require("./routes/authentificationRoute");

const db = require("./models");

// J'inite l'application expressjs
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");

// Je précise que j'utilise le dossier 'public' qui contient les fichiers statics
app.use(express.static('public'));

db.sequelize.sync({force: true}).then(() => {
    console.log("sync db");
}).catch((err) => {
    console.log("Failed to sync db : " + err.message);
});

/*Je configure les éléments attendus pour me connecter à Mysql
const optionsConnexionBaseDeDonnees = {
    host: "localhost",
    user: "root",
    password: "Alma12.2025",
    database: "maygourmet",
    port: 3306
};

// Middleware pour se connecter à la BDD Mysql pool est la stratégie de connexion à la BDD Mysql
app.use(myconnection(mysql2,optionsConnexionBaseDeDonnees,"pool"));*/


app.use("/", accueilRoute);

// Ici, je laisse la route à "/", puis dans authentificationController.js, je précise la route router.get("/register")
app.use("/", authRoute);

// Exporte l'application pour l'utiliser dans d'autres fichiers
module.exports = app;

