require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./configs/db.config");
const User = require("./models/user.model");
const Class = require("./models/class.model");
const UserClass = require("./models/userclass.model");
const File = require("./models/file.model");
const DropRequest = require("./models/droprequest.model");

app.listen(3000, async () => {
  console.log("server listening on port 3000");
  await connectDB();
  console.log("connected");
  const user = new User({
    email: "shifaa@hotmail.com",
    password: "hello",
    name: "Shifaa",
    classId: [],
  });
  await user.save();
});
