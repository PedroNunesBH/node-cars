const mongoose = require("mongoose")
const CarModel = require("../models/carModel")

exports.listAllCars = async (req, res) => {
    const cars = await CarModel.find()
    const newCars = cars.map(car => car.toObject())
    console.log(cars)
    res.render("allCars.hbs", { newCars })
}