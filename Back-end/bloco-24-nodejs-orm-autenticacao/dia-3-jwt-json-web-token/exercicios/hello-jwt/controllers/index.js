const loginControllers = require('./login');
const ping = require('./ping');
const userMe = require('./userMe');
const topSecret = require('./topSecret');

module.exports = {
  ping,
  loginControllers,
  userMe,
  topSecret,
};
