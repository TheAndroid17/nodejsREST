'use strict'
var Sequelize = require('sequelize');
var cx = require("../config/db.js");
var Persona = cx.connection("public").define('persona', {
    id_persona: {
		primaryKey:true,
		type:Sequelize.STRING
	},
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    dni: Sequelize.STRING
});
module.exports.Persona = Persona;
