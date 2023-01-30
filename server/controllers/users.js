const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.get("/", async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

module.exports = userRouter;
