const express = require('express')

const router = express.Router()

const userSignupController = require("../controller/userSingup")
const userSingInController = require('../controller/userSignin')

router.post("/singup",userSignupController)
router.post("/login",userSingInController)

module.exports = router;