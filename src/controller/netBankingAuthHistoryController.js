const NetBankingAuthHistory = require('../models/netBankingAuthHistorySchema');


exports.findNetBankingAuthHistory =async (req, res) => {
  const user = req.params.user;
  try {
    const history = await NetBankingAuthHistory.find({user:user});
    res.json({history});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.setNetBankingAuthHistoryasync = async(req, res) => {
  const history = new NetBankingAuthHistory({
    user: req.body.user,
    bankName: req.body.bankName,
    authID: req.body.authID,
    loginDate: req.body.loginDate,
    loginTime: req.body.loginTime,
    loginCity: req.body.loginCity,
    loginLatitude: req.body.loginLatitude,
    loginLongitude: req.body.loginLongitude,
    status: req.body.status,
    loginDevice: req.body.loginDevice,
    loginIP: req.body.loginIP,
    logoutDate: req.body.logoutDate,
    logoutTime: req.body.logoutTime,
    logoutCity: req.body.logoutCity,
    logoutLongitude: req.body.logoutLongitude,
    logoutLatitude: req.body.logoutLatitude,
    loginDeviceDistance: req.body.loginDeviceDistance,
    loginDeviceID: req.body.loginDeviceID,
    logoutType: req.body.logoutType
  });

  try {
    const newHistory = await history.save();
    res.status(201).json({newHistory});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


