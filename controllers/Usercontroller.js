const { where } = require("sequelize");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const emailUser = req.body.email;
    const passwordUser = req.body.motdepasse;

    if(!emailUser || !passwordUser) {
        res.status(400).send({
            message: "veuillez compléter les champs"
        });
    }

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
};

exports.delete = (req, res) => {
    const idUser = req.params.id;

    User.destroy({
        where: {id: idUser}
    }).then(num => {
        if(num == 1){
            res.send({
                message: "utilisateur à été supprimer avce succès"
            });
        } else {
            res.send({
                message: `Impossible de supprimer l'utilisateur dont l'id est ${idUser}. peut-être que l'utilisateur n'existe pas.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Impossible de supprimer l'utilisateur dont l'id ${idUser}`+ err.messsage 
        });
    });
};

exports.deleteAll = (req, res) => {
    User.destroy({
        where:{},
        truncate: false 
    }).then(num => {
        res.send({
            message: `${num} tous les utilisateur ont été supprimer`
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Echec.Une erreur est survenue lors de le suppression de tous les utilisatuers" 
        })
    });
};

exports.update = (req, res) => {
    const idUser = req.params.id;

    User.update(req.body, {
        where: {id: idUser}
    }).then(num => {
        if(num == 1 ) {
            res.send({
                message: "Utilisateur mis à jour avec succés"
            })
        } else {
            res.send({
                message: ` L'utilisateur avec l'id ${idUser} n'a pas pu être mis à jour. peut-être qu'il n'existe pas. `
            })
        }
    
    }).catch(err => {
        res.status(500).send({
            message: " Impossible de mettre à jour l'utilisateur dont l'id est"+ idUser
        });
    });
};