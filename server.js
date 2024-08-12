require("dotenv").config()

const express = require("express")
const routes = require("./routes")
const path = require("path")
const mongoose = require("mongoose")

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("Conexão com o BD ok.")
    })
    .catch((err) => {
        console.error("Ocorreu um erro ao tentar a conexão", err)
    })

app = express()

app.use(express.static(path.resolve(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "src", "views"))

app.use(routes)

app.listen(3000, () => {
    console.log("Aplicação rodando em localhost:3000")
})
