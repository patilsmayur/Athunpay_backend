const mongoose = require('mongoose');

// Define the Bank schema
const addBnkSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('addBank', addBankSchema);
