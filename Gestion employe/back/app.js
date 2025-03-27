const express = require('express')
const app = express()

const port = 5050
app.listen(port, ()=>{console.log(`Serveur lancé sur le port : ${port}`)})