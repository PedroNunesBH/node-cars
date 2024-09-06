const bcrypt = require("bcryptjs/dist/bcrypt")
const UserModel = require("../models/userModel")

exports.home = (req, res) => {
    res.render("index.hbs")
}

exports.homePost = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await UserModel.findOne({username: username})
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user
            res.redirect("/allcars")
    } else { 
        res.redirect("/")
    }
    } catch (error) {
        res.redirect("/")
    }
}