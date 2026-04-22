// Le fichier authentificationController.js gère l'authentification des utilisateurs

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

        // Je prépare la requête SQL d'insertion
        let requeteSql = "INSERT INTO user(id, email, password) VALUES(?, ?, ?)";

        // Je prépare les valeurs à insérer (null = ID auto-incrémenté)
        let ordreDonnees = [null, emailUser, passwordUser];

        // Je me connecte à la base de données via le middleware
        req.getConnection((erreur, connection) => {

            // Si erreur de connexion à la BDD
            if (erreur) {
                console.log("Erreur connexion à la BDD :", erreur);
            } else {

                // J'exécute la requête SQL avec les données du formulaire
                connection.query(requeteSql, ordreDonnees, (erreur, nouvelUtilisateur) => {

                    // Si erreur lors de la requête SQL
                    if (erreur) {
                        console.log("Erreur de requête :", erreur);
                    } else {
                        console.log("Utilisateur créé avec succès !");

                        // Je redirige vers l'accueil après l'inscription
                        res.redirect("/");
                    }
                });
            }
        });
    },

    // Recherche un utilisateur par son ID
    findOne: (req, res) => {

        // Je prépare la requête SQL de recherche
        let requeteSql = "SELECT * FROM user WHERE id = ?";

        // Je me connecte à la base de données
        req.getConnection((erreur, connection) => {

            // Si erreur de connexion
            if (erreur) {
                console.log("Erreur connexion à la BDD :", erreur);
                res.status(500).json({ error: "Erreur de connexion" });
            } else {

                // J'exécute la requête avec l'ID passé en paramètre d'URL
                connection.query(requeteSql, [req.params.id], (erreur, resultats) => {

                    // Si erreur lors de la requête
                    if (erreur) {
                        console.log("Erreur de requête :", erreur);
                        res.status(500).json({ error: "Erreur de requête" });
                    } else {
                        // Je retourne les résultats en JSON
                        res.json(resultats);
                    }
                });
            }
        });
    }
};