const {Enseignant} = require('../models/index')

exports.createEnseignant = async (req, res) =>{
    // A optimiser
    const {numens, nom} = req.body
    try{
        const enseignant = await Enseignant.create({numens, nom})
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

