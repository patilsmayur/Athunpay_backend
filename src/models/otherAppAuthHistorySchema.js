const mongoose = require('mongoose');

const otherAppAuthHistorySchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true
 },
  appName: {
    type: String,
    required: true
  },
  authID: {
    type: String,
    required: true
  },
  loginDate: {
    type: Date,
    required: true
  },
  loginTime: {
    type: String,
    required: true
  },
  loginCity: {
    type: String,
    required: true
  },
  loginLatitude: {
    type: Number,
    required: true
  },
  loginLongitude: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  loginDevice: {
    type: String,
    required: true
  },
  loginIP: {
    type: String,
    required: true
  },
  logoutDate: {
    type: Date,
    required: true
  },
  logoutTime: {
    type: String,
    required: true
  },
  logoutCity: {
    type: String,
    required: true
  },
  logoutLongitude: {
    type: Number,
    required: true
  },
  logoutLatitude: {
    type: Number,
    required: true
  },
  loginDeviceDistance: {
    type: Number,
    required: true
  },
  loginDeviceID: {
    type: String,
    required: true
  },
  logoutType: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('OtherAppAuthHistory', otherAppAuthHistorySchema);
