const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionSchema = new Schema({
    Puntaje: Number

});

var Evaluacion = mongoose.model( "Evaluacion", EvaluacionSchema);
module.exports = Evaluacion;