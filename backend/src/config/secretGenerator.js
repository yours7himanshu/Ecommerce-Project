// Used to generate a random key for the JWT tokens used in .env file
const crypto = require('crypto');
const access_token = crypto.randomBytes(32).toString('hex');
const refresh_token = crypto.randomBytes(32).toString('hex');
console.table({ access_token, refresh_token });