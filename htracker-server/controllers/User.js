require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const User = require("../models/User");
const { getInitialValuesForUser } = require("../helpers/User");

const router = Router();

const { SECRET = "secret" } = process.env;

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(getInitialValuesForUser(req.body));
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = await jwt.sign(
          { username: user.username, _id: user._id },
          SECRET
        );
        const { password, ...userWithoutPassword } = user.toObject();
        res.json({ user: userWithoutPassword, token });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
