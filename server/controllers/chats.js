const chatRouter = require("express").Router();
const Chat = require("../models/chat");
const User = require("../models/user");

chatRouter.get("/", async (req, res) => {
  const chats = await Chat.find({});
  res.status(200).send(chats);
});

chatRouter.post("/", async (req, res) => {
  const { userIds } = req.body;
  const participants = await User.find({
    _id: { $in: userIds },
  });

  const chat = new Chat({
    participants: participants.map((p) => p._id),
    messages: [],
  });

  const newChat = await chat.save();
  res.status(200).send(newChat);
});

module.exports = chatRouter;
