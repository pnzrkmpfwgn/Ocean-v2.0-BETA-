const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  //Get to token from the header
  const token = req.header('x-auth-token');

  //Check if no token
  if (!token) {
    return !res.status(401).json({
      msg: 'No Token, authorization denied',
    });
  }
  //Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({msg: 'Token is not valid.'});
  }
};
