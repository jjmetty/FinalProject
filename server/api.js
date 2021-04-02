var DB = require('./operations/dboperations');
var customer = require('./models/customer');
const dboperations = require('./operations/dboperations');

var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('./api', router);


router.route('.;customers').get((req,res) =>{

    dboperations.getCustomers().then(result => {
        console.log(result);
        response.json(result[0]);
    })

})




var port = process.env.PORT || 8000;
app.listen(port);
console.log('Application is running on port: ' + port);


dboperations.getCustomers().then(result => {
    console.log(result);
})

//25:14