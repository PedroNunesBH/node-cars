const express = require("express")
const routes = require("./routes")

app = express()

app.use(routes)

app.listen(3000, () => {
    console.log("Aplicação rodando em localhost:3000")
})
