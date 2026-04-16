/**
 * Le fichier app.js est une application de type expressjs
 */

const express = require("express");

//J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");

// J'inite l'application express
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");

app.use("/", accueilRoute);

// Exporte l'application pour l'utiliser dans d'autres fichiers
module.exports = app;
