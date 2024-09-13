const express = require("express")
const route = express.Router()
const usersController = require("../controllers/usersControllers")
const authMiddleware = require("../middlewares/authMiddleware")

route.get("/allusers", authMiddleware, usersController.allUsersGet)


module.exports = route