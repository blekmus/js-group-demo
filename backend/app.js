const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = [];

io.on("connection", (socket) => {
  // send messages to all users except the sender
  socket.on("general", ({ username, message }) => {
    users.push({ id: socket.id, username });
    socket.broadcast.emit("general", `${username}: ${message}`);
  });

  socket.on("lesson", ({ username, message }) => {
    users.push({ id: socket.id, username });
    socket.broadcast.emit("lessonusers", username);
    socket.broadcast.emit("lesson", `${username}: ${message}`);
  });
});

app.get("/", (req, res) => {
  res.send("Socket.IO server is running");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
