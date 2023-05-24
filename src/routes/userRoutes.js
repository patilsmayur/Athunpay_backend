const express = require('express');
const { setPIN, verify } = require('../controller/userController');
const router = express.Router();


router.post('/setPIN',setPIN);
router.get('/verify',verify);

module.exports = router;
