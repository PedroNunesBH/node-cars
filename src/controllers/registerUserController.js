const mongoose = require("mongoose")
const UserModel = require("../models/userModel")
const bcrypt = require("bcryptjs")


exports.registerUserGet = (req, res) => {
    res.render("registerUser")
}

exports.registerUserPost = async (req, res) => {
    const {username, email, password, usertype} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = {
        username,
        email,
        password: hashedPassword,
        usertype
    }

    const userMongo = await UserModel.create(user)
    console.log(userMongo)
    res.redirect("allUsers")
}