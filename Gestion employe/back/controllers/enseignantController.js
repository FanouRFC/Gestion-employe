const {Enseignant, sequelize} = require('../models/index')
const { getStatisticsService } = require('../services/enseignant.service')

exports.createEnseignant = async (req, res) =>{

    
    try{
        const enseignant = await Enseignant.create(req.body)
        res.json({"message": "Créé avec succes", "enseignant": enseignant})
    }
    catch(e){
        console.log(e)
        res.json("Erreur lors de la création d'enseignant")
    }
    
}

exports.getAllEnseignant = async (req,res)=>{
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
        const {nom, nbheures, tauxhoraire} = req.body
        const enseignant = await Enseignant.findByPk(numens)

        if(!enseignant){
            return res.json({"message": "L'enseignant n'existe pas"})
        }
        else{
            if(nom!=null){
                enseignant.nom = nom
                enseignant.save()
            }
            if(nbheures !=null){
                enseignant.nbheures = parseInt(nbheures)
                enseignant.save()
            }
            if(tauxhoraire != null){
                enseignant.tauxhoraire = parseFloat(tauxhoraire)
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

    var stats = await getStatisticsService()

    res.json(stats)
}

    //Recuperer dernier ID et faire +1 la partie qui est un chiffre
    exports.getNextId = async (req, res) => {
        try {
            let nextId = "E-0001";

            const lastEnseignant = await Enseignant.findOne({ order: [['numens', 'DESC']] });
            
            if (lastEnseignant) {
              const lastNum = lastEnseignant.numens.split("-")[1];
              const nextNum = parseInt(lastNum) + 1;
              const padded = nextNum.toString().padStart(4, "0");
              nextId = `E-${padded}`;
            }
            
      
          res.json({ nextId });
      
        } catch (e) {
          console.error(e);
          res.status(500).json({ error: "Erreur lors de la génération du prochain ID" });
        }
      };
      
  