var express = require('express');
var http = require('http');
//var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


//var dateFormat = require('dateformat');
//var now = new Date();


app.set('view engine','ejs');


app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));

/*const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "",
    database :"mydb"
});*/

const siteTitle = "Simple Application";
//const baseURL = "http://localhost:4000"
const showAllUsers= require('./controller/products');

app.get('/',showAllUsers.showAllUsers);
/*app.get('/event/add',function(reg,res){

        res.render('pages/add-event.ejs',{
        siteTitle : siteTitle,
        pageTitle : "Add new event",
        items : ''         
     });
 });*/

app.get('/event/add',showAllUsers.getAddEventPage);
app.post('/event/add',showAllUsers.AddNewEvent);

app.get('/event/addtraintrip',showAllUsers.getAddTrainTripPage);
app.post('/event/addtraintrip',showAllUsers.AddNewTrainTrip);

app.get('/event/addtraintripcity',showAllUsers.getAddTrainTripCityPage);
app.post('/event/addtraintripcity',showAllUsers.AddNewTrainTripCity);

app.get('/event/addtruck',showAllUsers.getAddTruckPage);
app.post('/event/addtruck',showAllUsers.AddNewTruck);

app.get('/event/addtruckroute',showAllUsers.getAddTruckRoutePage);
app.post('/event/addtruckroute',showAllUsers.AddNewTruckRoute);

app.get('/event/addtruckrouteIpoint',showAllUsers.getAddTruckRouteIntermediatePointPage);
app.post('/event/addtruckrouteIpoint',showAllUsers.AddNewTruckRouteIntermediatePoint);

app.get('/event/addproduct',showAllUsers.getAddProductPage);
app.post('/event/addproduct',showAllUsers.AddNewProduct);

app.get('/event/addperson',showAllUsers.getAddPersonPage);
app.post('/event/addperson',showAllUsers.AddNewPerson);

app.get('/event/addcontact',showAllUsers.getAddContactNumberPage);
app.post('/event/addcontact',showAllUsers.AddNewContactNumber);

app.get('/event/addorder',showAllUsers.AddOrder);

app.get('/event/addorder',showAllUsers.getAddOrderRoutePage);
app.get('/event/addorder',showAllUsers.AddOrderRoute);


//app.get('/event/oneyearorder',showAllUsers.getOneYearOrderPage);
app.get('/event/oneyearorder',showAllUsers.ShowOneYearOrderDetails);


/*app.get('/event/student',showAllUsers.getAddStudentPage);
app.post('/event/student',showAllUsers.AddNewStudent);

app.use(bodyParser.urlencoded({
    extended: false
 }));
 
app.use(bodyParser.json());
app.get('/event/edit/:id',showAllUsers.getUserForChange);
app.post('/event/edit/:id',showAllUsers.UpdateUser);
app.get('/event/function',showAllUsers.getFunction);*/

var server = app.listen(4000,function(){
    console.log("Server started on 4000....");
});

