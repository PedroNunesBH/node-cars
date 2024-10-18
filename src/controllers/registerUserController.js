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

    try {
        await UserModel.create(user)
        res.redirect("allUsers")
    } catch (error) {
        console.log(error)
        if(error.code == 11000) {
            errorMessage = "Já existe um usuário cadastrado com esse email ou username."
        } else {
            errorMessage = "Ocorreu um erro. Tente novamente mais tarde."
        }
        res.render("registerUser.hbs", {errorMessage})
    }
}