const { Schema, model } = require('mongoose');
const handleMongooseErr = require('../helpers/handleMongooseErr');
const Joi = require('joi');
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const shopSchema = Schema({
  id: String,
  name: String,
  products: [
    {
      id: String,
      name: String,
      imageUrl: String,
      description: String,
      price: Number,
    },
  ],
});

const Shop = model('Shop', shopSchema);

const orderSchema = Schema({
  id: String,
  name: {
    type: String,
    minlength: 1,
    required: false,
  },
  email: {
    type: String,
    match: emailRegex,
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    minlength: 6,
    maxlength: 20,
  },
  address: { type: String, required: [true, 'Address is required'] },
  items: [
    {
      shop: String,
      id: String,
      name: String,
      imageUrl: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const Order = model('Order', orderSchema);

module.exports = {
  Shop,
  Order,
};
