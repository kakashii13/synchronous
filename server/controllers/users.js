const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.get("/", async (req, res) => {
  const user = await User.find({}).populate("contacts", {
    username: 1,
  });
  res.send(user);
});

userRouter.post("/addContact", async (req, res) => {
  const { userId, userIdContact } = req.body;

  // return main user for add contact
  const user = await User.findById(userId);
  const userContact = await User.findById(userIdContact);
  console.log(userContact);
  user.contacts.push(userContact);
  await user.save();
  res.status(200);
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  // search user with id
  const user = await User.findById(id).populate("contacts", {
    username: 1,
  });

  // write handleError

  res.status(200).send(user);
});

module.exports = userRouter;
