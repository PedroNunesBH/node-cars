const session = require("express-session")
const MongoStore = require("connect-mongo")

module.exports = (app) => {
    app.use(session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
          mongoUrl: process.env.CONNECTION_STRING
        }),
        cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 dia
      }))
}