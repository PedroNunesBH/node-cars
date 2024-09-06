const express = require("express")
const route = express.Router()
const logouController = require("../controllers/logoutControlller")
const authMiddleware = require("../middleware/authMiddleware")

route.get("/logout", authMiddleware, logouController.logout)


module.exports = route