const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NivelSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    genero: String
});

var Nivel = mongoose.model( "Nivel", NivelSchema);
module.exports = Nivel;