express = require("express")

app = express()


app.listen(3000, () => {
    console.log("Aplicação rodando em localhost:3000")
})

app.get("/", (req, res) => {
    res.send("OK")
})