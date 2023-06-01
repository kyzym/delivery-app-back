const express = require('express');
const add = require('../controllers/orders/add');
const { ctrlWrapper } = require('../middlewares');
const getOrders = require('../controllers/orders/getOrders');
const validation = require('../middlewares/validation');
const { joiOrder } = require('../models/models');
const router = express.Router();

router.post('/', validation(joiOrder), ctrlWrapper(add));
router.post('/history', ctrlWrapper(getOrders));

module.exports = router;
