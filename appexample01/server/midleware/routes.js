'use strict'
var clsp = require('../controller/clspersona.js')
module.exports = function(app) {

    app.get('/',function(req,res){
      res.send("Bienvenidos");
    });
    app.get('/api/persona',clsp.readPersona);//Consultar
    app.post('/api/persona', clsp.createPersona);//insertar
    app.put('/api/persona/:_id', clsp.updatePersona);//actualizar
    app.delete('/api/persona/:_id', clsp.deletePersona);//eliminar

  };
