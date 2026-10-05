const {Enseignant, sequelize} = require('../models/index')

async function getStatisticsService(params) {
    const [stats] = await sequelize.query(`SELECT MAX(tauxhoraire * nbheures) AS salaireMax,MIN(tauxhoraire * nbheures) AS salaireMin, SUM(tauxhoraire * nbheures) AS SalaireTotal from "ENSEIGNANT"`)
    const max = stats[0].salairemax || 0
    const min = stats[0].salairemin || 0
    const total = stats[0].salairetotal || 0

    return {max, min, total}
}

module.exports={
    getStatisticsService
}