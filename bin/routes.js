const express = require ("express");
const app = express();
const { controller }= require("./Controller");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (rep, res)=>{
    res.send("funciona");
})

app.get("/user", (rep, res)=>{
   controller.getUsers( res);
})

app.post("/users", (req, res)=>{
    controller.postUsers(req, res)
})

//Progreso del usuario
app.get("/progreso/:id_usuario", (req, res)=>{
    var id_usuario=req.params.id_usuario;
  console.log(id_usuario);
   res.send("aprobado");
})

//Nivel aprobado o no aprobado
app.get("/progreso/:id_nivel", (req, res)=>{
    var id_nivel=req.params.id_nivel;
  console.log(id_nivel);
    res.send("status");
})

//Porcentaje del nivel 
app.get("/nivel/:id_progreso", (req, res)=>{
    var id_progreso=req.params.id_progreso;
   console.log(id_progreso);
    res.send("porcentaje"); 
})

exports.app = app;