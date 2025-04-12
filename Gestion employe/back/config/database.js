const {Sequelize} = require('sequelize')

// SOLOY MOT DE PASSE ANLE POSTGRESQL ANLISANY NY PARAMETRE FAHATELO @ Constructeur Sequelize io

const sequelize = new Sequelize('etablissement', 'postgres', 'myrhl', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
})

sequelize.authenticate()
.then(()=> console.log("connexion à la bd réussie"))
.catch((e)=>console.log("erreur de connexion \nen savoir plus : \n"+e))

module.exports = sequelize