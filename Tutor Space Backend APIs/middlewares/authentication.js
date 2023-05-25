const jwt = require('jsonwebtoken');
const Const = require('../constants/const');

// Middleware function to authenticate JWT token of Tutor
function authenticateTokenT(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'JWT token is required' });

  jwt.verify(token, Const.tutor, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid JWT token' });
    req.user = user;
    next();
  });
}

// Middleware function to authenticate JWT token of Admin
function authenticateTokenA(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'JWT token is required' });

  jwt.verify(token, Const.admin, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid JWT token' });
    req.user = user;
    next();
  });
}

// Middleware function to authenticate JWT token of Student
function authenticateTokenS(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'JWT token is required' });

  jwt.verify(token, Const.student, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid JWT token' });
    req.user = user;
    console.log(user);
    console.log(req.user);
    next();
  });
}

module.exports = { authenticateTokenT, authenticateTokenA, authenticateTokenS };
