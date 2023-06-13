const express = require('express');
const { setPIN, verify, getUser, login, changePIN } = require('../controller/userController');
const router = express.Router();


router.post('/setPIN',setPIN);
router.get('/verify',verify);
router.get('/user/:id',getUser);
router.post('/login',login);
router.put('/changePin/:id',changePIN);

module.exports = router;
