const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  classId: { type: mongoose.Types.ObjectId, ref: "Class" },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;
