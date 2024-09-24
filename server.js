require("dotenv").config()

const express = require("express")
const app = express()
const path = require("path")
const exphbs = require("express-handlebars")
const homeRoutes = require("./src/routes/homeRoutes.js")
const registerCarRoutes = require("./src/routes/registerCarRoutes.js")
const allCarRoutes = require("./src/routes/allCarRoutes.js")
const carRoutes = require("./src/routes/carRoutes.js")
const registerUserRoutes = require("./src/routes/registerUserRoutes.js")
const usersRoutes = require("./src/routes/usersRoutes.js")
const logoutRoutes = require("./src/routes/logoutRoutes.js")

require("./src/config/db.js")(app)
require("./src/config/session.js")(app)


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, "public")))

app.set("views", path.resolve(__dirname, "src", "views"))
app.engine('hbs', exphbs.engine(
    {extname: "hbs",
    helpers: {
        formatDate: function (datetime) {
            const date = new Date(datetime)

            const datePart = date.toLocaleDateString("pt-br")

            const timePart = date.toLocaleTimeString("pt-br")

            return `${datePart} ${timePart}`
        }
    }}))
app.set("view engine", "hbs")

app.use((req, res, next) => {
res.locals.session = req.session;
if (req.session.user) {
    const userType = req.session.user.usertype
    if (userType == "adm") {
        res.locals.userAdmin = true
    } else {
        res.locals.userAdmin = false
    }
}
next();
});

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
