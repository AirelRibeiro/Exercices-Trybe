function authorizationMiddle(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization || authorization.length !== 16) {
      const error = {
        status: 401,
        message: 'Token inválido!'
      }
      return next(error);
    }
    next();
}

module.exports = authorizationMiddle;
