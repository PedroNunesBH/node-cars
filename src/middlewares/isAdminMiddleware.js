function isAdmin (req, res, next) {
    const userType = req.session.user.usertype

    if(userType != "adm") {
        res.redirect("/")
    } else {
        res.locals.userIsAdmin = true
        return next()
    }
}


module.exports = isAdmin