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
    nbheures: {
        type: DataTypes.INTEGER
    },
    tauxhoraire:{
        type: DataTypes.FLOAT
    },
    salaire:{
        type: DataTypes.FLOAT
    },
},{
    hooks: {
        beforeCreate: (enseignant) => {
          enseignant.salaire = enseignant.nbheures * enseignant.tauxhoraire;
        },
        beforeUpdate: (enseignant) => {
          enseignant.salaire = enseignant.nbheures * enseignant.tauxhoraire;
        }
      },
    tableName: 'ENSEIGNANT',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
})

module.exports = Enseignant