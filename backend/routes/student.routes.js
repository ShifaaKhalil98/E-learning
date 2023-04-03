const { Router } = require("express");
const router = Router();

const {
  enroll,
  getFiles,
  downloadFile,
  drop,
} = require("../controllers/student.controllers");

router.post("/enroll", enroll);
router.get("/class/:classId/getFiles", getFiles);
router.get("/class/:classId/files/:fileId/download", downloadFile);
router.get("/class/:classId/user/:userId/drop", drop);

module.exports = router;
