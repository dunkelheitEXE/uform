const model = require("../models/UserModel");
const bcrypt = require("bcrypt");
const session = require("express-session");

const create = (req, res) => {
    res.render("login");
};

const store = (req, res) => {
    const {email, password} = req.body;
    const request = model.findByEmail(email);
    res.redirect("/");
};

module.exports = {
    create,
    store
};