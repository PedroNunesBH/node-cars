const mongoose = require("mongoose")
const UserModel = require("../models/userModel.js")

exports.allUsersGet = (async (req, res) => {
    const allUsers = await UserModel.find()
    const allUsersObjects = allUsers.map(user => user.toObject())
    res.render("allUsers", { allUsersObjects })
})

exports.userDetail = async (req, res) => {
    const username = req.params.username;
    const userMongo = await UserModel.findOne({username: username});
    
    if (userMongo != null) {
        const user = userMongo.toObject(); 
        res.render("userEdit", { user });
    } else {
        res.render("userEdit");
    }
};

exports.userEdit = async (req, res) => {
    const userUsername = req.params.username
    console.log(req.params.username)
    const btn = req.body.btn

    if(btn === "update") {
        const {username, email, senha, usertype} = req.body

        const userToEdit = {
            username, 
            email, 
            senha,
            usertype
        }

        await UserModel.findOneAndUpdate({ username: userUsername }, userToEdit, { new: true })

        res.redirect("/allusers")
    } else {
        await UserModel.deleteOne({username: userUsername})
        res.redirect("/allusers")
    }
}