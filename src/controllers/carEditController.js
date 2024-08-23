const mongoose = require("mongoose")
const CarModel = require("../models/carModel")

exports.editCar = async (req, res) => {
    const licensePlate = req.params.licensePlate

    console.log(licensePlate)

    const car = await CarModel.find({ licensePlate: licensePlate})
    const carObject = car.map(car => car.toObject())

    console.log(carObject)}