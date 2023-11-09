require("dotenv").config();
const jwt = require("jsonwebtoken");

const varifyToken = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader && bearerHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ message: "taken not varified please check" });

  jwt.verify(token, process.env.PrivateKey, (err, result) => {
    if (err) return res.status(403).json({ message: "token failed to verify" });

    res.user = result;

    next();
  });
};

module.exports = { varifyToken };
