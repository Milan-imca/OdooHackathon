const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register new user
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  try {
    let user = new User({ username, password, role });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Error registering user");
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    res.status(200).json({ username: user.username, role: user.role });
  } catch (err) {
    res.status(500).send("Error logging in user");
  }
});

module.exports = router;
