const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Parashu",
    host: "localhost",
    port: 5433,
    database: "polldata"
});

module.exports = pool;