const db = require('../db-config');

const create = async ({
    firstname,
    lastname,
    email,
    phone,
    object,
    message,
}) => {
    return db
        .promise()
        .query(
            'INSERT INTO message (firstname,lastname, email, phone, object, message) VALUES (?, ?, ?, ?, ?, ?)',
            [firstname, lastname, email, phone, object, message],
        );
};

module.exports = { create };
