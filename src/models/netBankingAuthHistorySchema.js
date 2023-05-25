const mongoose = require('mongoose');


const netBankingAuthHistorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bankName: { type: String, required: true },
  netBankingAuthId: { type: String, required: true },
  loginDate: { type: Date, required: true },
  loginTime: { type: String, required: true },
  loginCity: { type: String, required: true },
  loginLatitude: { type: Number, required: true },
  loginLongitude: { type: Number, required: true },
  status: { type: String, required: true },
  loginDevice: { type: String, required: true },
  loginIpAddress: { type: String, required: true },
  logoutDate: { type: Date },
  logoutTime: { type: String },
  logoutCity: { type: String },
  logoutLongitude: { type: Number },
  logoutLatitude: { type: Number },
  loginDeviceDistance: { type: Number },
  loginDeviceUniqueId: { type: String },
  logoutType: { type: String }
});



module.exports = mongoose.model('NetBankingAuthHistory', netBankingAuthHistorySchema);
