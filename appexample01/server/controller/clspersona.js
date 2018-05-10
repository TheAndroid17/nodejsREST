'use strict'
//var cx = require("../config/db.js");
var mpersona = require("../modell/persona.js");

exports.createPersona = function (req, res){
    //{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}

        mpersona.Persona.create({
        //id_persona: req.body.id_persona,
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
    //console.log(data);
	}, function(err){
		console.log(err);
	});

}
exports.updatePersona = function (req, res){
    mpersona.Persona.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dni: req.body.dni
  },{
        where: {id_persona : req.params._id}
    });
    return readPersona(req, res);
}

exports.deletePersona = function (req, res){
    //console.log("llegue delete");
    mpersona.Persona.destroy({
        where: {
        id_persona: req.params._id
        }
    });
     return readPersona(req, res);
}

exports.readPersona = readPersona;
