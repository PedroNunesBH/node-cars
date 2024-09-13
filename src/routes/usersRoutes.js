const express = require("express")
const route = express.Router()
const usersController = require("../controllers/usersControllers")
const authMiddleware = require("../middlewares/authMiddleware")
const isAdminMiddleware = require("../middlewares/isAdminMiddleware")

route.get("/allusers", authMiddleware, isAdminMiddleware, usersController.allUsersGet)


module.exports = route