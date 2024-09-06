const express = require("express")
const route = express.Router()
const homeController = require("../controllers/homeController")

route.get("/", homeController.home)
route.post("/", homeController.homePost)


module.exports = route