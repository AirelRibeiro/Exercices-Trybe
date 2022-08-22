const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const authentication = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.payload = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};

module.exports = authentication;
