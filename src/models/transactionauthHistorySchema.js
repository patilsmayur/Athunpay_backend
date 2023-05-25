const mongoose = require('mongoose');

const transactionauthHistorySchema = new mongoose.Schema({
  appName: { type: String, required: true },
  appAuthID: { type: String, required: true },
  authTime: { type: Date, default: Date.now },
  authDate: { type: Date, required: true },
  authCity: { type: String, required: true },
  authLongitude: { type: Number, required: true },
  authLatitude: { type: Number, required: true },
  status: { type: String, required: true },
  authIPAddress: { type: String, required: true },
  authdevice: { type: String, required: true },
  authdeviceUniqueID: { type: String, required: true },
  authdeviceDistance: { type: Number },
  transactionAmount: { type: Number, required: true }
});

const transactionauthHistory = mongoose.model('transactionauthHistory', transactionauthHistorySchema);

module.exports = transactionauthHistory;
