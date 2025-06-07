const db = require("../config/db");

const index = (req, res) => {};

const create = (req, res) => {
    res.render("signup");
};

const store = (req, res) => {
    db.query("")
}

module.exports = {
    index,
    create
}