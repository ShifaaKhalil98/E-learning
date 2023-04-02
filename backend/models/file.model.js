const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  url: { type: "String", required: true },
  classId: { type: mongoose.ObjectId, ref: "Class" },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
