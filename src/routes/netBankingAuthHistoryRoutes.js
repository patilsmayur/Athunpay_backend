const express = require('express');
const { findNetBankingAuthHistory, setNetBankingAuthHistoryasync } = require('../controller/netBankingAuthHistoryController');
const router = express.Router();


router.get('/netbankauthHist/:user',findNetBankingAuthHistory);
router.post('/setnetbankauthHist',setNetBankingAuthHistoryasync);


module.exports = router;