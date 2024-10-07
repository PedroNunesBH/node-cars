module.exports = (app) => {
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
}