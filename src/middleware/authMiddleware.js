function confirmAuthentication (req, res, next) {
    if (req.session && req.session.user) {
        return next()
    } else {
        res.redirect("/")
    }
}

module.exports = confirmAuthentication