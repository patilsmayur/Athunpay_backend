const mongoose = require('mongoose');

const paymenthistorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  bankName: { type: String, required: true },
  paymentTime: { type: Date, default: Date.now },
  paymentDate: { type: Date, required: true },
  deviceCity: { type: String, required: true },
  
  deviceIPAddress: { type: String, required: true }
 
});


module.exports = mongoose.model('PaymentHistory', paymenthistorySchema);
