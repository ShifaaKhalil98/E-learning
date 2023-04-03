const File = require("../models/file.model");
const Enrollment = require("../models/enrollment.model");
const DropRequest = require("../models/droprequest.model");

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

exports.downloadFile = async (req, res) => {
  try {
    const { classId, fileId } = req.params;
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).send("File not found");
    }
    if (file.classId != classId) {
      return res.status(401).send("Unauthorized access");
    }
    const path = file.path;
    res.download(path);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.drop = async (req, res) => {
  const { userId, classId } = req.params;

  const dropRequest = await DropRequest.create({ userId, classId });
  console.log(dropRequest);

  res.json(dropRequest);
};
