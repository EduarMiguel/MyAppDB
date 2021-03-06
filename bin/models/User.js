const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    genero: String
});

var User = mongoose.model( "User", UserSchema);
module.exports = User;