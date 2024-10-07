const express = require("express")
const app = express()
const path = require("path")
const homeRoutes = require("./src/routes/homeRoutes.js")
const registerCarRoutes = require("./src/routes/registerCarRoutes.js")
const allCarRoutes = require("./src/routes/allCarRoutes.js")
const carRoutes = require("./src/routes/carRoutes.js")
const registerUserRoutes = require("./src/routes/registerUserRoutes.js")
const usersRoutes = require("./src/routes/usersRoutes.js")
const logoutRoutes = require("./src/routes/logoutRoutes.js")

require("./src/config/db.js")(app)
require("./src/config/session.js")(app)
require("./src/config/hbs_engine.js")(app)
require("./src/middlewares/sessionMiddleware.js")(app)


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, "public")))

app.use(homeRoutes)
app.use(registerCarRoutes)
app.use(allCarRoutes)
app.use(carRoutes)
app.use(registerUserRoutes)
app.use(usersRoutes)
app.use(logoutRoutes)

app.on("dbReady", () => {
    app.listen(3000, () => {
        console.log("Aplicação rodando em localhost:3000")
    })
})
