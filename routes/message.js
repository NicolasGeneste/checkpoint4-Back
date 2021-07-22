const messagesRouter = require('express').Router();
const { createMessage } = require('../controlers/message');

messagesRouter.post('/', createMessage);

module.exports = messagesRouter;
