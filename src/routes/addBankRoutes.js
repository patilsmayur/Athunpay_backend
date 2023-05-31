const express = require('express');
const { addBank, allBank, getallBank } = require('../controller/addBankController');
const router = express.Router();

router.post('/addBank',addBank);
router.get('/allBanks/:id',allBank);



module.exports = router;