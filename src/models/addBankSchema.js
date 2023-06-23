const mongoose = require('mongoose');

// Define the Bank schema
const addBankSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true
    },

    accno:{
      type:String,
      required:true
      },


  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true
 },
  bankdata: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
},{timestamps:true});

module.exports = mongoose.model('addBank', addBankSchema);
