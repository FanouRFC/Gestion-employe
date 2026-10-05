const {Sequelize} = require('sequelize')

// SOLOY MOT DE PASSE ANLE POSTGRESQL ANLISANY NY PARAMETRE FAHATELO @ Constructeur Sequelize io

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: 'postgres',
    port: 5432,
})

sequelize.authenticate()
.then(()=> console.log("connexion à la bd réussie"))
.catch((e)=>console.log("erreur de connexion \nen savoir plus : \n"+e))

module.exports = sequelize