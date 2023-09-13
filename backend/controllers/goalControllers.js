const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get goals" });
});

const setGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "set goals" });
});

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "update goals" });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "delete goals" });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
