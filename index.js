const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./src/routes/userRoutes");
const otherAppHistory = require("./src/routes/otherAppAuthHistoryRoutes");
const netBankingHistory = require("./src/routes/netBankingAuthHistoryRoutes");
const transactionAuthHistory = require("./src/routes/transactionAuthHistoryRouters");
const paymentHistory = require("./src/routes/paymentHistoryRouters");
const bodyParser = require('body-parser')




const Cors = require('cors');

require('dotenv').config();
app.use(Cors())
app.use(express.json())
app.use(bodyParser.json())



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
app.use('/',otherAppHistory);
app.use('/',netBankingHistory);
app.use('/',transactionAuthHistory);
app.use('/',paymentHistory);




app.listen(process.env.PORT,()=>{
    console.log("hello world!")
})