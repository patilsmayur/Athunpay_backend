const TransactionauthHistory = require('../models/transactionauthHistorySchema');


exports.findTransactionAuthHistory = async (req, res) => {
    const user = req.body.user;
  try {
    const history = await TransactionAuthHistory.find({user});
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};