const express = require("express")
const route = express.Router()
const registerCarController = require("../controllers/registerCarController")
const authMiddleware = require("../middleware/authMiddleware")

route.get("/registercar", authMiddleware, registerCarController.registerCar)
route.post("/registercar", authMiddleware, registerCarController.registerCarPost)

module.exports = route