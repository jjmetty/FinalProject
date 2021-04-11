var config = require('../database/dbconfig');
const sql = require ('mssql');
const customer = require('../models/customer');
const crew = require('../models/crew');
const customerLocation = require('../models/customerLocation');
const employee = require('../models/employee');
const employeePosition = require('../models/employeePosition');
const empSkill = require('../models/empSkill');
const job = require('../models/job');
const jobLine = require('../models/jobLine');
const position = require('../models/position');
const serviceList = require('../models/serviceList');


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

//get one customer by customerID
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
            .input ('customerTypeID', sql.Int, customer.customerTypeID)
            .input ('customerRelationshipID', sql.Int, customer.customerRelationshipID)
            .input ('companyName', sql.VarChar, customer.companyName)
            .input ('contactLN', sql.VarChar, customer.contactLN)
            .input ('contactFN', sql.VarChar, customer.contactFN)
            .input ('email', sql.VarChar, customer.email)
            .input ('cellPhone', sql.VarChar, customer.cellPhone)
            .input ('homePhone', sql.VarChar, customer.homePhone)
            .input ('businessPhone', sql.VarChar, customer.businessPhone)
            .input ('fax', sql.VarChar, customer.fax)
            .input ('contactLN2', sql.VarChar, customer.contactLN2)
            .input ('contactFN2', sql.VarChar, customer.contactFN2)
            .input ('email2', sql.VarChar, customer.email2)
            .input ('cellPhone2', sql.VarChar, customer.cellPhone2)
            .input ('homePhone2', sql.VarChar, customer.homePhone2)
            .input ('businessPhone2', sql.VarChar, customer.businessPhone2)
            .input ('fax2', sql.VarChar, customer.fax2)
            .input ('streetNum', sql.Int, customer.streetNum)
            .input ('unit',sql.VarChar, customer.unit)
            .input ('pre_fix',sql.VarChar, customer.pre_fix)
            .input ('streetName',sql.VarChar, customer.streetName)
            .input ('suffix',sql.VarChar, customer.suffix)
            .input ('unitNum',sql.Int, customer.unitNum)
            .input ('city',sql.VarChar, customer.city)
            .input ('stateID',sql.Int, customer.stateID)
            .input ('zip',sql.Int, customer.zip)
            .input ('zip4',sql.Int, customer.zip4)
            .input ('customerNote',sql.VarChar, customer.customerNote)
            .query('INSERT INTO [dbo].[customer] (customerTypeID,customerRelationshipID,companyName, contactLN, contactFN, email, cellPhone, homePhone, businessPhone, fax, contactLN2, contactFN2, email2, cellPhone2, homePhone2, businessPhone2, fax2, streetNum,unit,pre_fix,streetName,suffix,unitNum,city,stateID,zip,zip4,customerNote) VALUES ( @customerTypeID, @customerRelationshipID,@companyName, @contactLN, @contactFN, @email, @cellPhone,@homePhone, @businessPhone,@fax, @contactLN2, @contactFN2, @email2, @cellPhone2,@homePhone2, @businessPhone2,@fax2,@streetNum,@unit,@pre_fix,@streetName,@suffix,@unitNum,@city,@stateID,@zip,@zip4,@customerNote)');
           
        return insertCustomer.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update a customer 46:10
