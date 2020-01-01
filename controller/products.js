var mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "",
    database :"project"
});
//moldule.exports =pool.premise()
const siteTitle = "Simple Application";
const baseURL = "http://localhost:4000";
var dateFormat = require('dateformat');
var now = new Date();
//const dbquery = require('../demo_server.js');
//console.log(dbquery.fetchAll);
const model = require('../model/products');

//var result = model.show();
//console.log(result);
const Render = function(res,page,siteTitle,pageTitle,items){
    res.render(page,{
        siteTitle : siteTitle,
        pageTitle : pageTitle,
        items : items
    //console.log(result);
    });
};
exports.showAllUsers = function(reg,res){
    var result = model.show();
    con.query(result,function(err,result){
        if (err) throw err;
        Render(res,'index',siteTitle,"ALL EVENTS",result);
    });
    //model.show()
};

exports.getAddEventPage = function(reg,res){
    /*res.render('pages/add-event.ejs',{
    siteTitle : siteTitle,
    pageTitle : "Add new event",
    items : '' });*/
    Render(res,'pages/add-event.ejs',siteTitle,"ADD NEW EVENT",'');        

};

exports.AddNewEvent  = function(req,res){
    let id = req.body.id;
    let city = req.body.city;
    let street_name = req.body.street_name;
    let number = req.body.number;
    let capacity = req.body.capacity;
    //let status  = "1"
    //console.log(id);
    /*let query = "INSERT INTO `e_event` (id,e_start_date,e_name,status) VALUES ('" +
                            id + "', '" + date + "', '" + name + "', '" + status + "')";*/
    let query = model.NewEvent(id,city,street_name,number,capacity); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddTrainTripPage = function(reg,res){
    Render(res,'pages/add-traintrip.ejs',siteTitle,"ADD NEW EVENT",'');        

};
exports.AddNewTrainTrip  = function(req,res){
    let train_trip_id = req.body.train_trip_id;
    let arrival_time_to_kandy = req.body.arrival_time_to_kandy;
    let allocated_capacity = req.body.allocated_capacity;
    let query = model.NewTrainTrip(train_trip_id,arrival_time_to_kandy,allocated_capacity); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddTrainTripCityPage = function(reg,res){
    Render(res,'pages/add-traintripcity.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        

};
exports.AddNewTrainTripCity  = function(req,res){
    let city_id = req.body.city_id;
    let city = req.body.city;
    let train_trip_id = req.body.train_trip_id;
    let query = model.NewTrainTripCity(city_id,city,train_trip_id); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddTruckPage = function(reg,res){
    Render(res,'pages/add-truck.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        

};
exports.AddNewTruck  = function(req,res){
    let truck_id  = req.body.truck_id ;
    let reg_no  = req.body.reg_no ;
    let store_id  = req.body.store_id ;
    let query = model.NewTruck(truck_id ,reg_no,store_id); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddTruckRoutePage = function(reg,res){
    Render(res,'pages/add-truckroute.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        

};
exports.AddNewTruckRoute  = function(req,res){
    let truck_route_id  = req.body.truck_route_id ;
    let maximum_time = req.body.maximum_time ;
    let store_id  = req.body.store_id ;
    let query = model.NewTruckRoute(truck_route_id ,maximum_time,store_id); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};

exports.getAddTruckRouteIntermediatePointPage = function(reg,res){
    Render(res,'pages/add-truckrouteIpoint.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        

};
exports.AddNewTruckRouteIntermediatePoint  = function(req,res){
    let point_id  = req.body.point_id;
    let point = req.body.point ;
    let truck_route_id = req.body.truck_route_id ;
    let query = model.NewTruckRouteIntermediatePoint(point_id ,point ,truck_route_id); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddProductPage = function(reg,res){
    Render(res,'pages/add-product.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        

};
exports.AddNewProduct  = function(req,res){
    let product_id  = req.body.product_id;
    let product_name = req.body.product_name;
    let brand = req.body.brand;
    let capacity_consumption= req.body.capacity_consumption;
    let unit_price  = req.body.unit_price ;
    let query = model.NewProduct(product_id,product_name,brand,capacity_consumption,unit_price); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddPersonPage = function(reg,res){
    Render(res,'pages/add-person.ejs',siteTitle,"ADD NEW PERSON",'');        

};
exports.AddNewPerson  = function(req,res){
    let person_id   = req.body.person_id ;
    let NIC_No= req.body.NIC_No;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name ;
    let city  = req.body.city;
    let street_name  = req.body.street_name;
    let number = req.body.number;
    let is_active = "1";
    let query = model.Person(person_id,NIC_No,first_name,last_name,city,street_name,number,is_active); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddContactNumberPage = function(reg,res){
    Render(res,'pages/add-contactno.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        

};
exports.AddNewContactNumber  = function(req,res){
    let contact_no_id = req.body.contact_no_id  ;
    let contact_no = req.body.contact_no;
    let person_id  = req.body.person_id ;
    let query = model.ContactNumber(contact_no_id ,contact_no ,person_id ); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.getAddUsersPage = function(reg,res){
    Render(res,'pages/add-user.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        
};
exports.AddNewUser  = function(req,res){
    let user_id  = req.body.user_id  ;
    let user_name = req.body.user_name;
    let password  = req.body.password ;
    let query = model.Users(user_id  ,user_name  ,password); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};
exports.AddOrder = function(reg,res){
    var result = model.Order();
    var result_1 = model.OrderID(result);
    con.query(result,function(err,result,result_1){
        if (err) throw err;
        
        //var workflowdata = JSON.parse(body);
        res.render('pages/add-order.ejs',{
            siteTitle : siteTitle,
            pageTitle : "ADD NEW ORDER",
            items : result
        //console.log(result);
        });
    });
    //model.show()
};
exports.getAddOrderRoutePage = function(reg,res){
    Render(res,'pages/add-user.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        
};
exports.AddOrderRoute  = function(req,res){
    let item  = req.body.item;
    let query = model.OrderID(item); 
    con.query(query,function(err,result){
        console.log(result);
        res.render('add-order.ejs',{
            items : result
        //console.log(result);
        });
    });
};
/*exports.getOneYearOrderPage = function(reg,res){
    Render(res,'pages/tasks/year-order.ejs',siteTitle,"YEAR ORDER",'');        
};
exports.ShowOneYearOrderDetails  = function(req,res){
    let query = model.OneYearOrderDetails(); 
    con.query(query,function(err,result){
        console.log("in the functio");
        res.redirect(baseURL);
    });
};*/



exports.ShowOneYearOrderDetails = function(reg,res){
    var year = 2019;
    var result = model.OneYearOrderDetails();
    var result_1 = model.OneYearOrderDetails();
    var result_2 = model.OneYearOrderDetails();
    var result_3 = model.OneYearOrderDetails();
    con.query(result,[year+'-01-01' ,year+'-03-31' ],function(err,result){
        if (err) throw err;
        con.query(result_1,[year+'-04-01' ,year+'-06-31' ],function(err,result_1){
            if (err) throw err;
            con.query(result_2,[year+'-07-01' ,year+'-09-31' ],function(err,result_2){
                if (err) throw err;
                con.query(result_3,[year+'-10-01' ,year+'-12-31' ],function(err,result_3){
                    if (err) throw err;
                //console.log(result_2);
        //console.log(result);
        //Render(res,'pages/tasks/year-order.ejs',siteTitle,"ALL EVENTS",result);
                    res.render('pages/tasks/year-order.ejs',{
                        siteTitle : siteTitle,
                        pageTitle : 'All EVENTS',
                        items : result,
                        items_1 : result_1,
                        items_2 : result_2,
                        items_3 : result_3
                    //console.log(result);
                    });
                });
            });
        });
    });
    //model.show()
};
/*exports.getAddOrderPage = function(reg,res){
    Render(res,'pages/add-order.ejs',siteTitle,"ADD NEW TRAIN TRIP CITY",'');        

};
exports.AddNewOrder  = function(req,res){
    let order_destination  = req.body.order_destination;
    let truck_route = req.body.truck_route;
    let query = model.Order(order_destination  ,truck_route); 
    con.query(query,function(err,result){
        res.redirect(baseURL);
    });
};*/

/*
exports.getUserForChange = function(req,res){
    let playerId = req.params.id;
    const change = model.UserChange(playerId);
    con.query(change,function(err,result){
        result[0].id = result[0].id;
        //console.log(result[0].id);
        result[0].e_start_date = dateFormat(result[0].e_start_date,"yyyy-mm-dd");
        result[0].e_name = result[0].e_name;
        result[0].status = "1";*/
        /*res.render('pages/edit-event',{ 
            siteTitle : siteTitle,
            pageTitle : "Editing event : " + result[0].e_name,
            item : result
        });*/
        /*if (err) throw err;
        Render(res,'pages/edit-event',siteTitle,"Editing event : " + result[0].e_name,result);
    }); 
};

exports.UpdateUser = function(req,res){
    let id = req.body.id;
    let date = req.body.e_start_date;
    let name = req.body.e_name;
    let zero = req.body.status;*/
    /*var query = "UPDATE `e_event` SET";
        query += " `id` = '"+req.body.id+"',";
        query += " `e_start_date` = '"+dateFormat(req.body.e_start_date,"yyyy-mm-dd")+"',";
        query += " `e_name` = '"+req.body.e_name+"',";
        query += " `status` = '"+zero+"'";
        query += "  WHERE `e_event`.`id` = "+ req.body.id+"";*/
    /*let query = model.UpdateUser(id,date,name,zero);
    con.query(query,function(err,result){
        if(result.affectedRows){
            res.redirect(baseURL);
        } 
    });
};

exports.getFunction = function(reg,res){
    let player_Name = "hiruna kumara";
    let status = '1';
    con.query("SELECT e_start_date FROM e_event where get_name(170326)='"+player_Name+"' and status ='"+status+"' ",function(err,result){
        console.log(result);
        res.render('index_1',{
            siteTitle : siteTitle,
            pageTitle : player_Name+" Work date",
            items : result
        //console.log(result);
        });
    });
};
exports.getAddStudentPage = function(reg,res){*/
    /*res.render('pages/add-student.ejs',{
    siteTitle : siteTitle,
    pageTitle : "Add new event",
    items : ''         
 });*/
    /*Render(res,'pages/add-student.ejs',siteTitle,"Add Student",'');
};
exports.AddNewStudent  = function(req,res){
    let s_id = req.body.s_id;
    //let date = req.body.e_start_date;
    let s_name = req.body.s_name;
    //let status  = "1"
    //console.log(id);
    let c_id = req.body.c_id;
    let c_name = req.body.c_name;*/
    /*let query = "INSERT INTO `student` (Id,StudentName) VALUES ('" +
                            s_id + "', '" + s_name + "')";
    let query_1 = "INSERT INTO `course` (Id,CourseName) VALUES ('" +
                            c_id + "', '" + c_name + "')";
    let query_2 = "INSERT INTO `studentcourse` (StudentId,CourseId) VALUES ('" +
                            s_id + "', '" + c_id + "')";*/
    /*let query = model.AddStudent(s_id,s_name);
    let query_1 = model.AddCourse(c_id,c_name);
    let query_2 = model.AddStudentCourse(s_id,c_id);
    con.query(query_1);
    con.query(query);
    con.query(query_2,function(err,result){
        res.redirect(baseURL);
    });
};*/