const argon2 = require("argon2");
const { USERMODEL } = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

let key = process.env.SECRET_KEY;

const createUser = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let hash = await argon2.hash(password);
    let user = new USERMODEL({ name, email, password: hash });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await USERMODEL.findOne({ email: email });
    if (!user || !(await argon2.verify(user.password, password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ email: email, name: user.name }, key);
    return res
      .status(200)
      .json({ message: "Login successful", token: token, name: user.name });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUser, loginUser };
