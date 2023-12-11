const Pool = require("pg").Pool;

const pool = new Pool({
    user: "preetham",
    password: "rfsMa95sf53uOjXfMZf8IYUq8dFvaWwd",
    host: "dpg-ckp1t5s1tcps7380i7m0-a.oregon-postgres.render.com",
    port: 5432,
    database: "polldata",
    ssl: {
        protocol: "TLSv1.3",
        cipher: "TLS_AES_128_GCM_SHA256",
        compression: "off"
    }
});

module.exports = pool;