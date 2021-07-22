//agrégateur

const projectsRouter = require('./project');
const messagesRouter = require('./message');

module.exports = app => {
    app.use('/project', projectsRouter);
    app.use('/message', messagesRouter);
};
