const File = require("../models/file.model");
const Enrollment = require("../models/enrollment.model");

exports.enroll = async (req, res) => {
  const { userId, classId } = req.body;

  const enrollment = await Enrollment.create({ userId, classId });
  console.log(enrollment);

  res.json(enrollment);
};

exports.getFiles = async (req, res) => {
  try {
    const classId = req.params.classId;

    const files = await File.find({ classId });

    res.json(files);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
