const express = require("express")
const route = express.Router()
const allCarsController = require("../controllers/allCarsController")
const authMiddleware = require("../middlewares/authMiddleware")

route.get("/allcars", authMiddleware, allCarsController.listAllCars)


module.exports = route