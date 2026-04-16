/**
 * Ce fichier est un contrôleur
 * Dans ce fichier je créer les routes de la page accueil.ejs
 */

const express = require("express");

const router = express.Router();

// Maintenant, je trace ma route en utilisant route
const accueilContreller = require("../controllers/accueilController");

// La route pour l'accueil, localhost:3007
router.get("/", accueilContreller.accueilViews);

module.exports = router;

