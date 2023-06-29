const { Pool } = require("pg");
//sending our credentials to the db
const pool = new Pool({
    host:'localhost',
    port: 5432,
    database: "crudbackend",
    user: "mahatirniloy",
    password: "",
})