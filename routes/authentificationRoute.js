/**
 * Le fichier authentificationRoute.js a pour mission de tracer les routes pour :
 * - enregistrer ou créer un utilisateur
 * - se connecter à son compte utilisateur
 */

const express = require("express");


// Import du controller — OBLIGATOIRE
const authController = require("../controllers/authentificationController");

const userController = require("../controllers/Usercontroller");

const router = express.Router();

// Affiche le formulaire d'inscription
router.get("/register", authController.registerView);

router.post("/register", userController.create);

// Recherche un utilisateur par son ID
router.get("/users/:id", authController.findOne);

// Route pour afficher tous les utilisateurs
router.get("/users", authController.findAll);

router.delete("/users/:id", userController.delete);

router.delete("/users", userController.deleteAll);

router.put("/users/:id", userController.update);9

/* Traite le formulaire d'inscription
router.post("/register", authController.registerUser);*/



// J'exporte le router
module.exports = router;