const express = require('express');
const { findpaymentHistory, setpaymentHistory } = require('../controller/paymentHistoryController');
const router = express.Router();


router.get('/paymenthistorylist',findpaymentHistory);
router.post('/setpaymenthistorylist',setpaymentHistory );


module.exports = router;