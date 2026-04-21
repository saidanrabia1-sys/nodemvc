/**
 * Le fichier authentificationController.js a poour mission de gérer les authentifications des utilisations
 */

module.exports = {
    // la vue register
    registerView : (req, res) => {
        res.render("register");
    },
    // Je crée une methode asynchrome (async)
    registerUser: async (req, res) => {
        console.log("#### Controller RegisterUser **");
        console.log("#### Controller - req : ", req.body);
    }
}
