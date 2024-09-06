const express = require("express")
const route = express.Router()
const logouController = require("../controllers/logoutControlller")

route.get("/logout", logouController.logout)


module.exports = route