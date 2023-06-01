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
  date: {
    type: Date,
    default: Date.now,
  },
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
  totalCost: { type: Number, required: true },
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

const joiOrder = Joi.object({
  date: Joi.date(),
  name: Joi.string().min(1),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).max(20).required(),
  address: Joi.string().required(),
  totalCost: Joi.number().required(),
  items: Joi.array()
    .items(
      Joi.object({
        shop: Joi.string().required(),
        id: Joi.string().required(),
        name: Joi.string().required(),
        imageUrl: Joi.string().uri().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        description: Joi.string(),
        _id: Joi.string(),
      })
    )
    .required(),
});

orderSchema.post('save', handleMongooseErr);

module.exports = {
  Shop,
  Order,
  joiOrder,
};
