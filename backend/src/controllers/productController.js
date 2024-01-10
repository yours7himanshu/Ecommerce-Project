// Dependencies
const Product = require('../models/product');
const { productSchema } = require('../utils/validation_schema');
const createError = require('http-errors');

// Module scaffolding
const productController = {};

// Create a product
productController.createProduct = async (req, res, next) => {
  try {
    // Validate the request body
    const result = await productSchema.validateAsync(req.body);

    // Check if the product already exists
    const existingProduct = await Product.findOne({ name: result.name, price: result.price });

    if (existingProduct) {
      // If the product exists, increment its quantity
      existingProduct.quantity = (existingProduct.quantity || 0) + result.quantity;
      await existingProduct.save();
      return res.status(201).send(existingProduct);
    }

    // If the product does not exist, create a new one
    const newProduct = new Product(result);
    const savedProduct = await newProduct.save();

    // Send response
    const payload = {
      _id: savedProduct._id,
      name: savedProduct.name,
      description: savedProduct.description,
      quantity: savedProduct.quantity,
      price: savedProduct.price,
      category: savedProduct.category,
      image: savedProduct.image
    }
    res.send(payload)
  } catch (error) {
    // Unprocessable Entity, means the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
    if (error.isJoi === true) error.status = 422
    next(error);
  }
};
// Get a list of all products
productController.getAllProducts = async (req, res, next) => {
  try {
    // Find all products if exists
    const products = await Product.find();
    if (!products || products.length === 0) throw createError.NotFound("No products found")

    // Send response
    const payload = products.map(product => ({
      _id: product._id,
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      category: product.category,
      image: product.image
    }));

    res.status(200).send(payload)
  } catch (error) {
    if (error.isJoi === true) error.status = 500
    next(error);
  }
};
// Get detailed information about a specific product
productController.getSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    // Find the product by ID
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      throw createError.NotFound("Product not found");
    }

    // Send response
    const payload = {
      _id: product._id,
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      category: product.category,
      image: product.image
    };

    res.status(200).send(payload);
  } catch (error) {
    next(error);
  }
};
// Update a product
productController.updateSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;

    // Validate the request body
    const result = await productSchema.validateAsync(req.body);

    // Find the product by ID
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      throw createError.NotFound("Product not found");
    }
    // if the request body is the same as the existing product
    if (
      result.name === product.name ||
      result.description === product.description ||
      result.price === product.price
    ) {
      throw createError.Conflict("Product details are same as before");
    }

    // Update the product properties
    product.name = result.name || product.name;
    product.description = result.description || product.description;
    product.quantity = result.quantity || product.quantity;
    product.price = result.price || product.price;
    product.category = result.category || product.category;
    product.image = result.image || product.image;


    // Save the updated product
    const updatedProduct = await product.save();

    // Send response
    const payload = {
      _id: updatedProduct._id,
      name: updatedProduct.name,
      description: updatedProduct.description,
      quantity: updatedProduct.quantity,
      price: updatedProduct.price,
      category: updatedProduct.category,
      image: updatedProduct.image
    };

    res.status(200).send(payload);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
};
// Delete a product
productController.deleteSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(productId);

    // Check if the product exists
    if (!deletedProduct) {
      throw createError.NotFound("Product not found");
    }

    // Send response
    const payload = {
      _id: deletedProduct._id,
      name: deletedProduct.name,
      description: deletedProduct.description,
      quantity: deletedProduct.quantity,
      price: deletedProduct.price,
      category: deletedProduct.category,
      image: deletedProduct.image
    };

    res.status(200).send(payload);
  } catch (error) {
    next(error);
  }
};

// Export module
module.exports = productController;

