const express = require('express');
const add = require('../controllers/orders/add');
const { ctrlWrapper } = require('../middlewares');
const getOrdersByEmailAndPhone = require('../controllers/orders/getOrdersByEmailAndPhone');
const router = express.Router();

router.post('/', ctrlWrapper(add));
router.post('/history', ctrlWrapper(getOrdersByEmailAndPhone));

module.exports = router;
