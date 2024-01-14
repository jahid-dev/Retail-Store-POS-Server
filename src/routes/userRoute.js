const express = require("express");
const { login, register } = require("../controllers/userController");
const router = express.Router();

router.post('/users/login',login)
router.post('/users/register',register)

module.exports = router;