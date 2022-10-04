const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    // const token = req.header("auth-token");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM5NzQ2MTg4ZTAxMmRlYWFkZmU1NjkiLCJpYXQiOjE2NjQ3MTQ2NjR9.yqj8S-ehM4NBACOmiX59qFUzzt2xzHl6JexyA3QSro8"
    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, "0369");
        req.user = verified;
        next();

    } catch (error) {
        res.status(400).send("Invalid token")
    }
}   