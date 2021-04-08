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





var port = process.env.PORT || 8000;
app.listen(port);
console.log('Server is running on port ' + port);




//25:14