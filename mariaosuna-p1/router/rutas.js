const express = require('express') //Requerimos Express
const router = express.Router();

// Ahora, CORTAMOS del fichero principal 01-express.js
// las dos rutas que tenemos: la principal ( / ) y la 
// de contactos ( /contaco )
// Importante que ya no usaremos el app.get(...), ahora
//vamos a utilizar las rutas, por lo que deberemos poner:
router.get('/', (req, res) => {
    res.render("index", { titulo: "La mayor comunidad de entrenadores Pokémon" })
})

router.get('/contacto', (req, res) => {
        res.render("contacto", { tituloContacto: "Contáctanos" })
    })

router.get('/bienvenida',(req,res)=>{
    res.render("bienvenida",{ tituloBienvenida: "Bienvenid@ a la mayor comunidad de entrenadores Pokémon"})
})
    // Por último, vamos a exportarlo:
module.exports = router;