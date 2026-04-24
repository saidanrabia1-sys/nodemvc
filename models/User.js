/**
 * User.js est un modèle qui sert à créer des utilisateur. Le modèle User est de : id, email et password
 */
const DataTypes = require("sequelize");
const sequelize = require("../db");

module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            unique: true 
        },
        password: {
            type: Sequelize.STRING
        }
        
        
    });

    return UserModel;
}   

/*
'user', {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primarkey: true,
            },
            email: {
                type: DataTypes.STRING?
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
            },
    }   */