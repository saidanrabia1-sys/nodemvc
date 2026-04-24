/**
 * Le fichier app.js est une application de type expressjs
 */

const express = require("express");

//  1. Je déclare app EN PREMIER
const app = express();

//  2. J'importe les modules
const db = require("./models");
const accueilRoute = require("./routes/accueilRoute");
const authRoute = require("./routes/authentificationRoute");

//  3. Je configure le moteur de vues
app.set("views", "./views");
app.set("view engine", "ejs");

//  4. Je configure les middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//  5. Je synchronise la base de données
db.sequelize.sync({ force: false })
    .then(() => console.log("Base de données synchronisée !"))
    .catch((err) => console.log("Erreur : " + err.message));

//  6. Je déclare les routes EN DERNIER
app.use("/", accueilRoute);
app.use("/", authRoute);

//  7. J'exporte l'application
module.exports = app;