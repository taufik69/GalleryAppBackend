const express = require("express");
const _ = express.Router();
const Registraiton = require('../../Controller/Registration.controller.js')
_.post("/registration",Registraiton)

module.exports = _;