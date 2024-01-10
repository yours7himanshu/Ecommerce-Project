// Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

// user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    minLength: [3, "Name is too short."],
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
});

// hash password before saving to database
userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw error
  }
}

// create model
const User = mongoose.model('User', userSchema);

// export model
module.exports = User;
