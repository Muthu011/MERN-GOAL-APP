const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalControllers");
const routers = express.Router();

routers.route("/").get(getGoals).post(setGoals);
routers.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = routers;
