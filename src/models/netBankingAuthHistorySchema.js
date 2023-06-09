const mongoose = require('mongoose');


const netBankingAuthHistorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bankName: { type: String, required: true },
  AVID: { type: String, required: true },
  loginDate: { type: Date, required: true },
  loginTime: { type: String, required: true },
  loginCity: { type: String, required: true },
  loginLatitude: { type: Number, required: true },
  loginLongitude: { type: Number, required: true },
  status: { type: String, required: true },
  loginIP: { type: String, required: true }
  
 
});



module.exports = mongoose.model('NetBankingAuthHistory', netBankingAuthHistorySchema);
