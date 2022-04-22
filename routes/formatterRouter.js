const express = require('express');
const router = express.Router();

const {context} = require('../controllers/formatterController');
const { Validate } = require('../middleware/validation');

router.post('/context',Validate(),context);




module.exports = router;