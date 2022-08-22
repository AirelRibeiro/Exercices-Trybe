const adminUser = (req, res, next) => {
  const { payload } = req;
    if (!payload) {
      const err = new Error('This endpoint requires authentication');
      err.statusCode = 401;
      return next(err);
    }

    if (!payload.admin) {
      const err = new Error('Restricted access');
      err.statusCode = 403;
      return next(err);
    }
    return next();
};

module.exports = adminUser;
