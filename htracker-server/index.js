#!/usr/bin/env node

const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { log } = require("mercedlogger");
const UserRouter = require("./controllers/User");

dotenv.config();
const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the test route to make sure server is working");
});
app.use("/auth", UserRouter);

app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`));
