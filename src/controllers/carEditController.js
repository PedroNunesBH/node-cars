const mongoose = require("mongoose")
const CarModel = require("../models/carModel")

exports.editCar = async (req, res) => {
    const licensePlate = req.params.licensePlate

    const carMongo = await CarModel.findOne({ licensePlate: licensePlate})
    const car = carMongo.toObject()

    res.render("carEdit", { car })
}

exports.editCarPost = async (req, res) => {
    const carLicensePlate = req.params.licensePlate

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

    const carUpdated = await CarModel.findOneAndUpdate({ licensePlate: licensePlate }, carToEdit, { new: true }).then().
    catch(err => console.error(err))

    const car = carUpdated.toObject()
    res.render("carEdit", { car })
}