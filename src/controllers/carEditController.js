const mongoose = require("mongoose")
const CarModel = require("../models/carModel")

exports.editCar = async (req, res) => {
    const licensePlate = req.params.licensePlate

    const carMongo = await CarModel.findOne({ licensePlate: licensePlate})
    const car = carMongo.toObject()

    res.render("carEdit", { car })
}