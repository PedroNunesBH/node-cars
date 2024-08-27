const mongoose = require("mongoose")
const UserSchema = require("../schemasuserSchema/")

const UserModel = new mongoose.model("Users", UserSchema)

module.exports = UserModel