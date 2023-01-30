const messageRouter = require("express").Router();
const Chat = require("../models/chat");
const User = require("../models/user");

messageRouter.post("/", async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const chat = await Chat.findById(chatId);
  const sender = await User.findById(senderId);

  if (!chat || !sender) {
    throw new Error("Chat or sender not found");
  }

  chat.messages.push({
    text,
    sender: sender._id,
    createdAt: new Date(),
  });

  const newMessage = await chat.save();
  res.status(200).send(newMessage);
});

module.exports = messageRouter;
