const express = require('express');
const router = express.Router();

router.use('/formatter', require('./formatterRouter'));

module.exports = router;