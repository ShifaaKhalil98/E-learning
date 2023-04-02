const { Router } = require("express");
const router = Router();

const {
  enroll,
  getFiles,
  downloadFile,
} = require("../controllers/student.controllers");

router.post("/enroll", enroll);
router.get("/class/:classId/getFiles", getFiles);
router.get("/class/:classId/files/:fileId/download", downloadFile);

module.exports = router;
