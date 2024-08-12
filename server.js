const express = require("express")
const routes = require("./routes")
const path = require("path")

app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "src", "views"))

app.use(routes)

app.listen(3000, () => {
    console.log("Aplicação rodando em localhost:3000")
})
