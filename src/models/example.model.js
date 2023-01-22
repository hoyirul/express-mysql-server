const db = require('../config/database');
var md5 = require('md5');
const moment = require('moment');
let datetime = moment().format('yyyy-MM-DD H:m:s');

const all = () => {
    const SQLQuery = `SELECT * FROM users`;
    return db.execute(SQLQuery);
}

const find = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE id=${id}`;
    return db.execute(SQLQuery);
}

const create = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, password, created_at, updated_at) VALUES('${body.name}', '${body.email}', '${md5(body.password)}', '${datetime}', '${datetime}')`;
    console.log(SQLQuery);
    return db.execute(SQLQuery);
}

const update = (body, id) => {
    const SQLQuery = `UPDATE users SET name='${body.name}', email='${body.email}', password='${md5(body.password)}', created_at='${datetime}' WHERE id=${id}`;
    console.log(SQLQuery);
    return db.execute(SQLQuery);
}

const destroy = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id=${id}`;
    console.log(SQLQuery);
    return db.execute(SQLQuery);
}

module.exports = {
    all, find, create, update, destroy
}