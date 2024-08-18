require("dotenv").config()

const express = require("express")
const routes = require("./routes")
const path = require("path")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("Conexão com o BD ok.")
        app.emit("dbReady")
    })
    .catch((err) => {
        console.error("Ocorreu um erro ao tentar a conexão", err)
    })

app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, "public")))

app.set("views", path.resolve(__dirname, "src", "views"))
app.engine('hbs', exphbs.engine({extname: "hbs"}))
app.set("view engine", "hbs")

app.use(routes)

app.on("dbReady", () => {
    app.listen(3000, () => {
        console.log("Aplicação rodando em localhost:3000")
    })
})
