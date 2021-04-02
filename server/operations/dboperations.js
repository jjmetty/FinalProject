var config = require('../database/dbconfig');
const sql = require ('mssql');


//get customer table
async function getCustomers(){
    try{
        let pool = await sql.connect(config);
        let customers = await pool.request().query("SELECT * from customer");
        return customers.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

module.exports ={
    getCustomers : getCustomers
}