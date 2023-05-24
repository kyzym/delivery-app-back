const express = require('express');
const { ctrlWrapper } = require('../middlewares');
const getAll = require('../controllers/getAll');
const router = express.Router();

router.get('/', ctrlWrapper(getAll));

module.exports = router;
