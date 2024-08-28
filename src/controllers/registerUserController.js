const mongoose = require("mongoose")
const UserModel = require("../models/userModel")


exports.registerUserGet = (req, res) => {
    res.render("registerUser")
}