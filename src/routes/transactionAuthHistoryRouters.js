const express = require('express');
const { findtransactionAuthHistory, settransactionAuthHistory} = require('../controller/transactionAuthHistoryController');
const router = express.Router();


router.get('/transactionauthlist/:user',findtransactionAuthHistory);
router.post('/settransactionauthlist',settransactionAuthHistory);


module.exports = router;