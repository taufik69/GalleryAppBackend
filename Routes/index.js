const  express = require('express');
const _ = express.Router();
const apiroutes = require('./Api');

const base_url = process.env.BASE_URL; 
_.use(base_url , apiroutes);
_.use(base_url,(req,res)=> {
    res.status(404).json({
        Error:" Routes Not Found"
    })
}) 

module.exports = _;