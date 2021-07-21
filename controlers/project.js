const { find, create, findOne, update, delete_ } = require('../models/project');

const getProjects = async (req, res) => {
    const [projects] = await find();
    res.status(200).json(projects);
};

const getOneProject = async (req, res) => {
    const [data] = await findOne(req.params.id);
    res.json(data);
};
const createProject = async (req, res) => {
    try {
        await create(req.body);
        res.status(201).json('succes');
    } catch (err) {
        res.status(500).send('Error creating a project');
        console.log(err);
    }
};

const updateProject = async (req, res) => {
    try {
        await update(req.params.id, req.body);
        res.status(200).send('Project updated');
    } catch (err) {
        res.status(500).send('Error updating a project');
    }
};

const deleteProject = async (req, res) => {
    try {
        await delete_(req.params.id);
        res.status(200).send('Project deleted');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleted a project');
    }
};

module.exports = {
    getProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
};
