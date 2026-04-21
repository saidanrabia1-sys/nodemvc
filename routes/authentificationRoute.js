/**
 * Le fichier authentificationRoute.js a pour mission de tracer les routes pour : 
 * enregistrer oiu créer un utilisateur
 * se connecter à son compte utilisateur 
 */
const express = require("express");

const authController = require("../controllers/authentificationController");

const router = express.Router();

router.get("/register", authController.registerView);


router.post("/register", authController.registerUser);

// J'exporte le "router" pour le rendre accesible depuis d'autres fichiers de l'application
module.exports = router;