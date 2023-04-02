const { Router } = require("express");
const router = Router();

const { login, register } = require("../controllers/auth.controllers");

router.get("/login", login);
router.post("/register", register);

module.exports = router;
