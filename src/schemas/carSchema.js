const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    licensePlate: {
        type: String,
        required: true
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
        type: String,
        required: true
    },
    repairsCarriedOut: {
        type: String,
        default: "Em Ánalise"
    },
    ownersName: {
        type: String,
        required: true
    },
    ownersEmail: String,
    ownersPhoneOne: {
        type: String,
        required: true
    },
    ownersPhoneTwo: String,
    ownersCpf: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: Date,
        default: null
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