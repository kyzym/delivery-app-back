const { Shop } = require('../models/models');

const getAll = async (req, res) => {
  const data = await Shop.find();

  res.json({
    status: 'success',
    code: 200,
    data,
  });
};

module.exports = getAll;
