require("dotenv").config();

const PORT = process.env.PORT;

let MONGODB_URI = "";

if (process.env.NODE_ENV === "development") {
  MONGODB_URI = process.env.MONGODB_URI_TEST;
}

module.exports = {
  PORT,
  MONGODB_URI,
};
