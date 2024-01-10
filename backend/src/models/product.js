// Dependencies
const mongoose = require('mongoose');

// Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [5, "Discription is too short."],
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
});

// create model
const Product = mongoose.model('Product', productSchema);

// export model
module.exports = Product;
