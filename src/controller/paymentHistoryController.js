const PaymentHistory = require('../models/paymenthistorySchema');


exports.findOtherAppAuthHistory = async (req, res) => {
    const user = req.body.user;
  try {
    const history = await OtherAppAuthHistory.find({user});
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};