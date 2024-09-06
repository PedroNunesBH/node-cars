const express = require("express")
const route = express.Router()
const allCarsController = require("../controllers/allCarsController")
const authMiddleware = require("../middleware/authMiddleware")

route.get("/allcars", authMiddleware, allCarsController.listAllCars)


module.exports = route