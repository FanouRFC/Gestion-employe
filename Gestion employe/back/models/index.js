const sequelize = require('../config/database')
const Enseignant = require('./enseignant')

sequelize.sync()
.then(()=>console.log("base de données synchronisée"))
.catch(()=> console.log("erreur de synchronisation"))

module.exports = {Enseignant, sequelize}
