const signRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

signRouter.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    hashPassword,
  });

  const saved = await newUser.save();
  res.status(200).send(saved);
});

module.exports = signRouter;
