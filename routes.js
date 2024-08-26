const express = require("express")
const route = express.Router()
const homeController = require("./src/controllers/homeController")
const registerCarController = require("./src/controllers/registerCarController")
const allCarsController = require("./src/controllers/allCarsController")
const carEditController = require("./src/controllers/carEditController")

route.get("/", homeController.home)

route.get("/registercar", registerCarController.registerCar)
route.post("/registercar", registerCarController.registerCarPost)

route.get("/allcars", allCarsController.listAllCars)

route.get("/car/:licensePlate", carEditController.editCar)
route.post("/car/:licensePlate", carEditController.editCarPost)

module.exports = route