const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const jsonWebToken = require("jsonwebtoken");
const bCryptJS = require("bcryptjs");

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bCryptJS.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, email, name } = await User.findById(req.user.id);
  res.status(200).json({ _id: _id, email: email, name: name });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Field is missing");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("mail already found");
  }

  const salt = await bCryptJS.genSalt(10);
  const hashPwd = await bCryptJS.hash(password, salt);

  const regUser = await User.create({
    name,
    email,
    password: hashPwd,
  });

  if (regUser) {
    res.status(201).json({
      _id: regUser.id,
      name: regUser.name,
      email: regUser.email,
      token: generateToken(regUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("Could not find id");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("Could not find id");
  }

  const deleteUser = await User.findByIdAndDelete(req.params.id);

  res.status(200).json(deleteUser);
});

const generateToken = (id) => {
  return jsonWebToken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { loginUser, registerUser, updateUser, deleteUser, getMe };
