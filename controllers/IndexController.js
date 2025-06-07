const showIndex = (req, res) => {
    data = {
        "message": "Welcome"
    }

    res.render("index", data);
};

const showSignup = (req, res) => {
    res.render("signup");
}


module.exports = {
    showIndex,
    showSignup
}