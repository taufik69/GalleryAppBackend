const mongoose = require("mongoose");
require("dotenv").config();

const Connection =  () => {
    mongoose.connect(process.env.MONGODBURL).then(()=> {
        console.log("database connection sucessfully done");
    })
  };

 module.exports =  Connection;