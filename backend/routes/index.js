const express = require('express')

const router = express.Router()

const userSignupController = require("../controller/userSingup")
const userSingInController = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')

router.post("/singup",userSignupController)
router.post("/login",userSingInController)
router.get("/user-details",authToken, userDetailsController)

module.exports = router;