async function updateCustomer(customerID, customer){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
            .input ('customerID', sql.Int, customerID)
            .input ('customerTypeID', sql.Int, customer.customerTypeID)
            .input ('customerRelationshipID', sql.Int, customer.customerRelationshipID)
            .input ('companyName', sql.VarChar, customer.companyName)
            .input ('contactLN', sql.VarChar, customer.contactLN)
            .input ('contactFN', sql.VarChar, customer.contactFN)
            .input ('email', sql.VarChar, customer.email)
            .input ('cellPhone', sql.VarChar, customer.cellPhone)
            .input ('homePhone', sql.VarChar, customer.homePhone)
            .input ('businessPhone', sql.VarChar, customer.businessPhone)
            .input ('fax', sql.VarChar, customer.fax)
            .input ('contactLN2', sql.VarChar, customer.contactLN2)
            .input ('contactFN2', sql.VarChar, customer.contactFN2)
            .input ('email2', sql.VarChar, customer.email2)
            .input ('cellPhone2', sql.VarChar, customer.cellPhone2)
            .input ('homePhone2', sql.VarChar, customer.homePhone2)
            .input ('businessPhone2', sql.VarChar, customer.businessPhone2)
            .input ('fax2', sql.VarChar, customer.fax2)
            .input ('streetNum', sql.Int, customer.streetNum)
            .input ('unit',sql.VarChar, customer.unit)
            .input ('pre_fix',sql.VarChar, customer.pre_fix)
            .input ('streetName',sql.VarChar, customer.streetName)
            .input ('suffix',sql.VarChar, customer.suffix)
            .input ('unitNum',sql.Int, customer.unitNum)
            .input ('city',sql.VarChar, customer.city)
            .input ('stateID',sql.Int, customer.stateID)
            .input ('zip',sql.Int, customer.zip)
            .input ('zip4',sql.Int, customer.zip4)
            .input ('customerNote',sql.VarChar, customer.customerNote)
            .query('UPDATE [dbo].[customer] SET customerTypeID = @customerTypeID ,customerRelationshipID = @customerRelationshipID, companyName = @companyName, contactLN = @contactLN, contactFN = @contactFN, email = @email, cellPhone = @cellPhone, homePhone = @homePhone, businessPhone = @businessPhone, fax = @fax, contactLN2 = @contactLN2, contactFN2 = @contactFN2, email2 = @email2, cellPhone2 = @cellPhone2, homePhone2 = @homePhone2, businessPhone2 = @businessPhone2, fax2 = @fax2 , streetNum = @streetNum ,unit = @unit ,pre_fix = @pre_fix ,streetName = @streetName ,suffix = @suffix ,unitNum = @unitNum,city = @city ,stateID = @stateID, zip = @zip ,zip4 = @zip4 ,customerNote = @customerNote WHERE (customerID = @customerID) ');

        return update.recordsets[0];
        
    } catch (error) {
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


//get stateName table 
async function getStateName(){
    try{
        let pool = await sql.connect(config);
        let stateNames = await pool.request().query("SELECT * from stateName");
        return stateNames.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}



//get crew table
async function getCrews(){
    try{
        let pool = await sql.connect(config);
        let crews = await pool.request().query("SELECT * from crew");
        return crews.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one crew by crewID
async function getCrew(crewID){
    try{
        let pool = await sql.connect(config);
        let crew = await pool.request()
            .input ('input_param', sql.Int, crewID)
            .query("SELECT * from crew where crewID = @input_param");
        return crew.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//add crew
async function addCrew(crew){
    try{
        let pool = await sql.connect(config);
        let insertCrew = await pool.request()
            .input ('crewName', sql.VarChar, crew.crewName)
            .query('INSERT INTO [dbo].[crew] (crewName) VALUES (@crewName)');
           
        return insertCrew.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update a crew
async function updateCrew(crewID, crew){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
            .input ('crewID', sql.Int, crewID)
            .input ('crewName', sql.VarChar, crew.crewName)
            .query('UPDATE crew SET  crewName = @crewName WHERE (crewID = @crewID)');

        return update.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}


//delete crew
async function deleteCrew(crewID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('crewID', sql.Int, crewID)
            .query('DELETE FROM [dbo].[crew] WHERE crewID = @crewID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//get customerLocation table
async function getCustomerLocations(){
    try{
        let pool = await sql.connect(config);
        let customerLocations = await pool.request().query("SELECT * from customerLocation");
        return customerLocations.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}



//get one customerLocation by locationID
async function getCustomerLocation(locationID){
    try{
        let pool = await sql.connect(config);
        let customerLocation = await pool.request()
            .input ('input_param', sql.Int, locationID)
            .query("SELECT * from customerLocation where locationID = @input_param");
        return customerLocation.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//add customerLocation
async function addCustomerLocation(customerLocation){
    try{
        let pool = await sql.connect(config);
        let insertCustomerLocation = await pool.request()
            .input ('customerID', sql.Int, customerLocation.customerID)
            .input ('streetNum', sql.Int, customerLocation.streetNum)
            .input ('unit',sql.VarChar, customerLocation.unit)
            .input ('pre_fix',sql.VarChar, customerLocation.pre_fix)
            .input ('streetName',sql.VarChar, customerLocation.streetName)
            .input ('suffix',sql.VarChar, customerLocation.suffix)
            .input ('unitNum',sql.Int, customerLocation.unitNum)
            .input ('city',sql.VarChar, customerLocation.city)
            .input ('stateID',sql.Int, customerLocation.stateID)
            .input ('zip',sql.Int, customerLocation.zip)
            .input ('zip4',sql.Int, customerLocation.zip4)
            .input ('keyMap',sql.VarChar, customerLocation.keyMap)
            .input ('lotValue',sql.Float, customerLocation.lotValue)
            .input('addedValue',sql.Float, customerLocation.addedValue)
            .input('propertyValue',sql.Float, customerLocation.propertyValue)
            .input('nextAnticipatedDate',sql.Date, customerLocation.nextAnticipatedDate)
            .query('INSERT INTO [dbo].[customerLocation] (customerID, streetNum,unit,pre_fix,streetName,suffix,unitNum,city,stateID,zip,zip4,keyMap,lotValue, addedValue, propertyValue,nextAnticipatedDate) VALUES (@customerID, @streetNum,@unit,@pre_fix,@streetName,@suffix,@unitNum,@city,@stateID,@zip,@zip4,@keyMap, @lotValue, @addedValue, @propertyValue, @nextAnticipatedDate)');
             
            return insertCustomerLocation.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update a customerLocation
async function updateCustomerLocation(locationID, customerLocation){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
        .input ('locationID', sql.Int, locationID)
        .input ('customerID', sql.Int, customerLocation.customerID)
        .input ('streetNum', sql.Int, customerLocation.streetNum)
        .input ('unit',sql.VarChar, customerLocation.unit)
        .input ('pre_fix',sql.VarChar, customerLocation.pre_fix)
        .input ('streetName',sql.VarChar, customerLocation.streetName)
        .input ('suffix',sql.VarChar, customerLocation.suffix)
        .input ('unitNum',sql.Int, customerLocation.unitNum)
        .input ('city',sql.VarChar, customerLocation.city)
        .input ('stateID',sql.Int, customerLocation.stateID)
        .input ('zip',sql.Int, customerLocation.zip)
        .input ('zip4',sql.Int, customerLocation.zip4)
        .input ('keyMap',sql.VarChar, customerLocation.keyMap)
        .input ('lotValue',sql.Float, customerLocation.lotValue)
        .input('addedValue',sql.Float, customerLocation.addedValue)
        .input('propertyValue',sql.Float, customerLocation.propertyValue)
        .input('nextAnticipatedDate',sql.Date, customerLocation.nextAnticipatedDate)
        .query('UPDATE customerLocation SET customerID = @customerID ,streetNum = @streetNum ,unit = @unit ,pre_fix = @pre_fix ,streetName = @streetName ,suffix = @suffix ,unitNum = @unitNum,city = @city ,stateID = @stateID, zip = @zip ,zip4 = @zip4 ,keyMap = @keyMap ,lotValue = @lotValue ,addedValue = @addedValue ,propertyValue = @propertyValue ,nextAnticipatedDate = @nextAnticipatedDate WHERE (locationID = @locationID)');

        return update.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}

//delete customerLocation
async function deleteCustomerLocation(locationID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('locationID', sql.Int, locationID)
            .query('DELETE FROM [dbo].[customerLocation] WHERE locationID = @locationID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//get employee table
async function getEmployees(){
    try{
        let pool = await sql.connect(config);
        let employees = await pool.request().query("SELECT * from employee");
        return employees.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one employee by employeeID
async function getEmployee(employeeID){
    try{
        let pool = await sql.connect(config);
        let employee = await pool.request()
            .input ('input_param', sql.Int, employeeID)
            .query("SELECT * from employee where employeeID = @input_param");
        return employee.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//add employee
async function addEmployee(employee){
    try{
        let pool = await sql.connect(config);
        let insertEmployee = await pool.request()
            .input ('statusID', sql.Int, employee.statusID)
            .input ('firstName', sql.VarChar, employee.firstName)
            .input ('lastName', sql.VarChar, employee.lastName)
          //  .input ('dob', sql.Date, employee.dob)
            .input ('phone', sql.VarChar, employee.phone)
            .input ('employeeLanguage', sql.VarChar, employee.employeeLanguage)
            .input ('email', sql.VarChar, employee.email)
            .input ('crewID', sql.Int, employee.crewID)
            .query('INSERT INTO [dbo].[employee] (statusID,firstName,lastName,phone,employeeLanguage,email,crewID) VALUES ( @statusID, @firstName, @lastName, @phone, @employeeLanguage, @email, @crewID)');
             
            return insertEmployee.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update an employee
async function updateEmployee(employeeID, employee){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
        .input ('employeeID', sql.Int, employeeID)
        .input ('statusID', sql.Int, employee.statusID)
        .input ('firstName', sql.VarChar, employee.firstName)
        .input ('lastName', sql.VarChar, employee.lastName)
        .input ('dob', sql.Date, employee.dob)
        .input ('phone', sql.VarChar, employee.phone)
        .input ('employeeLanguage', sql.VarChar, employee.employeeLanguage)
        .input ('email', sql.VarChar, employee.email)
        .input ('crewID', sql.Int, employee.crewID)
        .query('UPDATE employee SET statusID = @statusID ,firstName = @firstName ,lastName = @lastName ,dob = @dob ,phone = @phone ,employeeLanguage = @employeeLanguage ,email = @email ,crewID = @crewID WHERE (employeeID = @employeeID)');

        return update.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}

//delete employee
async function deleteEmployee(employeeID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('employeeID', sql.Int, employeeID)
            .query('DELETE FROM [dbo].[employee] WHERE employeeID = @employeeID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//get employeePosition table
async function getEmployeePositions(){
    try{
        let pool = await sql.connect(config);
        let employeePositions = await pool.request().query("SELECT * from employeePosition");
        return employeePositions.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one employeePosition by employeePositionID
async function getEmployeePosition(employeePositionID){
    try{
        let pool = await sql.connect(config);
        let employeePosition = await pool.request()
            .input ('input_param', sql.Int, employeePositionID)
            .query("SELECT * from employeePosition where employeePositionID = @input_param");
        return employeePosition.recordsets;

    }
    catch (error){
        console.log(error);
    }
}





//get empSkill table
async function getEmpSkills(){
    try{
        let pool = await sql.connect(config);
        let empSkills = await pool.request().query("SELECT * from empSkill");
        return empSkills.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one empSkill by empSkillID
async function getEmpSkill(empSkillID){
    try{
        let pool = await sql.connect(config);
        let empSkill = await pool.request()
            .input ('input_param', sql.Int, empSkillID)
            .query("SELECT * from empSkill where empSkillID = @input_param");
        return empSkill.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//add emSkill
async function addEmpSkill(empSkill){
    try{
        let pool = await sql.connect(config);
        let insertEmpSkill = await pool.request()
            .input ('empSkillID', sql.Int, empSkill.empSkillID)
            .input ('employeeID', sql.Int, empSkill.employeeID)
            .input ('skillTypeID', sql.Int, empSkill.skillTypeID)
            .input ('skillLevel', sql.VarChar, empSkill.skillLevel)
            .query('INSERT INTO [dbo].[empSkill] (empSkillID,employeeID,skillTypeID,skillLevel) VALUES (@empSkillID, @employeeID, @skillTypeID,@)skillLevel');
           
        return insertEmpSkill.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update an empSkill
async function updateEmpSkill(empSkillID, empSkill){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
        .input ('empSkillID', sql.Int, empSkill.empSkillID)
        .input ('employeeID', sql.Int, empSkill.employeeID)
        .input ('skillTypeID', sql.Int, empSkill.skillTypeID)
        .input ('skillLevel', sql.VarChar, empSkill.skillLevel)
        .query('UPDATE empSkill SET empSkillID = @empSkillID, employeeID = @employeeID, skillTypeID = @skillTypeID, skillLevel = @skillLevel WHERE (empSkillID = @empSkillID)');

        return update.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}

//delete empSkill
async function deleteEmpSkill(empSkillID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('empSkillID', sql.Int, empSkillID)
            .query('DELETE FROM [dbo].[empSkill] WHERE empSkillID = @empSkillID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//get job table
async function getJobs(){
    try{
        let pool = await sql.connect(config);
        let jobs = await pool.request().query("SELECT * from job");
        return jobs.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one job by jobID
async function getJob(jobID){
    try{
        let pool = await sql.connect(config);
        let job = await pool.request()
            .input ('input_param', sql.Int, jobID)
            .query("SELECT * from job where jobID = @input_param");
        return job.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//add job
async function addJob(job){
    try{
        let pool = await sql.connect(config);
        let insertJob = await pool.request()
            .input ('jobID', sql.Int, job.jobID)
            .input ('locationID', sql.Int, job.locationID)
            .input ('jobStatusID', sql.Int, job.jobStatusID)
            .input ('crewID', sql.Int, job.crewID)
            .input ('employeeID', sql.Int, job.employeeID)
            .input ('subContractorID', sql.Int, job.subContractorID)
            .input ('assessmentDate', sql.Date, job.assessmentDate)
            .input ('requestDate', sql.Date, job.requestDate)
            .input ('jobStartDate', sql.Date, job.jobStartDate)
            .input ('jobEndDate', sql.Date, job.jobEndDate)
            .input ('jobTotal', sql.Float, job.jobTotal)
            .input ('bidDescription', sql.VarChar, job.bidDescription)
            .input ('proposalDescription', sql.VarChar, job.proposalDescription)
            .input ('jobInstruction', sql.VarChar, job.jobInstruction)
            .input ('jobComment', sql.VarChar, job.jobComment)
            .query('INSERT INTO [dbo].[job] (jobID,locationID,jobStatusID,crewID,employeeID,subContractorID,assessmentDate,requestDate,jobStartDate,jobEndDate,jobTotal,bidDescription,proposalDescription,jobInstruction,jobComment) VALUES (@jobID,@locationID,@jobStatusID,@crewID,@employeeID,@subContractorID,@assessmentDate,@requestDate,@jobStartDate,@jobEndDate,@jobTotal,@bidDescription,@proposalDescription,@jobInstruction,@jobComment)');
           
        return insertJob.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update a job
async function updateJob(jobID, job){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
        .input ('jobID', sql.Int, job.jobID)
        .input ('locationID', sql.Int, job.locationID)
        .input ('jobStatusID', sql.Int, job.jobStatusID)
        .input ('crewID', sql.Int, job.crewID)
        .input ('employeeID', sql.Int, job.employeeID)
        .input ('subContractorID', sql.Int, job.subContractorID)
        .input ('assessmentDate', sql.Date, job.assessmentDate)
        .input ('requestDate', sql.Date, job.requestDate)
        .input ('jobStartDate', sql.Date, job.jobStartDate)
        .input ('jobEndDate', sql.Date, job.jobEndDate)
        .input ('jobTotal', sql.Float, job.jobTotal)
        .input ('bidDescription', sql.VarChar, job.bidDescription)
        .input ('proposalDescription', sql.VarChar, job.proposalDescription)
        .input ('jobInstruction', sql.VarChar, job.jobInstruction)
        .input ('jobComment', sql.VarChar, job.jobComment)
        .query('UPDATE job SET locationID = @locationID ,jobStatusID = @jobStatus ,crewID = @crewID ,employeeID = @employeeID ,subContractorID = @psubContractorID ,assessmentDate = @assessmentDate ,requestDate = @requestDate ,jobStartDate = @jobStartDate,jobEndDate = @jobEndDate ,jobTotal = @jobTotal, bidDescription = @bidDescription ,proposalDescription = @proposalDescription ,jobInstruction = @jobInstruction ,jobComment = @jobComment WHERE (jobID = @jobID)');

        return update.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}

//delete job
async function deleteJob(jobID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('jobID', sql.Int, jobID)
            .query('DELETE FROM [dbo].[job] WHERE jobID = @jobID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//get jobLine table
async function getJobLines(){
    try{
        let pool = await sql.connect(config);
        let jobLines = await pool.request().query("SELECT * from jobLine");
        return jobLines.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one jobLine by jobID & jobLineID, CHECK 'input_param AS IT IS COMPOSITE PK.
async function getJobLine(jobID, jobLineID){
    try{
        let pool = await sql.connect(config);
        let jobLine = await pool.request()
            .input ('input_param', sql.Int, jobLineID)
            .query("SELECT * from job where jobLineID = @input_param");
        return jobLine.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//add jobLine
async function addJobLine(jobLine){
    try{
        let pool = await sql.connect(config);
        let insertJobLine = await pool.request()
            .input ('jobID', sql.Int, jobLine.jobID)
            .input ('jobLineID', sql.Int, jobLine.jobLineID)
            .input ('serviceListID', sql.Int, jobLine.serviceListID)
            .input ('jobLineStatusID', sql.Int, jobLine.jobLineStatusID)
            .input ('jobLineQuantity', sql.Int, jobLine.jobLineQuantity)
            .input ('jobLineCost', sql.Float, jobLine.jobLineQuantity)
            .query('INSERT INTO [dbo].[jobLine] (jobID, jobLineID, serviceListID, jobLineStatusID, jobLineQuantity, jobLineCost) VALUES (@)jobID, @jobLineID, @serviceListID, @jobLineStatusID, @jobLineQuantity, @jobLineCost');
           
        return insertJobLine.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update a jobLine CHECK WHERE CONDITION
async function updateJobLine(jobID, jobLineID, job){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
        .input ('jobID', sql.Int, jobLine.jobID)
        .input ('jobLineID', sql.Int, jobLine.jobLineID)
        .input ('serviceListID', sql.Int, jobLine.serviceListID)
        .input ('jobLineStatusID', sql.Int, jobLine.jobLineStatusID)            
        .input ('jobLineQuantity', sql.Int, jobLine.jobLineQuantity)
        .input ('jobLineCost', sql.Float, jobLine.jobLineQuantity)
        .query('UPDATE jobLine SET serviceListID = @serviceListID ,jobLineStatusID = @jobLineStatus ,jobLineQuantity = @jobLineQuantity ,jobLineCost = @jobLineCost  WHERE ((jobLineID = @jobLineID) AND (jobID = @jobID))');

        return update.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}

//delete jobLine CHECK FUNCTION PARAMETERS
async function deleteJobLine(jobLineID, jobID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('jobLineID', sql.Int, jobLineID)
            .input ('jobID', sql.Int, jobID)
            .query('DELETE FROM [dbo].[jobLine] WHERE ((jobLineID = @jobLineID) AND (jobID = @jobID))');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//get position table
async function getPositions(){
    try{
        let pool = await sql.connect(config);
        let positions = await pool.request().query("SELECT * from position");
        return positions.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one position by positionID
async function getPosition(positionID){
    try{
        let pool = await sql.connect(config);
        let position = await pool.request()
            .input ('input_param', sql.Int, positionID)
            .query("SELECT * from position where positionID = @input_param");
        return position.recordsets;

    }
    catch (error){
        console.log(error);
    }
}



//get serviceList table
async function getServiceList(){
    try{
        let pool = await sql.connect(config);
        let serviceList = await pool.request().query("SELECT * from serviceList");
        return serviceList.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one service by serviceListID
async function getService(serviceListID){
    try{
        let pool = await sql.connect(config);
        let service = await pool.request()
            .input ('input_param', sql.Int, serviceListID)
            .query("SELECT * from serviceList where serviceListID = @input_param");
        return service.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//get subContractor table
async function getSubcontractors(){
    try{
        let pool = await sql.connect(config);
        let subContractor = await pool.request().query("SELECT * from subContractor");
        return subContractor.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get one subContractor 
async function getSubcontractor(subContractorID){
    try{
        let pool = await sql.connect(config);
        let subcontractor = await pool.request()
            .input ('input_param', sql.Int, subContractorID)
            .query("SELECT * from subContractor where subContractorID = @input_param");
        return subcontractor.recordsets;

    }
    catch (error){
        console.log(error);
    }
}

//add subcontractor
async function addSubcontractor(subcontractor){
    try{
        let pool = await sql.connect(config);
        let insertSubcontractor = await pool.request()
            .input ('subContractorTypeID', sql.Int, subcontractor.subContractorTypeID)
            .input ('companyName', sql.VarChar, subcontractor.companyName)
            .input ('phone', sql.VarChar, subcontractor.phone)
            .input ('email', sql.VarChar, subcontractor.email)
            .input ('streetNum', sql.Int, subcontractor.streetNum)
            .input ('unit', sql.VarChar, subcontractor.unit)
            .input ('pre_fix', sql.VarChar, subcontractor.pre_fix)
            .input ('streetName', sql.VarChar, subcontractor.streetName)
            .input ('suffix', sql.VarChar, subcontractor.suffix)
            .input ('unitNum', sql.Int, subcontractor.unitNum)
            .input ('city', sql.VarChar, subcontractor.city)
            .input ('stateID', sql.Int, subcontractor.stateID)
            .input ('zip', sql.VarChar, subcontractor.zip)
            .input ('zip4', sql.VarChar, subcontractor.zip4)
            .query('INSERT INTO [dbo].[subContractor] (subContractorTypeID, companyName, phone, email, streetNum, unit, pre_fix, streetName, suffix, unitNum, city, stateID, zip, zip4) VALUES (@subContractorTypeID, @companyName, @phone, @email, @streetNum, @unit, @pre_fix, @streetName, @suffix, @unitNum, @city, @stateID, @zip, @zip4 )');
           
        return insertSubcontractor.recordsets;

    }
    catch (error){
        console.log(error);
    }
}


//update subcontractor
async function updateSubcontractor(subContractorID, subcontractor){
    try {
        let pool = await sql.connect(config);
        let update = await pool.request()
        .input ('subContractorID', sql.Int, subContractorID)
        .input ('subContractorTypeID', sql.Int, subcontractor.subContractorTypeID)
        .input ('companyName', sql.VarChar, subcontractor.companyName)
        .input ('phone', sql.VarChar, subcontractor.phone)
        .input ('email', sql.VarChar, subcontractor.email)
        .input ('streetNum', sql.Int, subcontractor.streetNum)
        .input ('unit', sql.VarChar, subcontractor.unit)
        .input ('pre_fix', sql.VarChar, subcontractor.pre_fix)
        .input ('streetName', sql.VarChar, subcontractor.streetName)
        .input ('suffix', sql.VarChar, subcontractor.suffix)
        .input ('unitNum', sql.Int, subcontractor.unitNum)
        .input ('city', sql.VarChar, subcontractor.city)
        .input ('stateID', sql.Int, subcontractor.stateID)
        .input ('zip', sql.VarChar, subcontractor.zip)
        .input ('zip4', sql.VarChar, subcontractor.zip4)
        .query('UPDATE subContractor SET subContractorTypeID = @subContractorTypeID, companyName = @companyName , phone = @phone , email = @email, streetNum = @streetNum, unit = @unit , pre_fix = @pre_fix , streetName = @streetName, suffix = @suffix , unitNum = @unitNum, city = @city, stateID = @stateID, zip = @zip, zip4 = @zip4 WHERE (subContractorID = @subContractorID) ');

        return update.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}



//get subContractorType table
async function getsubContractorTypes(){
    try{
        let pool = await sql.connect(config);
        let subContractorTypes = await pool.request().query("SELECT * from subContractorType");
        return subContractorTypes.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}

//get employeeStatu table
async function getemployeeStatus(){
    try{
        let pool = await sql.connect(config);
        let employeeStatus = await pool.request().query("SELECT * from employeeStatus");
        return employeeStatus.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}


    /**
     * async function getcustomerRelationships(){
    try{
        let pool = await sql.connect(config);
        let customerRelationships = await pool.request().query("SELECT * from customerRelationship");
        return customerRelationships.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one customerRelationship id
async function getcustomerRelationship(customerRelationshipID){
    try{
        let pool = await sql.connect(config);
        let customerRelationship = await pool.request()
            .input ('input_param', sql.Int, customerRelationshipID)
            .query("SELECT * from customerRelationship where customerRelationshipID = @input_param");
        return customerRelationship.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add customerRelationship
async function addcustomerRelationship(customerRelationship){
    try{
        let pool = await sql.connect(config);
        let insertcustomerRelationship = await pool.request()
            .input ('customerRelationshipID', sql.Int, customerRelationship.customerRelationshipID)
            .input ('customerRelationship', sql.Int, customerRelationship.customerRelationship)
            .query('INSERT INTO [dbo].[customerRelationship] (customerRelationshipID,customerRelationship) VALUES (@customerRelationshipID, @customerRelationship)');
           
        return insertcustomerRelationship.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete customerRelationship
async function deletecustomerRelationship(customerRelationshipID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('customerRelationshipID', sql.Int, customerRelationshipID)
            .query('DELETE FROM [dbo].[customerRelationship] WHERE customerRelationshipID = @customerRelationshipID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// customerRelationship end


///////////////////// customerType begin
//get customerType table
async function getcustomerTypes(){
    try{
        let pool = await sql.connect(config);
        let customerTypes = await pool.request().query("SELECT * from customerType");
        return customerTypes.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one customerType id
async function getcustomerType(customerTypeID){
    try{
        let pool = await sql.connect(config);
        let customerType = await pool.request()
            .input ('input_param', sql.Int, customerTypeID)
            .query("SELECT * from customerType where customerTypeID = @input_param");
        return customerType.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add customerType
async function addcustomerType(customerType){
    try{
        let pool = await sql.connect(config);
        let insertcustomerType = await pool.request()
            .input ('customerTypeID', sql.Int, customerType.customerTypeID)
            .input ('customerType', sql.Int, customerType.customerType)
            .query('INSERT INTO [dbo].[customerType] (customerTypeID, customerType) VALUES (@customerTypeID, @customerType)');
           
        return insertcustomerType.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete customerType
async function deletecustomerType(customerTypeID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('customerTypeID', sql.Int, customerTypeID)
            .query('DELETE FROM [dbo].[customerType] WHERE customerTypeID = @customerTypeID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// customerType end

///////////////////// jobStatus begin
//get jobStatus table
async function getjobStatus(){
    try{
        let pool = await sql.connect(config);
        let jobStatus = await pool.request().query("SELECT * from jobStatus");
        return jobStatus.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one jobStatus id
async function getjobStatus(jobStatusID){
    try{
        let pool = await sql.connect(config);
        let jobStatus = await pool.request()
            .input ('input_param', sql.Int, jobStatusID)
            .query("SELECT * from jobStatus where jobStatusID = @input_param");
        return jobStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add jobStatus
async function addjobStatus(jobStatusID){
    try{
        let pool = await sql.connect(config);
        let insertjobStatus = await pool.request()
            .input ('jobStatusID', sql.Int, jobStatus.jobStatusID)
            .input ('jobStatus', sql.Int, jobStatus.jobStatus)
            .query('INSERT INTO [dbo].[jobStatus] (jobStatusID,jobStatus) VALUES (@jobStatusID, @jobStatus)');
           
        return insertjobStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete jobStatus
async function deletejobStatus(jobStatusID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('jobStatusID', sql.Int, jobStatusID)
            .query('DELETE FROM [dbo].[jobStatus] WHERE jobStatusID = @jobStatusID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// jobStatus end

///////////////////// ServiceStatus begin
//get ServiceStatus table
async function getServiceStatus(){
    try{
        let pool = await sql.connect(config);
        let ServiceStatuss = await pool.request().query("SELECT * from ServiceStatus");
        return ServiceStatuss.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one ServiceStatus id
async function getServiceStatus(ServiceStatusID){
    try{
        let pool = await sql.connect(config);
        let ServiceStatus = await pool.request()
            .input ('input_param', sql.Int, ServiceStatusID)
            .query("SELECT * from ServiceStatus where ServiceStatusID = @input_param");
        return ServiceStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add ServiceStatus
async function addServiceStatus(ServiceStatus){
    try{
        let pool = await sql.connect(config);
        let insertServiceStatus = await pool.request()
            .input ('ServiceStatusID', sql.Int, ServiceStatus.ServiceStatusID)
            .input ('ServiceStatus', sql.Int, ServiceStatus.ServiceStatus)
            .query('INSERT INTO [dbo].[ServiceStatus] (ServiceStatusID,ServiceStatus) VALUES (@ServiceStatusID, @ServiceStatus)');
           
        return insertServiceStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete ServiceStatus
async function deleteServiceStatus(ServiceStatusID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('ServiceStatusID', sql.Int, ServiceStatusID)
            .query('DELETE FROM [dbo].[ServiceStatus] WHERE ServiceStatusID = @ServiceStatusID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// ServiceStatus end

///////////////////// jobLineStatus begin
//get jobLineStatus table
async function getjobLineStatus(){
    try{
        let pool = await sql.connect(config);
        let jobLineStatus = await pool.request().query("SELECT * from jobLineStatus");
        return jobLineStatus.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one jobLineStatus id
async function getjobLineStatus(jobLineStatusID){
    try{
        let pool = await sql.connect(config);
        let jobLineStatus = await pool.request()
            .input ('input_param', sql.Int, jobLineStatusID)
            .query("SELECT * from jobLineStatus where jobLineStatusID = @input_param");
        return jobLineStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add jobLineStatus
async function addjobLineStatus(jobLineStatus){
    try{
        let pool = await sql.connect(config);
        let insertjobLineStatus = await pool.request()
            .input ('jobLineStatusID', sql.Int, jobLineStatus.jobLineStatusID)
            .input ('jobLineStatus', sql.Int, jobLineStatus.jobLineStatus)
            .query('INSERT INTO [dbo].[jobLineStatus] (jobLineStatusID,jobLineStatus) VALUES (@jobLineStatusID, @jobLineStatus)');
           
        return insertjobLineStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete jobLineStatus
async function deletejobLineStatus(jobLineStatusID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('jobLineStatusID', sql.Int, jobLineStatusID)
            .query('DELETE FROM [dbo].[jobLineStatus] WHERE jobLineStatusID = @jobLineStatusID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// jobLineStatus end

///////////////////// skillStatus begin
//get skillStatus table
async function getskillStatus(){
    try{
        let pool = await sql.connect(config);
        let skillStatus = await pool.request().query("SELECT * from skillStatus");
        return skillStatus.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one skillStatus id
async function getskillStatus(skillStatusID){
    try{
        let pool = await sql.connect(config);
        let skillStatus = await pool.request()
            .input ('input_param', sql.Int, skillStatusID)
            .query("SELECT * from skillStatus where skillStatusID = @input_param");
        return skillStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add skillStatus
async function addskillStatus(skillStatus){
    try{
        let pool = await sql.connect(config);
        let insertskillStatus = await pool.request()
            .input ('skillStatusID', sql.Int, skillStatus.skillStatusID)
            .input ('skillStatus', sql.Int, skillStatus.skillStatus)
            .query('INSERT INTO [dbo].[skillStatus] (skillStatusID,skillStatus) VALUES (@skillStatusID, @skillStatus)');
           
        return insertskillStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete skillStatus
async function deleteskillStatus(skillStatusTypeID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('skillStatusID', sql.Int, skillStatusID)
            .query('DELETE FROM [dbo].[skillStatus] WHERE skillStatusID = @skillStatusID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// skillStatus end

///////////////////// positionStatus begin
//get positionStatus table
async function getpositionStatus(){
    try{
        let pool = await sql.connect(config);
        let positionStatus = await pool.request().query("SELECT * from positionStatus");
        return positionStatus.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one positionStatus id
async function getpositionStatus(positionStatusID){
    try{
        let pool = await sql.connect(config);
        let positionStatus = await pool.request()
            .input ('input_param', sql.Int, positionStatusID)
            .query("SELECT * from positionStatus where positionStatusID = @input_param");
        return positionStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add positionStatus
async function addpositionStatus(positionStatus){
    try{
        let pool = await sql.connect(config);
        let insertpositionStatus = await pool.request()
            .input ('positionStatusID', sql.Int, positionStatus.positionStatusID)
            .input ('positionStatus', sql.Int, positionStatus.positionStatus)
            .query('INSERT INTO [dbo].[positionStatus] (positionStatusID,positionStatus) VALUES (@positionStatusID, @positionStatus)');
           
        return insertpositionStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete positionStatus
async function deletepositionStatus(positionStatusTypeID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('positionStatusID', sql.Int, positionStatusID)
            .query('DELETE FROM [dbo].[positionStatus] WHERE positionStatusID = @positionStatusID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// positionStatus end

///////////////////// employeeStatu begin
//get employeeStatu table
async function getemployeeStatus(){
    try{
        let pool = await sql.connect(config);
        let employeeStatus = await pool.request().query("SELECT * from employeeStatus");
        return employeeStatus.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one employeeStatu id
async function getemployeeStatus(employeeStatusID){
    try{
        let pool = await sql.connect(config);
        let employeeStatus = await pool.request()
            .input ('input_param', sql.Int, employeeStatusID)
            .query("SELECT * from employeeStatus where employeeStatusID = @input_param");
        return employeeStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add employeeStatu
async function addemployeeStatus(employeeStatus){
    try{
        let pool = await sql.connect(config);
        let insertemployeeStatu = await pool.request()
            .input ('employeeStatusID', sql.Int, employeeStatus.employeeStatusID)
            .input ('employeeStatus', sql.Int, employeeStatu.employeeStatusTypeID)
            .query('INSERT INTO [dbo].[employeeStatus] (employeeStatusID,employeeStatus) VALUES (@employeeStatusID, @employeeStatus)');
           
        return insertemployeeStatus.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete employeeStatus
async function deleteemployeeStatus(employeeStatus){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('employeeStatuID', sql.Int, employeeStatusID)
            .query('DELETE FROM [dbo].[employeeStatus] WHERE employeeStatusID = @employeeStatusID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//////////////// employeeStatu end

///////////////////// subContractorType begin
//get subContractorType table
async function getsubContractorTypes(){
    try{
        let pool = await sql.connect(config);
        let subContractorTypes = await pool.request().query("SELECT * from subContractorType");
        return subContractorTypes.recordsets;
    }
    catch (error){
        console.log(error);
    } 
}
//get one subContractorType id
async function getsubContractorType(subContractorTypeID){
    try{
        let pool = await sql.connect(config);
        let subContractorType = await pool.request()
            .input ('input_param', sql.Int, subContractorTypeID)
            .query("SELECT * from subContractorType where subContractorTypeID = @input_param");
        return subContractorType.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//add subContractorType
async function addsubContractorType(subContractorType){
    try{
        let pool = await sql.connect(config);
        let insertsubContractorType = await pool.request()
            .input ('subContractorTypeID', sql.Int, subContractorType.subContractorTypeID)
            .input ('subContractorType', sql.Int, subContractorType.subContractorType)
            .query('INSERT INTO [dbo].[subContractorType] (subContractorTypeID,subContractorType) VALUES (@subContractorTypeID, @subContractorType)');
           
        return insertsubContractorType.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
//delete subContractorType
async function deletesubContractorType(subContractorTypeTypeID){
    try{
        let pool = await sql.connect(config);
        let deleted = await pool.request()
            .input ('subContractorTypeID', sql.Int, subContractorTypeID)
            .query('DELETE FROM [dbo].[subContractorType] WHERE subContractorTypeID = @subContractorTypeID');
        return deleted.recordsets;

    }
    catch (error){
        console.log(error);
    }
}
     * 
     * 
     */










module.exports ={
    getCustomers : getCustomers,
    getCustomer  : getCustomer,
    addCustomer  : addCustomer,
    updateCustomer : updateCustomer,
    deleteCustomer : deleteCustomer,

    getStateName: getStateName,

    getCrews : getCrews,
    getCrew : getCrew,
    addCrew : addCrew,
    updateCrew : updateCrew,
    deleteCrew : deleteCrew,

    getCustomerLocations : getCustomerLocations,
    getCustomerLocation : getCustomerLocation,
    addCustomerLocation : addCustomerLocation,
    updateCustomerLocation : updateCustomerLocation,
    deleteCustomerLocation : deleteCustomerLocation,

    getEmployees : getEmployees,
    getEmployee  : getEmployee,
    addEmployee  : addEmployee,
    updateEmployee : updateEmployee,
    deleteEmployee : deleteEmployee,

    getEmployeePositions : getEmployeePositions,
    getEmployeePosition  : getEmployeePosition,


    getEmpSkills : getEmpSkills,
    getEmpSkill : getEmpSkill,
    addEmpSkill : addEmpSkill,
    updateEmpSkill : updateEmpSkill,
    deleteEmpSkill : deleteEmpSkill,
    
    getJobs : getJobs,
    getJob : getJob,
    addJob : addJob,
    updateJob : updateJob,
    deleteJob : deleteJob,

    getJobLines : getJobLines,
    getJobLine : getJobLine,
    addJobLine : addJobLine,
    updateJobLine : updateJobLine,
    deleteJobLine : deleteJobLine,

    getPositions : getPositions,
    getPosition : getPosition,


    getServiceList : getServiceList,
    getService : getService,

    getSubcontractors : getSubcontractors,
    getSubcontractor  : getSubcontractor,
    addSubcontractor  : addSubcontractor,
    updateSubcontractor : updateSubcontractor,

    getsubContractorTypes : getsubContractorTypes,

    getemployeeStatus  : getemployeeStatus
    

    
}