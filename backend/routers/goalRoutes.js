const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalControllers");
const { protect } = require("../middlewares/authMiddleware");
const routers = express.Router();

routers.route("/").get(protect, getGoals).post(protect, setGoals);
routers.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = routers;
