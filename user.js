const db = require('../util/database');

module.exports = class User {

    static findOne(field, value) {
        return db.query('SELECT * FROM person NATURAL JOIN users WHERE ?? = ?;', [field, value]);
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM person NATURAL JOIN users WHERE user_name = ?;', [username]);
    }

    static test() {
        return db.query('SELECT * FROM ??; SELECT * FROM ??;', ['users', 'worker']);
    }

    static saveRetailer(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveRetailer(?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static saveWholeseller(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveWholeSeller(?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static saveEndCustomer(NIC, firstName, lastName, no, streetName, city, username, password, contactNo) {
        return db.query('CALL saveEndCustomer (?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo]);
    }

    static saveStoreKeeper(NIC, firstName, lastName, no, streetName, city, username, password, contactNo, storeID) {
        return db.query('CALL  saveStoreKeeper(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',[NIC, firstName, lastName, city, streetName, no, username, password, contactNo, storeID]);
    }

    static getUserType(username) {
        return db.query('SELECT userType(?);',[username]);
    }
    static saveStore(id ,city, street_name , number , capacity){
       return db.query("INSERT INTO `store` (store_id,city,street_name,number,capacity) VALUES (?,?,?,?,?);",[id ,city, street_name , number , capacity]);
    }
    static saveTruckRoute (truck_route_id ,maximum_time, store_id){
        return db.query("INSERT INTO `Truck_route` (truck_route_id,maximum_time ,store_id) VALUES (?,?,?);",[truck_route_id ,maximum_time, store_id]);
    }
    static saveTruckRouteIntPoint (point_id ,point ,truck_route_id){
        return db.query("INSERT INTO `Truck_route_intermediate_point` (point_id ,point ,truck_route_id) VALUES (?,?,?);",[point_id ,point ,truck_route_id]);
    }
    static saveProduct(product_id, product_name , brand ,number, capacity_consumption ,unit_price){
        return db.query("INSERT INTO `Product` (product_id,product_name,brand,number,capacity_consumption,unit_price) VALUES (?,?,?,?,?,?);",[product_id, product_name , brand ,number, capacity_consumption ,unit_price]);
    }
    static savePerson(person_id,NIC_No , first_name , last_name, city ,street_name , num){
        return db.query("INSERT INTO `Person` (person_id,NIC_No,first_name,last_name,city,street_name,number,is_active) VALUES (?,?,?,?,?,?,?,?);",[ person_id,NIC_No , first_name , last_name, city ,street_name , number ,is_active]);
    }
    static saveContact(contact_no_id ,contact_no ,person_id ){
        return db.query("INSERT INTO `Contact_no` (contact_no_id ,contact_no ,person_id ) VALUES (?,?,?);",[ contact_no_id ,contact_no ,person_id ]);
    }
    static OneYearOrderDetails(start,end){
        return db.query("SELECT * FROM item natural join orders where ordered_date between ? and ? ;",[start,end]);
    }
    static Item(){
        return db.query("select * from item NATURAL JOIN orders_item where item_show.item_id = orders_show.item_id group by item_name order by count(*) desc limit 10");
    }

}