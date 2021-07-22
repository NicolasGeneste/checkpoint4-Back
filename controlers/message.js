const { create } = require('../models/message');

const createMessage = async (req, res) => {
    try {
        await create(req.body);
        res.status(201).json('succes');
    } catch (err) {
        res.status(500).send('Error creating a message');
        console.log(err);
    }
};

module.exports = {
    createMessage,
};
