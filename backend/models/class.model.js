const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  code: { type: "String", required: true },
  instructor: { type: "string", required: true },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
