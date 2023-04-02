const mongoose = require("mongoose");

const droprequestSchema = new mongoose.Schema({
  userId: { type: mongoose.ObjectId, ref: "User" },
  classId: { type: mongoose.ObjectId, ref: "Class" },
  approved: { type: Boolean, default: false },
});

const DropRequest = mongoose.model("DropRequest", droprequestSchema);

module.exports = DropRequest;
