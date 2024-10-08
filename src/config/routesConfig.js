const express = require("express")
const path = require("path")
const homeRoutes = require("../routes/homeRoutes.js")
const registerCarRoutes = require("../routes/registerCarRoutes.js")
const allCarRoutes = require("../routes/allCarRoutes.js")
const carRoutes = require("../routes/carRoutes.js")
const registerUserRoutes = require("../routes/registerUserRoutes.js")
const usersRoutes = require("../routes/usersRoutes.js")
const logoutRoutes = require("../routes/logoutRoutes.js")


module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static(path.resolve(__dirname, "..", "..", "public")))
    app.use(homeRoutes)
    app.use(registerCarRoutes)
    app.use(allCarRoutes)
    app.use(carRoutes)
    app.use(registerUserRoutes)
    app.use(usersRoutes)
    app.use(logoutRoutes)
}