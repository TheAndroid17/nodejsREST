'use strict'
var cx = require("../config/db.js");
var mpersona = require("../modell/persona.js");

exports.createPersona = function (req, res){
    //{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}

        mpersona.Persona.create({
        id_persona: req.body.id_persona,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dni: req.body.dni
      });
      return readPersona(req, res);
}

/*exports.readLogin = function (us, pw){
    return mbusuario.User.findOne({where:{nombre_usuario:us, clave: pw}})
}*/

var readPersona = function (req, res){
    return mpersona.Persona.findAll().then(function(data){
		res.send(data);
    console.log(data);
	}, function(err){
		console.log(err);
	});

}
/*exports.updateUser = function (req, res){
    mbusuario.User.update({
    campo1: req.body.campo1,
    campo2: req.body.campo2,
    estado: "1"
  },{
        where: {id_usuario : req.params._id}
    });
    return readUser(req, res);
}*/

/*exports.deleteUser = function (req, res){
    console.log("llegue delete");
    mbusuario.User.destroy({
        where: {
        id_usuario: req.params._id
        }
    });
     return readUser(req, res);
}*/

exports.readPersona = readPersona;
