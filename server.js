require("dotenv").config()

const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const homeRoutes = require("./src/routes/homeRoutes.js")
const registerCarRoutes = require("./src/routes/registerCarRoutes.js")
const allCarRoutes = require("./src/routes/allCarRoutes.js")
const carRoutes = require("./src/routes/carRoutes.js")
const registerUserRoutes = require("./src/routes/registerUserRoutes.js")
const usersRoutes = require("./src/routes/usersRoutes.js")
const logoutRoutes = require("./src/routes/logoutRoutes.js")

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

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.CONNECTION_STRING
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 dia
  }));

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
