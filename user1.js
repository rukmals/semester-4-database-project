const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/user');


exports.test = (req, res, next) => {
    User.findOne(req.field, req.value)
        .then(([row]) => {
            console.log(row);
        });
    res.send('ok');
}

exports.signIn = (req, res, next) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let result;

    console.log(username);
    console.log(password);


    User.findByUsername(username)
        .then(([row]) => {
            if (!row[0]) {
                console.log('No user found');
                const error = new Error('No user with this username found');
                error.statusCode = 401;
                throw error;
            }
            DBuserName = row[0]['user_name'];
            DBfirstName = row[0]['first_name'];
            DBlastName = row[0]['last_name'];
            DBno = row[0]['number'];
            DBstreet = row[0]['street_name'];
            DBcity = row[0]['city'];
            DBpassword = row[0]['password'];
            DBisActive = row[0]['is_active'];

            // userType;

            User.getUserType(username)
                .then(([row]) => {
                    let s = `userType('${username}')`;
                    console.log(row[0][s]);
                    return userType = row[0][s];
                })


            return bcrypt.compare(password, DBpassword);
        })
        .then(isEqual => {
            if (!isEqual) {
                console.log('Password not correct');
                const error = new Error('Password not correct');
                error.statusCode = 401;
                throw error;
            }

            const token = jwt.sign({ username: DBuserName, firstName: DBfirstName, lastName: DBlastName, number: DBno, street: DBstreet, city: DBcity },
                'SECRETKEY$2y$12$usOeEojSn2e0rNZcUc1S0uL.LSCsQPlRtfv4Xzp20b/Eu86rlPRpm',
                { expiresIn: '1h' }
            );
            res.status(200).json({
                token: token,
                username: DBuserName,
                firstName: DBfirstName,
                lastName: DBlastName,
                number: DBno,
                street: DBstreet,
                city: DBcity,
                userType: userType
            });
        })
        .catch(err => {
            console.log('Internal sever error');
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.register = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const useranme = req.body.username;
    const firstName = req.body.firstname;
    const lastName = req.body.lastName;
    const password = req.body.password;

    bcrypt.hash()
        .then(hashedPW => {
            user = new User(username, hashedPW, firstName, lastName);
            user.save();
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

    //create database entry

    let created = true;

    if (created == true) {
        res.status(201).json({
            message: "Registerd",

        });
    } else {
        res.status(200).json({
            message: "Registration unsuccessful"
        });
    }

}

exports.registerWholeSeller = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const nic = req.body.nic;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    const streetName = req.body.streetName;
    const no = req.body.no;
    const useranme = req.body.username;
    const password = req.body.password;
    const contactNo = req.body.contactNo;

    bcrypt.hash(password, 12)
        .then(hashedPW => {
            return User.saveWholeseller(nic, firstName, lastName, no, streetName, city, useranme, hashedPW, contactNo);
        })
        .then(result => {
            const token = jwt.sign({ username: useranme, firstName: firstName, lastName: lastName, number: no, street: streetName, city: city },
                'SECRETKEY$2y$12$usOeEojSn2e0rNZcUc1S0uL.LSCsQPlRtfv4Xzp20b/Eu86rlPRpm',
                { expiresIn: '1h' }
            );
            res.status(201).json({ message: "User registered succesfully", token: token, username: useranme, firstName: firstName, lastName: lastName, number: no, street: streetName, city: city, userType: "W" });
            console.log(result);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.registerRetailer = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const nic = req.body.nic;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    const streetName = req.body.streetName;
    const no = req.body.no;
    const useranme = req.body.username;
    const password = req.body.password;
    const contactNo = req.body.contactNo;

    bcrypt.hash(password, 12)
        .then(hashedPW => {
            return User.saveRetailer(nic, firstName, lastName, no, streetName, city, useranme, hashedPW, contactNo);
        })
        .then(result => {
            const token = jwt.sign({ username: useranme, firstName: firstName, lastName: lastName, number: no, street: streetName, city: city },
                'SECRETKEY$2y$12$usOeEojSn2e0rNZcUc1S0uL.LSCsQPlRtfv4Xzp20b/Eu86rlPRpm',
                { expiresIn: '1h' }
            );
            res.status(201).json({ message: "User registered succesfully", token: token, username: useranme, firstName: firstName, lastName: lastName, number: no, street: streetName, city: city, userType: "R" });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

exports.registerEndCustomer = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const nic = req.body.nic;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    const streetName = req.body.streetName;
    const no = req.body.no;
    const useranme = req.body.username;
    const password = req.body.password;
    const contactNo = req.body.contactNo;

    bcrypt.hash(password, 12)
        .then(hashedPW => {
            return User.saveEndCustomer(nic, firstName, lastName, no, streetName, city, useranme, hashedPW, contactNo);
        })
        .then(result => {
            const token = jwt.sign({ username: useranme, firstName: firstName, lastName: lastName, number: no, street: streetName, city: city },
                'SECRETKEY$2y$12$usOeEojSn2e0rNZcUc1S0uL.LSCsQPlRtfv4Xzp20b/Eu86rlPRpm',
                { expiresIn: '1h' }
            );
            res.status(201).json({ 
                message: "User registered succesfully", 
                token: token, 
                username: useranme, 
                firstName: firstName, 
                lastName: lastName, 
                number: no, street: 
                streetName, 
                city: city, 
                userType: "E" });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });


}


exports.registerStoreKeeper = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const nic = req.body.nic;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const city = req.body.city;
    const streetName = req.body.streetName;
    const no = req.body.no;
    const useranme = req.body.username;
    const password = req.body.password;
    const contactNo = req.body.contactNo;
    const storeID = req.body.storeID;

    bcrypt.hash(password, 12)
        .then(hashedPW => {
            return User.saveStoreKeeper(nic, firstName, lastName, no, streetName, city, useranme, hashedPW, contactNo, storeID);
        })
        .then(result => {
            const token = jwt.sign({
                username: useranme,
                firstName: firstName,
                lastName: lastName,
                number: no,
                street: streetName,
                city: city
            },
                'SECRETKEY$2y$12$usOeEojSn2e0rNZcUc1S0uL.LSCsQPlRtfv4Xzp20b/Eu86rlPRpm',
                { expiresIn: '1h' }
            );
            res.status(201).json({
                message: "User registered succesfully",
                token: token, username: useranme,
                firstName: firstName,
                lastName: lastName,
                number: no,
                street: streetName,
                city: city,
                userType: "S"
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}
exports.saveStore = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const id = req.body.id;
    const city = req.body.city;
    const street_name = req.body.street_name;
    const number = req.body.number;
    const capacity = req.body.capacity;

    bcrypt.hash(password, 12)
        .then(hashedPW => {
            return User.saveStore(id ,city, street_name , number , capacity);
        })
        .then(result => {
            const token = jwt.sign({
                username: useranme,
                firstName: firstName,
                lastName: lastName,
                number: no,
                street: streetName,
                city: city
            },
                'SECRETKEY$2y$12$usOeEojSn2e0rNZcUc1S0uL.LSCsQPlRtfv4Xzp20b/Eu86rlPRpm',
                { expiresIn: '1h' }
            );
            res.status(201).json({
                message: "User registered succesfully",
                token: token, username: useranme,
                firstName: firstName,
                lastName: lastName,
                number: no,
                street: streetName,
                city: city,
                userType: "S"
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

