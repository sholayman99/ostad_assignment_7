/**
 * Author: Md Sholayman
 * Description: This is the file where config has holded.
 * Date : 01 September,2023.
 */


const express = require('express');
const app = express();
require("dotenv").config();
const routes = require("./src/Routes/api");




//implementation of routes
app.use("/api",routes)


//implementation if undefined route
app.use("*" , (req,res) =>{
    res.status(404).json({message:"Fail",data:"Not Found"});
})






module.exports = app ;