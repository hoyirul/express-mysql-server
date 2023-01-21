const mysql = require('mysql2');

// create the connection to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_express_sql'
});

module.exports = db.promise();