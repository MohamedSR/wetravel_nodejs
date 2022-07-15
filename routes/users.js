var express = require('express');
var router = express.Router();

const conn = require("../config/db");

 router.post('/', function (req, res, next) {  
    const {name,phone,email,password,role,image} = req.body;
    let sqlQuery = 'INSERT INTO `users`( `name`, `phone`, `email`, `password`, `role`, `image`) VALUES (?,?,?,?,?,?)';
    conn.query(sqlQuery, [name,phone,email,password,role,image], function(error,result){
        if(error){
            console.log(error);
            return res.status(400).send("An error has occurede");
        }else{
            return res.status(200).send("user added successfully")
        }
    });    
});

router.get('/', function (req, res, next) {
    let sqlQuery = 'SELECT * FROM users';
    conn.query(sqlQuery, [], function(error,result){
        if(error){
            console.log(error);
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).json(result)
        }
    });
});
module.exports = router;
