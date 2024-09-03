const express = require("express")
const route = express.Router()
const usersController = require("../controllers/usersControllers")

route.get("/allusers", usersController.allUsersGet)


module.exports = route