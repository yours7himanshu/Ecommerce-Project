// Dependencies
const Cart = require('../models/cart');
const { cartSchema } = require('../utils/validation_schema');
const createError = require('http-errors');

// Module scaffolding
const cartController = {};

// Get user's cart
cartController.getCartItems = async (req, res, next) => {
  try {
    // Lookup cart for the user from the database and populate it with product details
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    if (!cart) {
      throw createError.NotFound('Cart not found');
    }
    res.json(cart);
  } catch (error) {
    next(error);
  }
};
// Add item to cart
cartController.addCartItems = async (req, res, next) => {
  try {
    // Get productId and quantity from request body
    const { productId, quantity } = req.body;


    // Validate input using cartSchema
    const { error } = cartSchema.validate({ userId: req.params.userId, items: [{ productId, quantity }] });
    if (error) {
      throw createError.BadRequest(error.details[0].message);
    }

    // Lookup cart for the user from the database
    let  cart = await Cart.findOne({ userId: req.params.userId });
    // let cart = await findCartByUserId(req.params.userId);

    if (!cart) {
      cart = new Cart({
        userId: req.params.userId,
        items: [{ productId, quantity }]
      });
    } else {
      const existingItem = cart.items.find(item => item.productId.equals(productId));

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};
// Update item quantity in cart
cartController.updateCartItem = async (req, res, next) => {
  try {
    // Get quantity from request body
    const { quantity } = req.body;
    // Get userId and productId from request params
    const { userId, productId } = req.params;

    // Validate input using cartSchema
    const { error } = cartSchema.validate({ userId, items: [{ productId, quantity }] });
    if (error) {
      throw createError.BadRequest(error.details[0].message);
    }
    // const cart = await Cart.findOne({ userId: req.params.userId });
    const cart = await findCartByUserId(req.params.userId);

    if (!cart) {
      throw createError.NotFound('Cart not found');
    }
    // Find the item in the cart
    const item = cart.items.find(item => item.productId.equals(req.params.productId));

    if (!item) {
      throw createError.NotFound('Item not found in the cart');
    }

    item.quantity += quantity;
    await cart.save();

    res.json(cart);
  } catch (error) {
    next(error);
  }
};
// Remove item from cart
cartController.removeCartItem = async (req, res, next) => {
  try {
    // Get userId from request params
    // const cart = await Cart.findOne({ userId: req.params.userId });
    const cart = await findCartByUserId(req.params.userId);

    if (!cart) {
      throw createError.NotFound('Cart not found');
    }
    // Filter out the item from the cart
    cart.items = cart.items.filter(item => !item.productId.equals(req.params.productId));
    await cart.save();

    res.json(cart);
  } catch (error) {
    next(error);
  }
};
// helper function to find cart by userId
async function findCartByUserId(userId) {
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    throw createError.NotFound('Cart not found');
  }
  return cart;
}
// Export module
module.exports = cartController;

