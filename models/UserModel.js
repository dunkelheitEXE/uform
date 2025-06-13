const db = require("../config/db");

const create = (name, email, password, callback) => {
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password],
        (err, result) => {
            if(err) {
                return callback(err);
            }
            callback(null, result);
        }
    );
}

const findByEmail = (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email],
        (err, res) => {
            if(err) {
                console.error(err)
                return null;
            }
            return res[0];
        }
    );
};

module.exports = {
    create,
    findByEmail
};