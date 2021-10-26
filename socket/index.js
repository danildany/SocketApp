import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});
let onlineUsers = [];
const addNewUsers = (username, socketid) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketid });
};
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};

io.on("connection", (socket) => {
  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
  });
  socket.on("sendNotification", ({ senderName, receiverName, type }) => {
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });
  // [
  //   {
  //     username: "jhon",
  //     socketid: "dfgdsfgsfdg",
  //   },
  //   {
  //     username: "monika",
  //     socketid: "fgwer32fdg",
  //   },
  // ];
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(5000);