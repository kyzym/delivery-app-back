const express = require('express');
const add = require('../controllers/orders/add');
const { ctrlWrapper } = require('../middlewares');
const router = express.Router();

router.post('/', ctrlWrapper(add));

module.exports = router;
