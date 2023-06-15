const mongoose = require('mongoose');

const paymenthistorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  avid: {type:String},
  cardType:{ type: String },
  cardNumber:{ type: String},
  cardProvider:{ type: String},
  bankName: { type: String, required: true },
  paymentTime: { type: String},
  paymentDate: { type: Date, required: true },
  deviceCity: { type: String, required: true },
  deviceLatitude: { type: String, required: true },
  status:{ type: String},
  deviceLongitude: { type: String, required: true },
  deviceIPAddress: { type: String, required: true },
  device:{ type: String },
  deviceUniqueID:{ type: String},
  deviceDistance:{ type: String},
  paymentAmount:{ type: String}
 
});


module.exports = mongoose.model('PaymentHistory', paymenthistorySchema);
