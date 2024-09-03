const mongoose = require("mongoose")
const UserModel = require("../models/userModel.js")

exports.allUsersGet = (async (req, res) => {
    const allUsers = await UserModel.find()
    const allUsersObjects = allUsers.map(user => user.toObject())
    res.render("allUsers", { allUsersObjects })
})