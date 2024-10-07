const exphbs = require("express-handlebars")
const path = require("path")

module.exports = (app) => {app.set("views", path.resolve(__dirname, "..", "views"))
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
app.set("view engine", "hbs")}