const bcrypt = require("bcryptjs/dist/bcrypt")
const UserModel = require("../models/userModel")

exports.home = (req, res) => {
    res.render("index.hbs", {
        session: req.session
    })
}

exports.homePost = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await UserModel.findOne({username: username})
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user
            res.redirect("/allcars")
    } else { 
        req.session.incorrectAuthMsg = "O username e/ou senha inseridos estão incorretos.Tente novamente"
        res.redirect("/")
        req.session.incorrectAuthMsg = null
    }
    } catch (error) {
        res.redirect("/")
    }
}