const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Enseignant = sequelize.define('Enseignant', {
    numens:{
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nbrheures: {
        type: DataTypes.INTEGER
    },
    taux_horaire:{
        type: DataTypes.FLOAT
    }
},{
    timestamps: true
})

module.exports = Enseignant