const { app } = require("./app");
const http = require("http");
const { PORT } = require("./utils/config");

// creating server
const server = http.createServer(app);

server.listen(PORT || 3000, () => {
  console.log(`Running on port ${PORT}`);
});
