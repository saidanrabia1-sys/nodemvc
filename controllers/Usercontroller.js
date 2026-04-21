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
}