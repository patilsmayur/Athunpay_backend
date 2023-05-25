const mongoose = require('mongoose');

const paymentHistorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cardType: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardProvider: { type: String, required: true },
  bankName: { type: String, required: true },
  paymentTime: { type: Date, default: Date.now },
  paymentDate: { type: Date, required: true },
  deviceCity: { type: String, required: true },
  deviceLongitude: { type: Number, required: true },
  deviceLatitude: { type: Number, required: true },
  status: { type: String, required: true },
  deviceIPAddress: { type: String, required: true },
  device: { type: String, required: true },
  deviceUniqueID: { type: String, required: true },


  
  deviceDistance: { type: Number },
  paymentAmount: { type: Number, required: true }
});


module.exports = mongoose.model('PaymentHistory', paymentHistorySchema);
