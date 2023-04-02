const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;

  console.log(email);

  const existingUser = await User.findOne({ email });

  if (existingUser)
    return res.status(409).json({ message: "Email already exists" });

  const user = new User();
  // console.log(user);

  user.name = name;
  user.email = email;
  // user.password = password;

  const saltRounds = 10; // Number of salt rounds to use
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  user.password = hashedPassword;

  if (role) user.role = role;
  // console.log(user);

  await user.save();
  // console.log(user);

  const { password: newUserPassword, ...newUser } = user.toJSON();
  res.status(201).json(newUser);
  // console.log(newUser);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "Invalid Credentials" });

  console.log(password);
  console.log(user.password);
  const isMatched = await user.matchPassword(password);
  console.log(isMatched);
  if (!isMatched)
    return res.status(404).json({ message: "Invalid Credentials" });

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.SECRET_KEY
  );

  res.json({ token });
};
