const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

MessageSchema.set("toJSON", {
  transform: (doc, rt) => {
    rt.id = rt._id;
    delete rt._id;
  },
});

const ChatSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  messages: [MessageSchema],
});

ChatSchema.set("toJSON", {
  transform: (doc, rt) => {
    rt.id = rt._id;
    delete rt._id;
    delete rt.__v;
  },
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
