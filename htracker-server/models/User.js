const { Schema, model } = require("../db/connection");

const MOOD_VALUES = [
  "happy",
  "sad",
  "excited",
  "calm",
  "anxious",
  "stressed",
  "motivated",
  "tired",
  "energized",
];

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String },
  password: { type: String, required: true },
  listOfHabits: [{ type: String }],
  activityHistory: [
    {
      habitName: { type: String },
      mood: { type: String, enum: MOOD_VALUES },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const User = model("User", UserSchema);

module.exports = User;
