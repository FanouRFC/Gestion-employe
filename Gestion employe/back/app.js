const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const enseignantRoutes = require('./routes/enseignantRoutes')

app.use('/enseignant', enseignantRoutes)

app.listen(9000, ()=>{console.log(`Serveur lancé sur le port : 9000`)})