exports.show = function(){
    return "SELECT * FROM store ";
    //return "SELECT * FROM e_event WHERE status = '"+'1' + "'";
};
exports.NewEvent = function(id,city,street_name,number,capacity){
    return "INSERT INTO `store` (store_id,city,street_name,number,capacity) VALUES ('" +
                            id + "', '" + city + "', '" + street_name + "', '" + number + "', '" + capacity + "')";
};
exports.NewTrainTrip = function(train_trip_id,arrival_time_to_kandy,allocated_capacity){
    return "INSERT INTO `Train_trip` (train_trip_id,arrival_time_to_kandy,allocated_capacity) VALUES ('" +
    train_trip_id + "', '" + arrival_time_to_kandy + "', '" + allocated_capacity + "')";
};
exports.NewTrainTripCity = function(city_id,city,train_trip_id){
    return "INSERT INTO `Train_trip_city` (city_id,city,train_trip_id) VALUES ('" +
    city_id + "', '" + city + "', '" + train_trip_id + "')";
};
exports.NewTruck = function(truck_id,reg_no ,store_id){
    return "INSERT INTO `Truck` (truck_id,reg_no ,store_id) VALUES ('" +
    truck_id + "', '" + reg_no + "', '" + store_id + "')";
};

exports.NewTruckRoute = function(truck_route_id,maximum_time ,store_id){
    return "INSERT INTO `Truck_route` (truck_route_id,maximum_time ,store_id) VALUES ('" +
    truck_route_id + "', '" + maximum_time + "', '" + store_id + "')";
};

exports.NewTruckRouteIntermediatePoint = function(point_id ,point ,truck_route_id){
    return "INSERT INTO `Truck_route_intermediate_point` (point_id ,point ,truck_route_id) VALUES ('" +
    point_id+ "', '" + point + "', '" + truck_route_id + "')";
};

exports.NewProduct = function(product_id,product_name,brand,number,capacity_consumption,unit_price){
    return "INSERT INTO `Product` (product_id,product_name,brand,number,capacity_consumption,unit_price) VALUES ('" +
    product_id+ "', '" + product_name + "', '" + brand + "', '" + number + "', '" + capacity_consumption + "', '" + unit_price + "')";
};
exports.Person = function(person_id,NIC_No,first_name,last_name,city,street_name,number,is_active){
    return "INSERT INTO `Person` (person_id,NIC_No,first_name,last_name,city,street_name,number,is_active) VALUES ('" +
    person_id+ "', '" + NIC_No + "', '" + first_name + "', '" + last_name + "', '" + city + "', '" + street_name +"', '" + number +"', '" + is_active + "')";
};

exports.ContactNumber = function(contact_no_id ,contact_no ,person_id ){
    return "INSERT INTO `Contact_no` (contact_no_id ,contact_no ,person_id ) VALUES ('" +
    contact_no_id + "', '" + contact_no + "', '" + person_id  + "')";
};
exports.Users = function(user_id  ,user_name  ,password ){
    return "INSERT INTO `Users`  (user_id,user_name,password ) VALUES ('" +
    user_id + "', '" + user_name  + "', '" + password + "')";
};
exports.Order = function(){
    return "SELECT Distinct(order_destination) FROM orders_test";  
};
exports.OrderID = function(order_destination){
    return "SELECT truck_route_id FROM orders_test where order_destination = '"+ order_destination +"'";  
};

exports.OneYearOrderDetails = function(){
    //return "SELECT * FROM item_test natural join order_date where ordered_date >= "+ year+'-04-01' + " and ordered_date < '" + year+'-07-01' +"'"; 
    //return "SELECT * FROM order_date";
    return "SELECT * FROM item_test natural join order_date where ordered_date between ? and ? ";
};
exports.OneYearOrderDetails_1 = function(year){
    return "SELECT * FROM item_test natural join order_date where ordered_date between ? and ? ", [year+'-04-01' ,year+'-07-01' ]; 
    //return "SELECT * FROM order_date";
};
/*exports.UserChange = function(playerId){
    return "SELECT * FROM e_event WHERE id = '"+playerId + "'";
};

var dateFormat = require('dateformat');
exports.UpdateUser = function(id,date,name,zero){
    var query = "UPDATE `e_event` SET";
    query += " `id` = '"+id+"',";
    query += " `e_start_date` = '"+dateFormat(date,"yyyy-mm-dd")+"',";
    query += " `e_name` = '"+name+"',";
    query += " `status` = '"+zero+"'";
    query += "  WHERE `e_event`.`id` = "+ id+"";
    return query;
};

exports.AddStudent = function(s_id,s_name){
    return "INSERT INTO `student` (Id,StudentName) VALUES ('" +
    s_id + "', '" + s_name + "')";
};
exports.AddCourse = function(c_id,c_name){
    return "INSERT INTO `course` (Id,CourseName) VALUES ('" +
    c_id + "', '" + c_name + "')";
};

exports.AddStudentCourse = function(s_id,c_id){
    return "INSERT INTO `studentcourse` (StudentId,CourseId) VALUES ('" +
    s_id + "', '" + c_id + "')";
};
*/

