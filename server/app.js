const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./utils/config");
const cors = require("cors");

const userRouter = require("./controllers/users");
const signRouter = require("./controllers/signup");
const chatRouter = require("./controllers/chats");
const messageRouter = require("./controllers/messages");

// connect to mongodb

mongoose.set("strictQuery", false);
const connectMongoDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI, () => {
      console.log("connected to mongodb");
    });
  } catch (error) {
    console.log({ error: error });
  }
};

connectMongoDb();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/signup", signRouter);
app.use("/api/chats", chatRouter);
app.use("/api/chat/message", messageRouter);

module.exports = {
  app,
};
