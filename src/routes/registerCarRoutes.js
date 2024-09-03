const express = require("express")
const route = express.Router()
const registerCarController = require("../controllers/registerCarController")

route.get("/registercar", registerCarController.registerCar)
route.post("/registercar", registerCarController.registerCarPost)

module.exports = route