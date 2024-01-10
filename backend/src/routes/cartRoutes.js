// Dependencies
const express = require('express');

// Controller
const cartController = require("../controllers/cartController");

// Module scaffolding
const cartRouter = express.Router();

// Get user's cart
cartRouter.get("/:userId", cartController.getCartItems);
// Add item to cart
cartRouter.post("/:userId/add", cartController.addCartItems);
// Update item quantity in cart
cartRouter.patch("/:userId/update/:productId", cartController.updateCartItem);
// Remove item from cart
cartRouter.delete("/:userId/remove/:productId", cartController.removeCartItem);

// Export module
module.exports = cartRouter;
