const mongoose = require("mongoose")
const UserModel = require("../models/userModel")


exports.registerUserGet = (req, res) => {
    res.render("registerUser")
}

exports.registerUserPost = async (req, res) => {
    const {username, email, password, usertype} = req.body
    const user = {
        username,
        email,
        password,
        usertype
    }

    const userMongo = await UserModel.create(user)
    console.log(userMongo)
    res.redirect("allUsers")
}