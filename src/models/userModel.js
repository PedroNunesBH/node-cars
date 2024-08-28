const mongoose = require("mongoose")
const UserSchema = require("../schemas/userSchema")

const UserModel = new mongoose.model("Users", UserSchema)

module.exports = UserModel