function confirmAuthentication (req, res, next) {
    if (req.session && req.session.user) {
        res.locals.user = req.session.user
        return next()
    } else {
        res.locals.user = null
        res.redirect("/")
    }
}

module.exports = confirmAuthentication