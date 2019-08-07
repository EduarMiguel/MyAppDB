var mongoose = require("mongoose");
const User = require ("./models/User");

class Controller{
constructor(){
    this.connect();
}
async connect(){
    try{
        await mongoose.connect("mongodb+srv://adminDB:qwerty123@cluster0-4pksg.mongodb.net/myappdb?retryWrites=true", {useNewUrlParser: true})
        console.log("Connected!")
    } catch(e){
        console.error(e);
    }
}

    getUsers(res){
        User.find({}, (err, users) => {
        if(err) throw err;

        res.send( users );
        })
    }

    postUsers(req, res){
      let user = req.body.users;
      User.create( user, (err, newUser)=>{
          if(err) throw err;
          res.send({newuser:newUser})
      })
}

}

exports.controller = new Controller()