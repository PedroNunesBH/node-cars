function isAdmin (req, res, next) {
    const userType = req.session.user.usertype

    if(userType != "adm") {
        res.redirect("/")
    } else {
        return next()
    }
}


module.exports = isAdmin