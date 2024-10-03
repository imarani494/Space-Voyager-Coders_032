const { createUser, loginUser } = require("../controllers/user.controller");

const userRoute = require("express").Router();

userRoute.post("/register", createUser);

userRoute.post("/login", loginUser);

module.exports = { userRoute };
