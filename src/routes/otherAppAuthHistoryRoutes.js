const express = require('express');
const { findOtherAppAuthHistory, setOtherAppAuthHistory } = require('../controller/otherAppAuthHistoryController');
const router = express.Router();

router.get('/appAutheHist',findOtherAppAuthHistory);
router.post('/setAppAuthHist',setOtherAppAuthHistory);

module.exports = router;