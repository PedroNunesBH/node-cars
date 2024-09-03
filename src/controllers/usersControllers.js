const mongoose = require("mongoose")
const UserModel = require("../models/userModel.js")

exports.allUsersGet = (async (req, res) => {
    res.render("allUsers")
})