const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const emailUser = req.body.email;
    const passwordUser = req.body.motdepasse;

    const user = {
        email: emailUser,
        password: passwordUser
    };

    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Il y a une erreur lors de la création de user"
        });
    });
};

// Méthode pour récupérer un utilisateur particulier  
exports.findOne = (req, res) => {
    const idUser = req.params.id;

    User.findByPk(idUser)
    .then(data => {
        if(data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: ` L'utilisateur avec l'identifiant ${idUser}n'existe pas.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message : `Erreur de la recherche de l'utilisateur avec l'ditantifaiant ${idUser}`
        });
    })
};

exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erreur lors de la récupération de tous les utilisateurs."
        });
    });
}