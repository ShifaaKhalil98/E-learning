const Class = require("../models/class.model");
const Enrollment = require("../models/enrollment.model");
const File = require("../models/file.model");

exports.addClass = async (req, res) => {
  const { name, code, instructor } = req.body;

  const _class = await Class.create({ name, code, instructor });
  console.log(_class);

  res.json(_class);
};

exports.getEnrollments = async (req, res) => {
  //   const enrollments = await Enrollment.find();
  const users = await Enrollment.find().populate("userId");
  const classes = await Enrollment.find().populate("classId");

  res.json({ users, classes });
};

exports.uploadFile = async (req, res) => {
  const { originalname, path } = req.file;
  console.log(req.file);

  const newFile = new File({
    name: originalname,
    path,
    classId: req.body.classId,
  });
  try {
    await newFile.save();
    res.json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
