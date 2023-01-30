const loginRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const checkPassword = await bcrypt.compare(password, user.hashPassword);

  if (!checkPassword || !user) {
    res.status(401).send({
      error: "unauthorized",
    });
  }

  res.status(200).send({
    user: user.username,
    email,
    id: user.id,
  });
});

module.exports = loginRouter;
