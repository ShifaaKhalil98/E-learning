const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  name: { type: String, required: true },
  //   classId: [
  //     { type: mongoose.ObjectId, ref: "Class", required: true, default: [] },
  //   ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
