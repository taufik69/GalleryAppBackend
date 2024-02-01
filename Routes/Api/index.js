const express = require("express");
const _ = express.Router();
const registrationApi = require('./Registraiton.js');
_.use('/auth' , registrationApi)

module.exports = _;