import express from "express";
// const express = require("express");
import bodyParser from "body-parser";

import usersRoutes from "./Routes/Users.js";

const app = express();
const PORT = 4000;



app.use(bodyParser.json()); //it  specify that we'll use json data in our app.

app.use('/Users', usersRoutes);

//The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root

app.get('/',(req,res) =>{

    console.log("test");
    
    res.send('Hello from Homepage.');
    
})

app.listen(PORT,() => console.log(`Server live on port: http://localhost:${PORT}`));