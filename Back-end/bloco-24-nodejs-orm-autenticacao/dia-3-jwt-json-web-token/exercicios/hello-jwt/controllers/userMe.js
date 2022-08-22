const userMe = (req, res) => {
  res.status(200).json(req.payload);
};

module.exports = userMe;
