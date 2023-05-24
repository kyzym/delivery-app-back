const { Shop } = require('../models/models');

const getAll = async (req, res) => {
  const result = await Shop.find();

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
