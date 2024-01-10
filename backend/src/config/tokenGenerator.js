const JWT = require('jsonwebtoken');
const createError = require('http-errors');
const invalidatedRefreshTokens = new Set();

module.exports = {
  // This function will generate a new access token and return it
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: '10s',
        issuer: 'localhost',
        audience: userId
      }
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          reject(createError.InternalServerError());
        }
        resolve(token);
      })
    })
  },
  // This function will generate a new refresh token and return it
  signRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.REFRESH_TOKEN_SECRET;
      const options = {
        expiresIn: '10d',
        issuer: 'localhost',
        audience: userId
      }
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          reject(createError.InternalServerError());
        }
        resolve(token);
      })
    })
  },
  // This function will verify the access token and return the payload if it is valid
  verifyAccessToken: (req, res, next) => {
    // If the token is retrieved from the authorization header, then use this code ------>
    // if (!req.headers['authorization']) return next(createError.Unauthorized());
    // const authHeader = req.headers['authorization'];
    // const bearerToken = authHeader.split(' ');
    // const token = bearerToken[1];
    // ---------------------->
    // If the token is retrieved from the cookie, then use this code ------>
    if (!req.cookies.access_token) return next(createError.Unauthorized());
    const token = req.cookies.access_token;
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
        return next(createError.Unauthorized(message));
      }
      req.payload = payload;
      next();
    })
  },
  // This function will verify the refresh token and return the payload if it is valid
  verifyRefreshToken: (refreshToken) => {
    return new Promise((resolve, reject) => {
      // Check if the token is invalidated
      if (invalidatedRefreshTokens.has(refreshToken)) {
        return reject(createError.Unauthorized('Refresh token has been invalidated'));
      }
      JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
        if (err) return reject(createError.Unauthorized());
        const userId = payload.aud;
        resolve(userId);
      });
    });
  },
  // This function will invalidate a refresh token
  invalidateRefreshToken: (refreshToken) => {
    invalidatedRefreshTokens.add(refreshToken);
  }
}