var DB = require('./operations/dboperations');
var customer = require('./models/customer');
const dboperations = require('./operations/dboperations');

var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require('cors');
const { response, request } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


//get customers 
router.route('/customers').get((req,res) =>{

    dboperations.getCustomers().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

//get one customer
router.route('/customers/:id').get((req,res) =>{

    dboperations.getCustomer(req.params.id).then(result => {
     //   console.log(result);
        res.json(result[0]);
    })

})



//add a customer
router.route('/addCustomer').post((req,res) =>{

    let customer = {...req.body}

    dboperations.addCustomer(customer).then(result => {
       // console.log(result);
        res.status(201).json(result);
    })

})


//update a customer record
//post or put??
router.route('/updateCustomer/:id').post((req,res) =>{

    let customerID = req.params.id;
    let customer = {...req.body};

    dboperations.updateCustomer(customerID, customer).then(result => {
        res.json(result);
    })

})




//delete a customer
router.route('/deleteCustomer/:id').delete((req,res) => {

    let customerID = req.params.id;

    dboperations.deleteCustomer(customerID).then (result =>{
        res.json(result);
    })
})


//get stateNames
router.route('/stateNames').get((req,res) =>{

    dboperations.getStateName().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})



//update customer, last crud and test and start on the other tables


//get crews
router.route('/crews').get((req,res) =>{

    dboperations.getCrews().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

// add crew
router.route('/addCrew').post((req,res) =>{

    let crew = {...req.body}

    dboperations.addCrew(crew).then(result => {
       // console.log(result);
        res.status(201).json(result);
    })

})

//get one crew
router.route('/crews/:id').get((req,res) =>{

    dboperations.getCrew(req.params.id).then(result => {
     //   console.log(result);
        res.json(result[0]);
    })

})

//update a crew
router.route('/updateCrew/:id').post((req,res) =>{

    let crewID = req.params.id;
    let crew = {...req.body};

    dboperations.updateCrew(crewID, crew).then(result => {
        res.json(result);
    })

})

//delete a crew
router.route('/deleteCrew/:id').delete((req,res) => {

    let crewID = req.params.id;

    dboperations.deleteCrew(crewID).then (result =>{
        res.json(result);
    })
})



//get employees
router.route('/employees').get((req,res) =>{

    dboperations.getEmployees().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

//get one employee
router.route('/employees/:id').get((req,res) =>{

    dboperations.getEmployee(req.params.id).then(result => {
     //   console.log(result);
        res.json(result[0]);
    })

})

//add an employee
router.route('/addEmployee').post((req,res) =>{

    let employee = {...req.body}

    dboperations.addEmployee(employee).then(result => {
       // console.log(result);
        res.status(201).json(result);
    })

})

//update an employee
router.route('/updateEmployee/:id').post((req,res) =>{

    let employeeID = req.params.id;
    let employee = {...req.body};

    dboperations.updateEmployee(employeeID, employee).then(result => {
        res.json(result);
    })

})

//delete an employee
router.route('/deleteEmployee/:id').delete((req,res) => {

    let employeeID = req.params.id;

    dboperations.deleteEmployee(employeeID).then (result =>{
        res.json(result);
    })
})

//get tree location
router.route('/treeLocations').get((req,res) =>{

    dboperations.getCustomerLocations().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

//get jobs
router.route('/jobs').get((req,res) =>{

    dboperations.getJobs().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

//get one job


//add a job
router.route('/addJob').post((req,res) =>{

    let job = {...req.body}

    dboperations.addJob(job).then(result => {
       // console.log(result);
        res.status(201).json(result);
    })

})

//get subcontractor table
router.route('/subcontractors').get((req,res) =>{

    dboperations.getSubcontractors().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

//get one subcontractor table
router.route('/subcontractor/:id').get((req,res) =>{

    dboperations.getSubcontractor(req.params.id).then(result => {
     //   console.log(result);
        res.json(result[0]);
    })

})

//add a subcontractor
router.route('/addSubcontractor').post((req,res) =>{

    let sub = {...req.body}

    dboperations.addSubcontractor(sub).then(result => {
       // console.log(result);
        res.status(201).json(result);
    })

})

//update a subcontractor
router.route('/updateSub/:id').post((req,res) =>{

    let subID = req.params.id;
    let sub = {...req.body};

    dboperations.updateSubcontractor(subID, sub).then(result => {
        res.json(result);
    })

})

//get subcontractor types table
router.route('/subtype').get((req,res) =>{

    dboperations.getsubContractorTypes().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

// get employee status
router.route('/employeeStatus').get((req,res) =>{

    dboperations.getemployeeStatus().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

//get one customer tree location
router.route('/treeLocation/:id').get((req,res) =>{

    dboperations.getCustomerLocation(req.params.id).then(result => {
     //   console.log(result);
        res.json(result[0]);
    })

})

//add customer tree location
router.route('/addTreeLocation').post((req,res) =>{

    let location = {...req.body}

    dboperations.addCustomerLocation(location).then(result => {
       // console.log(result);
        res.status(201).json(result);
    })

})

//update customer location
router.route('/updateLocation/:id').post((req,res) =>{

    let locationID = req.params.id;
    let location = {...req.body};

    dboperations.updateCustomerLocation(locationID, location).then(result => {
        res.json(result);
    })

})

//get job status table
router.route('/jobStatus').get((req,res) =>{

    dboperations.getjobStatus().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})

//get service list table
router.route('/serviceList').get((req,res) =>{

    dboperations.getServiceList().then(result => {
      //  console.log(result);
        res.json(result[0]);
    })

})


var port = process.env.PORT || 8000;
app.listen(port);
console.log('Server is running on port ' + port);




//25:14