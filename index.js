const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>I am Inevitable!</h1>")
})


app.listen(8080,()=>{
    console.log("hello world!")
})