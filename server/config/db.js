const mongoose = require("mongoose");
require("dotenv").config();

let URI = process.env.MONGO_URI;

const connection = mongoose.connect(URI);

module.exports = { connection };
