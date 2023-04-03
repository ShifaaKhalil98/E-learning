const Class = require("../models/class.model");
const Enrollment = require("../models/enrollment.model");
const File = require("../models/file.model");
const DropRequest = require("../models/droprequest.model");

exports.addClass = async (req, res) => {
  const { name, code, instructor } = req.body;

  const _class = await Class.create({ name, code, instructor });

  res.json(_class);
};

exports.getEnrollments = async (req, res) => {
  const users = await Enrollment.find().populate("userId");
  const classes = await Enrollment.find().populate("classId");

  res.json({ users, classes });
};

exports.uploadFile = async (req, res) => {
  const { originalname, path } = req.file;

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

exports.getDropRequests = async (req, res) => {
  const dropRequests = await DropRequest.find();

  res.json(dropRequests);
};

// exports.approveDropRequest = async (req, res) => {
//   const dropRequestId = req.params.dropRequestId;

//   var myquery = { approved: false };
//   var newvalues = { $set: { approved: true } };

//   res.json(dropRequest);
// };