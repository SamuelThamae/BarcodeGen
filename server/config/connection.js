
const mysql=require('mysql')
require('dotenv').config()

var conn=mysql.createConnection({
    port:process.env.DB_PORT,
    host:process.env.DB_Host,
    password:process.env.DB_Password,
    user:process.env.BD_User,
    database:process.env.DB_Database

})

module.exports=conn