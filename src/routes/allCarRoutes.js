const express = require("express")
const route = express.Router()
const allCarsController = require("../controllers/allCarsController")

route.get("/allcars", allCarsController.listAllCars)


module.exports = route