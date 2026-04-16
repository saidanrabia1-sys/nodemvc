/**
 * Le fichier app.js est une application de type expressjs
 */

const express = require("express");

//J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");
const authentificationRoute = require("./routes/authentificationRoute");

// J'inite l'application express
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");

app.use("/", accueilRoute);

// Ici, je laisse la route à "/", puis dans authentificationController.js, je précise la route router.get("/register")
app.use("/", authRoute);

// Exporte l'application pour l'utiliser dans d'autres fichiers
module.exports = app;

