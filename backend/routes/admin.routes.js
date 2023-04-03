const { Router } = require("express");
const router = Router();
const multer = require("multer");

const {
  addClass,
  getEnrollments,
  uploadFile,
  getDropRequests,
} = require("../controllers/admin.controllers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // where to store the file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // how to name the file
  },
});

const upload = multer({ storage: storage });

router.post("/addClass", addClass);
router.get("/getEnrollments", getEnrollments);
router.post("/uploadFile", upload.single("file"), uploadFile);
router.get("/getDropRequests", getDropRequests);

module.exports = router;
