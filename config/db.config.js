const mysql=require("mysql2");


const dbConn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'981129',
    database:'fleetflow'
});

dbConn.connect(function(error){
    if (error) throw error;
    console.log("Database connected Successfully")
})

module.exports=dbConn