const {Enseignant} = require('../models/index')

exports.createEnseignant = async (req, res) =>{
    // A optimiser
    const {numens, nom, nbrheures, taux_horaire} = req.body
    try{
        const enseignant = await Enseignant.create({numens, nom:nom, nbrheures, taux_horaire})
        res.json({"message": "Créé avec succes", "enseignant": enseignant})
    }
    catch(e){
        console.log(e)
        res.json("Erreur lors de la création d'enseignant")
    }
    
}

exports.gellAllEnseignant = async (req,res)=>{
    try{
        const all_enseignant = await Enseignant.findAll()
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

