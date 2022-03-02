const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrenadorSchema = new Schema({
    nombre: String,
    companero: String,
    origen: String,
    contrasena: String
})

//Creamos el modelo entrenador
const Entrenador = mongoose.model('entrenador', entrenadorSchema, "entrenador"); //entrenador entrenador

module.exports = Entrenador;