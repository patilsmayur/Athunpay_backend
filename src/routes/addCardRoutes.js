const express = require('express');
const { addCard, allCard } = require('../controller/addCardController');
const router = express.Router();

router.post('/addCard',addCard);
router.get('/allCard',allCard);


module.exports = router;