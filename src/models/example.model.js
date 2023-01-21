const db = require('../config/database')

const getAll = () => {
    const SQLQuery = "SELECT * FROM users";
    return db.execute(SQLQuery);
};

module.exports = {
    getAll,
}