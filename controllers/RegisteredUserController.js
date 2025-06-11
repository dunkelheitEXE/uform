const model = require("../models/UserModel");
const bcrypt = require("bcrypt")

const index = (req, res) => {};

const create = (req, res) => {
    res.render("signup");
};

const store = (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).send("Campos obligatorios");
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if(err) {
            console.error("Error al hashear: ", err);
            return res.status(500).send("Error interno del servidor");
        }

        model.create(name, email, hashedPassword, (err, result) => {
            if(err) {
                if(err.code === 'ER_DUP_ENTRY'){
                    return result.status(409).send("El correo ya esta en uso")
                }

                console.error("Error en la base de datos: ", err);
                return result.status(500).send("Error al registrar usuario");
            }

            res.redirect("/");
        });
    });
}

module.exports = {
    index,
    create,
    store
}