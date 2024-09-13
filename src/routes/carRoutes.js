const express = require("express")
const route = express.Router()
const carEditController = require("../controllers/carEditController")
const authMiddleware = require("../middlewares/authMiddleware")

route.get("/car/:licensePlate", authMiddleware, carEditController.editCar)
route.post("/car/:licensePlate", authMiddleware, carEditController.editCarPost)

module.exports = route