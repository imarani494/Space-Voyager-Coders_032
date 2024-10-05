const express = require("express");
const http = require("http");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.route");
const cors = require("cors");
const { Server } = require("socket.io");
const path = require("path");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", userRoute);

app.use("/api/ludogame", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connection;
  console.log("Connected to the database");
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("appchat", (msg) => {
    io.emit("appchat", msg);
  });
  socket.on("isrolling", (msg) => {
    io.emit("isrolling", msg);
  });
  socket.on("newvalue", (msg) => {
    io.emit("newvalue", msg);
  });
  socket.on("ludospin", (msg) => {
    io.emit("ludospin", msg);
  });
  socket.on("rolledValue", (msg) => {
    io.emit("rolledValue", msg);
  });
  socket.on("rolldiced", (msg) => {
    io.emit("rolldiced", msg);
  });
});
