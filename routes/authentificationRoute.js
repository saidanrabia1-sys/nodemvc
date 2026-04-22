/**
 * Le fichier authentificationRoute.js a pour mission de tracer les routes pour :
 * - enregistrer ou créer un utilisateur
 * - se connecter à son compte utilisateur
 */
const express = require("express");
const router = express.Router();

// J'importe le controller
const authController = require("../controllers/authentificationController");

// Affiche le formulaire d'inscription
router.get("/register", authController.registerView);

/* Traite le formulaire d'inscription
router.post("/register", authController.registerUser);*/

// Recherche un utilisateur par son ID
router.get("/users/:id", authController.findOne);

router.get("/users", userController.findAll);

// J'exporte le router
module.exports = router;