// Le fichier authentificationController.js gère l'authentification des utilisateurs

// J'importe la connexion Sequelize
const db = require("../models");

module.exports = {

    // Affiche la page d'inscription
    registerView: (req, res) => {
        res.render("register");
    },

    // Traite les données du formulaire d'inscription
    registerUser: async (req, res) => {
        console.log("### Controller RegisterUser");
        console.log("Contenu de req.body :", req.body);

        // Je récupère les données du formulaire
        const emailUser = req.body.email;
        const passwordUser = req.body.motdepasse;

        console.log("emailUser :", emailUser);
        console.log("passwordUser :", passwordUser);

        // Je vérifie que les champs sont bien remplis
        if (!emailUser || !passwordUser) {
            return res.render('register', {
                error: "Veuillez compléter tous les champs."
            });
        }

        try {
            // J'insère l'utilisateur dans la base de données via Sequelize
            await db.sequelize.query(
                "INSERT INTO users(email, password) VALUES(?, ?)",
                {
                    replacements: [emailUser, passwordUser],
                    type: db.Sequelize.QueryTypes.INSERT
                }
            );

            console.log("Utilisateur créé avec succès !");

            // Je redirige vers l'accueil après l'inscription
            res.redirect("/");

        } catch (erreur) {
            console.log("Erreur :", erreur.message);
            res.render('register', {
                error: "Erreur lors de l'enregistrement."
            });
        }
    },

 // Affiche tous les utilisateurs en JSON
findAll: async (req, res) => {
    try {
        const utilisateurs = await db.sequelize.query(
            "SELECT * FROM users",
            { type: db.Sequelize.QueryTypes.SELECT }
        );

        // Affiche les données directement dans le navigateur
        res.json(utilisateurs);

    } catch (erreur) {
        console.log("Erreur :", erreur.message);
        res.status(500).json({ error: "Erreur serveur" });
    }
},
    // Recherche un utilisateur par son ID
    findOne: async (req, res) => {
        try {
            // Je recherche l'utilisateur par son ID
            const resultats = await db.sequelize.query(
                "SELECT * FROM users WHERE id = ?",
                {
                    replacements: [req.params.id],
                    type: db.Sequelize.QueryTypes.SELECT
                }
            );

            // Je retourne les résultats en JSON
            res.json(resultats);

        } catch (erreur) {
            console.log("Erreur :", erreur.message);
            res.status(500).json({ error: "Erreur de requête" });
        }
    }
};