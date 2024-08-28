const express = require("express")
const route = express.Router()
const registerUserControllers = require("../controllers/registerUserController")

route.get("/registeruser", registerUserControllers.registerUserGet)

module.exports = route