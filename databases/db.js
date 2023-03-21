const mysql =require('mysql')

const conexion= mysql.createConnection({
host:process.env.DB_HOST,
user: process.env.DB_USER,
password:process.env.DB_PASS,
database:process.env.DB_DATABASE
})

conexion.connect((error)=>{
    if(error){
        console.log('***eror de conexion***'+error);
        return
    }
    console.log('***conexion exitosa de mysql***');
})
module.exports =conexion
