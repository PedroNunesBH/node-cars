const mongoose = require("mongoose")
const CarSchema = require("../schemas/carSchema")

const CarModel = new mongoose.model("Cars", CarSchema)

module.exports = CarModel