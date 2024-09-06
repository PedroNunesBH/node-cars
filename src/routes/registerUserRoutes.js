const express = require("express")
const route = express.Router()
const registerUserControllers = require("../controllers/registerUserController")
const authMiddleware = require("../middleware/authMiddleware")

route.get("/registeruser", authMiddleware, registerUserControllers.registerUserGet)

route.post("/registeruser", authMiddleware, registerUserControllers.registerUserPost)

module.exports = route