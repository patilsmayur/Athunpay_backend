const mongoose = require('mongoose');

// Define the Card schema
const addCardSchema = new mongoose.Schema({
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

});


module.exports = mongoose.model('addCard', addCardSchema);
