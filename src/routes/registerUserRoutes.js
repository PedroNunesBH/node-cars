const express = require("express")
const route = express.Router()
const registerUserControllers = require("../controllers/registerUserController")
const authMiddleware = require("../middlewares/authMiddleware")
const isAdminMiddleware = require("../middlewares/isAdminMiddleware")

route.get("/registeruser", authMiddleware, isAdminMiddleware, registerUserControllers.registerUserGet)

route.post("/registeruser", authMiddleware, registerUserControllers.registerUserPost)

module.exports = route