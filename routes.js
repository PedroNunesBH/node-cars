const express = require("express")
const route = express.Router()
const homeController = require("./src/controllers/homeController")
const registerCarController = require("./src/controllers/registerCarController")
const allCarsController = require("./src/controllers/allCarsController")

route.get("/", homeController.home)

route.get("/registercar", registerCarController.registerCar)
route.post("/registercar", registerCarController.registerCarPost)

route.get("/allcars", allCarsController.listAllCars)

module.exports = route