const mongoose = require("mongoose")
const CarModel = require("../models/carModel")

exports.editCar = async (req, res) => {
    const licensePlate = req.params.licensePlate

    const carMongo = await CarModel.findOne({ licensePlate: licensePlate})
    if (carMongo != null) {
        const car = carMongo.toObject()
        res.render("carEdit", { car })
    } else {
        res.render("carEdit")
    }
}

exports.editCarPost = async (req, res) => {
    const btn = req.body.btn
    const carLicensePlate = req.params.licensePlate

    if (btn === "update") {

        const {model, brand, licensePlate, carYear, entryDate, serviceStatus, problemDescription,repairsCarriedOut,
            ownersName, ownersEmail, ownersPhoneOne, ownersPhoneTwo, ownersCpf, deliveryDate,
            repairPrice, paymentMethod} = req.body;

        const carToEdit = {
            model,
            brand,
            licensePlate,
            carYear,
            entryDate,
            serviceStatus,
            problemDescription,
            repairsCarriedOut,
            ownersName,
            ownersEmail,
            ownersPhoneOne,
            ownersPhoneTwo,
            ownersCpf,
            deliveryDate,
            repairPrice,
            paymentMethod
        }

        await CarModel.findOneAndUpdate({ licensePlate: carLicensePlate }, carToEdit, { new: true }).then().
        catch(err => console.error(err))

        res.redirect("/allcars")
    } else {
        await CarModel.deleteOne({ licensePlate: carLicensePlate})
        res.redirect("/allCars")
    }}