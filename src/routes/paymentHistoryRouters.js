const express = require('express');
const { findpaymentHistory, setpaymentHistoryasync } = require('../controller/paymentHistoryController');
const router = express.Router();


router.get('/paymenthistorylist',findpaymentHistory);
router.post('/setpaymenthistorylist',setpaymentHistoryasync);


module.exports = router;