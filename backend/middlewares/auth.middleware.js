const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blackListTokenModel = require("../models/blackListToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    console.log("1");
    return res.status(401).json({ error: "Unauthorized" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token: token });
  if (isBlackListed) {
    console.log("2");
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;

    return next();
  } catch (err) {
    console.log("3");
    return res.status(401).json({ error: "Unauthorized" });
  }
};
