const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { Shop } = require('./models/models');

const app = express();

app.use((_, res) => {
  res.status(404).json({ status: 'error', message: 'Invalid URL' });
});

app.use((err, _, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});



module.exports = app;
