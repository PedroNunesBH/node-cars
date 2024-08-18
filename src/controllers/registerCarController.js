const mongoose = require("mongoose")
const CarModel = require("../models/carModel")

exports.registerCar = (req, res) => {
    res.render("registerCar.hbs")
}

exports.registerCarPost = (req, res) => {
    console.log(req.body)
    const { model, brand, licensePlate, carYear, problemDescription, ownersName, ownersEmail,
            ownersPhoneOne, ownersCpf} = req.body
    
    const car = {
        model,
        brand,
        licensePlate,
        carYear,
        problemDescription,
        ownersName,
        ownersEmail,
        ownersPhoneOne,
        ownersCpf
    }

    CarModel.create(car).
    then(() => {
        console.log("Objeto Criado com Sucesso No BD")
    }).
    catch((err) => {
        console.log(err)
    })
    
    res.render("registerCar.hbs")
}