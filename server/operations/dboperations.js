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

//get one customer id
async function getCustomer(customerID){
    try{
        let pool = await sql.connect(config);
        let customer = await pool.request()
            .input ('input_param', sql.Int, customerID)
            .query("SELECT * from customer where customerID = @input_param");
        return customer.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//add customer
async function addCustomer(customer){
    try{
        let pool = await sql.connect(config);
        let insertCustomer = await pool.request()
            .input ('customerID', sql.Int, customer.customerID)
            .input ('customerTypeID', sql.Int, customer.customerTypeID)
            .input ('customerRelationshipID', sql.Int, customer.customerRelationshipID)
            .input ('streetNum', sql.Int, customer.streetNum)
            .input ('unit',sql.VarChar, customer.unit)
            .input ('prefix',sql.VarChar, customer.prefix)
            .input ('streetName',sql.VarChar, customer.streetName)
            .input ('suffix',sql.VarChar, customer.suffix)
            .input ('unitNum',sql.Int, customer.unitNum)
            .input ('city',sql.VarChar, customer.city)
            .input ('stateID',sql.Int, customer.stateID)
            .input ('zip',sql.Int, customer.zip)
            .input ('zip4',sql.Int, customer.zip4)
            .input ('customerNote',sql.VarChar, customer.customerNote)
            .query('INSERT INTO [dbo].[customer] (customerID,customerTypeID,customerRelationshipID,streetNum,unit,prefix,streetName,suffix,unitNum,city,stateID,zip,zip4,customerNote) VALUES (@customerID, @customerTypeID, @customerRelationshipID,@streetNum,@unit,@prefix,@streetName,@suffix,@unitNum,@city,@stateID,@zip,@zip4,@customerNote)');
           
        return insertCustomer.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//delete customer
async function deleteCustomer(customerID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('customerID', sql.Int, customerID)
            .query('DELETE FROM [dbo].[customer] WHERE customerID = @customerID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}




module.exports ={
    getCustomers : getCustomers,
    getCustomer  : getCustomer,
    addCustomer  : addCustomer,
    deleteCustomer : deleteCustomer
}