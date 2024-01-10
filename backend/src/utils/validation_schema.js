const Joi = require('joi');

// Register validation schema
const authSchemaRegister = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required()
})

// Login validation schema
const authSchemaLogin = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required()
})

// Product validation schema
const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().min(5).required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  image: Joi.string().required()
})

// Cart validation schema
const cartSchema = Joi.object({
  userId: Joi.string().required(),
  items: Joi.array().items({
    productId: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required()
  })
});

module.exports = { authSchemaRegister, authSchemaLogin, productSchema, cartSchema }