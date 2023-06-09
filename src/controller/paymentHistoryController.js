const paymentHistory= require('../models/paymentHistorySchema');


exports.findpaymentHistory = async (req, res) => {
    const user = req.params.user;
  try {
    const history = await paymentHistory.find({user:user});
    res.json({history});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};


exports.setpaymentHistory = async (request, res) => {
  const history = new paymentHistory({

    user: request.body.user,
    avid: request.body.avid,
    cardType: request.body.cardType,
    cardNumber: request.body.cardNumber,
    cardProvider: request.body.cardProvider,
    bankName: request.body.bankName,
    paymentTime: request.body.paymentAmount,
    paymentDate: request.body.paymentDate,
    deviceCity: request.body.deviceCity,
    deviceLongitude: request.body.deviceLongitude,
    deviceLatitude:request.body.deviceLatitude,
    status:request.body.status,
    deviceIPAddress: request.body.deviceIPAddress,
    device: request.body.device,
    deviceUniqueID: request.body.deviceUniqueID,
    deviceDistance: request.body.deviceDistance,
    paymentAmount:request.body.paymentAmount
   

  });

  try {
    const newHistory = await history.save();
    res.status(201).json({newHistory});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};