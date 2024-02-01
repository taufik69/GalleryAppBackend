require("dotenv").config();
const express = require('express')
const path = require('path')
const app = express();
const DBConnection = require('./DBconnection/DBConnection.js')
const cors = require("cors");
const Routes = require("./Routes")


/**
 * All Common middleware
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/upload", express.static(path.join(__dirname, "uploads")));
app.use(Routes);

/**
 * Database Connection in server.js 
 * function DBConnection()
 */
DBConnection()
app.get('/', function (req, res) {
  res.send('Hello World')
})



app.listen(process.env.PORT || 5000 , ()=> {
    console.log(`Server Running on port ${process.env.PORT}`);
})