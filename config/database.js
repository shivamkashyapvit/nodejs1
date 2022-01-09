const {createPool} = require("mysql")

const pool = createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10
})

module.exports=pool;//reuse theconnection after this not going to connect
//when ever we require the connection we use pool

