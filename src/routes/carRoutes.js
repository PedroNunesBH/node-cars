const express = require("express")
const route = express.Router()
const carEditController = require("../controllers/carEditController")

route.get("/car/:licensePlate", carEditController.editCar)
route.post("/car/:licensePlate", carEditController.editCarPost)

module.exports = route