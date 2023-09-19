const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      let decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.id).select("-password");

      next();
    } catch (error) {}
  } else {
    res.status(401);
    throw new Error("Not Authorized, token is missing");
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, token is missing");
  }
});

module.exports = { protect };
