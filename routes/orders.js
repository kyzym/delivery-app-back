const express = require('express');
const add = require('../controllers/orders/add');
const { ctrlWrapper } = require('../middlewares');
const getOrders = require('../controllers/orders/getOrders');
const router = express.Router();

router.post('/', ctrlWrapper(add));
router.post('/history', ctrlWrapper(getOrders));

module.exports = router;
