const projectsRouter = require('express').Router();
const {
    getProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
} = require('../controlers/project');

projectsRouter.get('/', getProjects);

projectsRouter.get('/:id', getOneProject);

projectsRouter.post('/', createProject);

projectsRouter.patch('/:id', updateProject);

projectsRouter.delete('/:id', deleteProject);

module.exports = projectsRouter;
