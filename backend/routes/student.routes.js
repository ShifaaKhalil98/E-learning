const { Router } = require("express");
const router = Router();

const { enroll, getFiles } = require("../controllers/student.controllers");

router.post("/enroll", enroll);
router.get("/class/:classId/getFiles", getFiles);

module.exports = router;
