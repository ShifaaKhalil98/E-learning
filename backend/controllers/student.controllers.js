// const Class = require("../models/user.model");
const Enrollment = require("../models/enrollment.model");

exports.enroll = async (req, res) => {
  const { userId, classId } = req.body;

  const enrollment = await Enrollment.create({ userId, classId });
  console.log(enrollment);

  res.json(enrollment);
};
