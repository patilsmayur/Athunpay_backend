const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./src/routes/userRoutes");
const Cors = require('cors');
app.use(Cors())
app.use(express.json())



mongoose.connect("mongodb+srv://mayur:mayur9799@cluster0.emmy41q.mongodb.net/?retryWrites=true&w=majority", {
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


app.listen(8080,()=>{
    console.log("hello world!")
})