const express = require('express');
const { addBank, allBank } = require('../controller/addBankController');
const router = express.Router();

router.post('/addBank',addBank);
router.get('/allBanks',allBank);


module.exports = router;