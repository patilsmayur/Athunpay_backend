const OtherAppAuthHistory = require('../models/otherAppAuthHistorySchema');


exports.findOtherAppAuthHistory = async (req, res) => {
    const user = req.body.user;
  try {
    const history = await OtherAppAuthHistory.find({user});
    res.json({history});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};


exports.setOtherAppAuthHistory = async (req, res) => {
  const history = new OtherAppAuthHistory({
    user: req.body.user,
    appName: req.body.appName,
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

