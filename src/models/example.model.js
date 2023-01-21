const db = require('../config/database');
var md5 = require('md5');
const moment = require('moment');
let datetime = moment().format('yyyy-MM-DD H:m:s');

const getAll = () => {
    const SQLQuery = "SELECT * FROM users";
    return db.execute(SQLQuery);
}

const insertData = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, password, created_at, updated_at) VALUES('${body.name}', '${body.email}', '${md5(body.password)}', '${datetime}', '${datetime}')`;
    console.log(SQLQuery);
    return db.execute(SQLQuery);
}

module.exports = {
    getAll, insertData
}