// Dependencies
const mongoose = require("mongoose");

// Module scaffolding
const db = {};

// Establish connection
db.connect = (uri) => {
  return mongoose.connect(uri);
};

// Export module
module.exports = db;
