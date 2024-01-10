// Dependencies
const express = require('express');

// Controller
const userController = require("../controllers/userController");

// Module scaffolding
const userRouter = express.Router();

// register user
userRouter.post("/register", userController.register);
// login user
userRouter.post("/login", userController.login);
// refresh token
userRouter.post("/refresh-token", userController.refreshToken);
// Logout user
userRouter.delete("/logout", userController.logout);

// Export module
module.exports = userRouter;
