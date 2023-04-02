const mongoose = require("mongoose");

const userClassSchema = new mongoose.Schema({
  userId: { type: mongoose.ObjectId, ref: "User" },
  classId: { type: mongoose.ObjectId, ref: "Class" },
});

const UserClass = mongoose.model("UserClass", userClassSchema);

module.exports = UserClass;
