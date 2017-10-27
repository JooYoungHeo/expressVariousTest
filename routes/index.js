const express = require('express');
let callData = require('./callData');

const router = express.Router();
router.use('/data', callData);

module.exports = router;
