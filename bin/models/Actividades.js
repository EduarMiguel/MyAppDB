const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadSchema = new Schema({
    tipo: String,
    niveles_id: [
      {
      type: Schema.Types.ObjectId,
      ref: "Niveles"
      }
    ],
});

var Actividad = mongoose.model( "Actividad", ActividadSchema);
module.exports = Actividad;