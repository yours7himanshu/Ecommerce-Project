// Dependencies
const createError = require('http-errors');

// Module scaffolding
const notFoundMiddleware = (req, res, next) => {
  next(createError.NotFound("Requested route not found"));
};
const defaultErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    },

  });
};

// Export module
module.exports = { notFoundMiddleware, defaultErrorHandler };
