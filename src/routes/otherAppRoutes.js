const express = require('express');
const { allapp, addapp } = require('../controller/otherAppController');
const router = express.Router();

router.get('/allApps/:id',allapp);
router.post('/addApps',addapp);

module.exports = router;