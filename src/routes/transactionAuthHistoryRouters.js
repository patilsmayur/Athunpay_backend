const express = require('express');
const { findtransactionAuthHistory, settransactionAuthHistoryasync } = require('../controller/transactionAuthHistoryController');
const router = express.Router();


router.get('/transactionauthlist',findtransactionAuthHistory);
router.post('/settransactionauthlist',settransactionAuthHistoryasync);


module.exports = router;