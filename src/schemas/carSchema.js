const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        required: True
    },
    brand: {
        type: String,
        required: True
    },
    licensePlate: {
        type: String,
        required: True
    },
    carYear: Number,
    entryDate: {
        type: Date,
        default: Date.now
    },
    serviceStatus: {
        type: String,
        default: "Em Orçamento"
    },
    problemDescription: {
        type: Text,
        required: True
    },
    repairsCarriedOut: {
        type: Text,
        default: "Em Ánalise"
    },
    ownersName: {
        type: String,
        required: True
    },
    ownesEmail: String,
    ownersPhoneOne: {
        type: String,
        required: True
    },
    ownersPhoneTwo: String,
    ownersCpf: {
        type: String,
        required: True
    },
    deliveryDate: {
        type: Date,
        default: "Em Orçamento"
    },
    repairPrice: {
        type: Number,
        default: 0.00
    },
    paymentMethod: {
        type: String,
        default: "Não Informado"
    }
})

module.exports = CarSchema