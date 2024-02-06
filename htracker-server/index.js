#!/usr/bin/env node

const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { log } = require("mercedlogger");
const UserRouter = require("./controllers/User");
const ProfileRouter = require("./controllers/Profile");

dotenv.config();
const { PORT = 4000 } = process.env;

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the test route to make sure server is working");
});

// auth routes
app.use("/auth", UserRouter);

// other routes
app.use("/profile", ProfileRouter);

app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`));
