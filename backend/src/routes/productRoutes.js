// Dependencies
const express = require('express');

// Controller
const productController = require("../controllers/productController");

// Module scaffolding
const productRouter = express.Router();

// Create a new product
productRouter.post("/product", productController.createProduct);
// Get a list of all products
productRouter.get("/products", productController.getAllProducts);
// Get detailed information about a specific product
productRouter.get("/products/:productId", productController.getSingleProduct);
// Update a product
productRouter.patch("/products/:productId", productController.updateSingleProduct);
// Delete a product
productRouter.delete("/products/:productId", productController.deleteSingleProduct);

// Export module
module.exports = productRouter;
