const mongoose = require('mongoose');

// Define the Bank schema
const addBankSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true
 },
  name: {
    type: String,
    required: true
  },
  
  branch: {
    type: String,
    required: true
  },
  account_number: {
    type: String,
    required: true
  }
},{timestamps:true});

module.exports = mongoose.model('addBank', addBankSchema);
