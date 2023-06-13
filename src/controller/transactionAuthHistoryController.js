const transactionAuthHistory = require('../models/transactionauthHistorySchema');


exports.findtransactionAuthHistory = async (req, res) => {
  const user = req.params.user;
  try {
    const history = await transactionAuthHistory.find({user:user});
    res.json({history});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};


exports.settransactionAuthHistory = async (req, res) => {
  const history = new transactionAuthHistory({

  user: req.body.user,
  appName: req.body.appName,
  appAuthID: req.body.appAuthID,
  authTime: req.body.authTime,
  authDate: req.body.authDate,
  authCity: req.body.authCity,
  authLongitude: req.body.authLongitude,
  authLatitude: req.body.authLatitude,
  status: req.body.status,
  authIPAddress: req.body.authIPAddress,
  authdevice: req.body.authdevice,
  authdeviceUniqueID: req.body.authdeviceUniqueID,
  authdeviceDistance: req.body.authdeviceDistance,
  transactionAmount: req.body.transactionAmount
    
  });

  try {
    const newHistory = await history.save();
    res.status(201).json({newHistory});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

