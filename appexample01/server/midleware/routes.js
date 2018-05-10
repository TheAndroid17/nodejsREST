'use strict'
var clsp = require('../controller/clspersona.js')
module.exports = function(app) {

    app.get('/',function(req,res){
      res.send("Bienvenidos");
    });
    app.get('/api/persona',clsp.readPersona);
    app.post('/api/persona', clsp.createPersona);
    //app.put('/api/user/:_id', cbusuario.updateUser);
    //app.delete('/api/user/:_id', cbusuario.deleteUser);

  };
