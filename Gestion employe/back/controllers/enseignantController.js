const {Enseignant, sequelize} = require('../models/index')

exports.createEnseignant = async (req, res) =>{
 
    //Recuperer dernier ID et faire +1 la partie qui est un chiffre

    const lastEnseignant = await Enseignant.findOne({ order: [['numens', 'DESC']]})
    const n = (lastEnseignant.numens).split("")
    n.splice(0, 1)
    var newIDNumber = "E" + (parseInt(n.join("")) + 1)

    const {nom, nbrheures, taux_horaire} = req.body
    
    try{
        const enseignant = await Enseignant.create({numens:newIDNumber, nom:nom, nbrheures, taux_horaire})
        res.json({"message": "Créé avec succes", "enseignant": enseignant})
    }
    catch(e){
        console.log(e)
        res.json("Erreur lors de la création d'enseignant")
    }
    
}

exports.gellAllEnseignant = async (req,res)=>{
    try{
        const all_enseignant = await Enseignant.findAll({order: [['numens', 'ASC']]})
        res.json({"Enseignants": all_enseignant})
    }
    catch(e){
        console.log(e)
        res.json("Erreur de récuperation")
    }
}

exports.deleteOneEnseignant = async(req, res)=>{
    try{
        const numens = req.params.numens
        if(!numens){
            res.json({"message": "Selectionner l'enseignant à supprimer"})
        }
        const d = await Enseignant.destroy({where: {'numens': numens}})
        res.json({"message": "Enseignant supprimé avec succès"})
    }
    catch(e){
        console.log(e)
        res.json("Erreur de suppression")
    }
}

exports.updateOneEnseignant = async (req, res)=>{
    try{
        const numens = req.params.numens
        if(!numens){
            return res.json({"message": "Selectionner enseignant à modifier"})
        }
        const {nom, nbrheures, taux_horaire} = req.body
        const enseignant = await Enseignant.findByPk(numens)

        if(!enseignant){
            return res.json({"message": "L'enseignant n'existe pas"})
        }
        else{
            if(nom!=null){
                enseignant.nom = nom
                enseignant.save()
            }
            if(nbrheures !=null){
                enseignant.nbrheures = parseInt(nbrheures)
                enseignant.save()
            }
            if(taux_horaire != null){
                enseignant.taux_horaire = parseFloat(taux_horaire)
                enseignant.save()
            }

            return res.json({"message": "L'enseignant a été mis à jour"})
        }
    }
    catch(e){
        console.log(e)
        res.json("Erreur de mise a jour")
    }
}

exports.getStatistics = async (req, res)=>{

    const [stats] = await sequelize.query("SELECT MAX(taux_horaire * nbrheures) AS salaireMax,MIN(taux_horaire * nbrheures) AS salaireMin, SUM(taux_horaire * nbrheures) AS SalaireTotal from enseignant")
    const max = stats[0].salairemax
    const min = stats[0].salairemin
    const total = stats[0].salairetotal

    res.json({max, min, total})

}


