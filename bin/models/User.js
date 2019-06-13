const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
})

var User = monggose.model( "User", UserSchema);
module.exports = User;