const express = require('express');
const router = express.Router();
const formatter = require('../routes/formatterRouter')

router.use('/formatter', formatter);

module.exports = router;