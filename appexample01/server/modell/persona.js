'use strict'
var Sequelize = require('sequelize');
var cx = require("../config/db.js");
var Persona = cx.connection("public").define('persona', {
    id_persona: {
		primaryKey:true,
    autoIncrement:true,
		type:Sequelize.INTEGER
	},
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    dni: Sequelize.STRING
});
module.exports.Persona = Persona;
