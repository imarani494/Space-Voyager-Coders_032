const express = require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.route");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connection;
  console.log("Connected to the database");
});
