const express = require('express');
const router = express.Router();

const {context} = require('./formatterController');

router.post('/',context);




module.exports = router;