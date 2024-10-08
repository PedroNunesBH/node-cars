const express = require("express")
const app = express()

require("./src/config/db.js")(app)
require("./src/config/session.js")(app)
require("./src/config/hbs_engine.js")(app)
require("./src/middlewares/sessionMiddleware.js")(app)
require("./src/config/routesConfig.js")(app)

app.on("dbReady", () => {
    app.listen(3000, () => {
        console.log("Aplicação rodando em localhost:3000")
    })
})
