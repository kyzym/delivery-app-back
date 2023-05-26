const { Order } = require('../../models/models');

const getOrders = async (req, res) => {
  const { email, phone } = req.body;
  const orders = await Order.find({ email, phone }).sort({ date: -1 });

  if (orders.length === 0) {
    res
      .status(404)
      .json({ message: 'No orders found for provided email and phone.' });
  } else {
    res.status(200).json(orders);
  }
};

module.exports = getOrders;
