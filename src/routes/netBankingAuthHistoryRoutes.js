const express = require('express');
const { findNetBankingAuthHistory, setNetBankingAuthHistoryasync } = require('../controller/netBankingAuthHistoryController');
const router = express.Router();


router.get('/netbankauthHist',findNetBankingAuthHistory);
rouute.post('/setnetbankauthHist',setNetBankingAuthHistoryasync);


module.exports = router;