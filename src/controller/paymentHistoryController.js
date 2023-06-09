const paymentHistory= require('../models/paymentHistorySchema');


exports.findpaymentHistory = async (req, res) => {
    const user = req.body.user;
  try {
    const history = await paymentHistory.find({user});
    res.json({history});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};


exports.setpaymentHistory = async (request, res) => {
  const history = new paymentHistory({

    user: request.body.user,
    bankName: request.body.bankName,
    paymentTime: request.body.paymentAmount,
    paymentDate: request.body.paymentDate,
    deviceCity: request.body.deviceCity,
    deviceIPAddress: request.body.deviceIPAddress
   

  });

  try {
    const newHistory = await history.save();
    res.status(201).json({newHistory});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};