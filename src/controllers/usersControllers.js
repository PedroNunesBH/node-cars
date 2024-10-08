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
        const user = userMongo.toObject();  // Corrigido: use userMongo.toObject()
        res.render("userEdit", { user });
    } else {
        res.render("userEdit");
    }
};