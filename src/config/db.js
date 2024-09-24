require("dotenv").config()
const mongoose = require("mongoose")

module.exports = (app) => {mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("Conexão com o BD ok.")
        app.emit("dbReady")
    })
    .catch((err) => {
        console.error("Ocorreu um erro ao tentar a conexão", err)
    })
}
