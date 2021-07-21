const db = require('../db-config');

const find = () => {
    return db.promise().query('SELECT * from  project');
};

const findOne = async id => {
    return db.promise().query('SELECT * FROM project WHERE id = ?', [id]);
};

const create = async ({
    title,
    language,
    description,
    site_url,
    gitHub_url,
}) => {
    return db
        .promise()
        .query(
            'INSERT INTO project (title,language, description, site_url, gitHub_url) VALUES (?, ?, ?, ?, ?)',
            [title, language, description, site_url, gitHub_url],
        );
};

const update = async (id, newAttributes) => {
    return db
        .promise()
        .query('UPDATE project SET ? WHERE id = ?', [newAttributes, id]);
};

const delete_ = async id => {
    return db.promise().query('DELETE FROM project WHERE id = ?', [id]);
};

module.exports = { find, create, findOne, update, delete_ };
