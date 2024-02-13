const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: ["*"]
});

io.on('connection', (socket) => {
  socket.on('send message', (msg) => {
    console.log(msg);
    io.emit('get message', msg);
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});