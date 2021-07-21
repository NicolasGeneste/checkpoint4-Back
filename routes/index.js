//agrégateur

const projectsRouter = require('./project');

module.exports = app => {
    app.use('/project', projectsRouter);
};
