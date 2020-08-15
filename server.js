const express = require("express");
const server = express();
const dotenv = require("dotenv");
const projectsRouter = require("./project/projectRouter");
const actionRouter = require("./action/actionRouter");

server.use(express.json());
server.use(projectsRouter);
server.use(actionRouter);

// Load env vars
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 4000;

server.get("/", (req, res) => {
  res.json({
    message: "Welcome to our API",
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;
