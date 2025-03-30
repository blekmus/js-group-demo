const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"],
  },
}); 

io.on("connection", (socket) => {
  socket.on("general", ({ username, message }) => {
    socket.broadcast.emit("general", {username, message});
  });

  socket.on("lesson", ({ username, message }) => {
    socket.broadcast.emit("lesson", {username, message});
  });
});

app.get("/", (req, res) => {
  res.send("Socket.IO server is running");
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
