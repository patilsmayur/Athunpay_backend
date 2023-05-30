const mongoose = require('mongoose');

// Define the Card schema
const addCardSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true
 },
  cardNumber: {
    type: String,
    required: true
  },
  cardNickName: {
    type: String,
    required: true
  },
  expirationDate: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  }

},{timestamps:true});


module.exports = mongoose.model('addCard', addCardSchema);
