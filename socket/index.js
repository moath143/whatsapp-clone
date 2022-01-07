import { Server } from "socket.io";

const PORT = 9090;

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

io.on("connection", (socket) => {
  console.log("User Connected");
  socket.on("addUserSocket", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
    console.log(users);
  });

  socket.on("sendMessage", ({ senderId, reciverId, text }) => {
    const user = getUser(reciverId);
    console.log(text);
    io.to(user.socketId).emit("sendMessage", { senderId, text });
  });
    
    socket.on('disconnect', () => {
        console.log('User Diconnected');
        removeUser(socket.id);
        io.emit('getUsers', users)
    })
});
