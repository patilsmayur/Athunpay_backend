const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./src/routes/userRoutes");
const Cors = require('cors');
require('dotenv').config();
app.use(Cors())
app.use(express.json())



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });

app.get('/',(req,res)=>{
    res.send("<h1>I am Inevitable!</h1>")
})
app.use('/',userRoutes);


app.listen(process.env.PORT,()=>{
    console.log("hello world!")
})