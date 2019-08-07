const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgresoSchema = new Schema({
    status: String,
    fecha_inicio: Number,
    fecha_final: Number,
    user_id: [
      {
      type: Schema.Types.ObjectId,
      ref: "User"
      }
    ],
    niveles_id: [
      {
      type: Schema.Types.ObjectId,
      ref: "Niveles"
      }
    ]

});

var Progreso = mongoose.model( "Progreso", ProgresoSchema);
module.exports = Progreso;