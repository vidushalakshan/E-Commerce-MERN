const express = require('express')

const router = express.Router()

const userSignupController = require("../controller/userSingup")

router.post("/singup",userSignupController)

module.exports = router;