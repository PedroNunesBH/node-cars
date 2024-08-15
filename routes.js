const express = require("express")
const route = express.Router()
const homeController = require("./src/controllers/homeController")
const registerCarController = require("./src/controllers/registerCarController")

route.get("/", homeController.home)

route.get("/registercar", registerCarController.registerCar)
route.post("/registercar", registerCarController.registerCarPost)

module.exports = route