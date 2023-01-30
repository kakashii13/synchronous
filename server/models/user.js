const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashPassword: String,
  isAdmin: Boolean,
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
  ],
});

UserSchema.set("toJSON", {
  transform: (doc, rt) => {
    (rt.id = rt._id), delete rt._id;
    delete rt.hashPassword;
    delete rt.__v;
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
