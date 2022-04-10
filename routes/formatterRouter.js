const express = require('express');
const router = express.Router();

const {context} = require('../controllers/formatterController');

router.post('/context',context);




module.exports = router;