const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true,
        enum: ["adm", "gerente", "funcionário"]
    }
})

UserSchema.index({ username: 1}, { unique: true})
UserSchema.index({ email: 1}, { unique: true})

module.exports = UserSchema