const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    nombre: String,
    tipo: String,
    descripcion: String
})

//Creamos el modelo pokemon
const Pokemon = mongoose.model('pokemon', pokemonSchema, "pokemon"); //entrenador entrenador

module.exports = Pokemon;