const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.put("/:userId/listofhabits", async (req, res) => {
  console.log(req.params);

  try {
    const userId = req.params.userId;
    const { listOfHabits } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { listOfHabits },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to update listOfHabits" });
  }
});

router.put("/:userId/history", async (req, res) => {
  console.log(req.params);
  try {
    const userId = req.params.userId;
    const { activityHistory } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { activityHistory },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to update listOfHabits" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    console.log(req.params);
    const userId = req.params.userId;
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to update listOfHabits" });
  }
});

module.exports = router;
