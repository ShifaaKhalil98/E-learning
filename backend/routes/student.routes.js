const { Router } = require("express");
const router = Router();

const { enroll } = require("../controllers/student.controllers");

router.post("/enroll", enroll);

module.exports = router;
