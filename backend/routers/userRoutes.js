const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const routers = express.Router();

routers.route("/").post(registerUser);

routers.post("/login", loginUser);
routers.get("/me", protect, getMe);

module.exports = routers;
