var express = require('express');
var router = express.Router();

const conn = require("../config/db");

/**
 * @Path /restaurants
*/

// url ==> /restaurants
router.post('/', function (req, res, next) {
    const {name,capacity,adresse,ville,pays,image} = req.body;
    console.log(name,capacity,adresse,ville,pays,image)
    let sqlQuery = 'INSERT INTO `restaurants` (`name`, `capacity`, `adresse`, `ville`, `pays`, `image`) VALUES (?,?,?,?,?,?)';
    conn.query(sqlQuery, [name,capacity,adresse,ville,pays,image], function (error, result) {
            if (error) {
                console.log(error)
                return res.status(400).send(error);
            } else {
                return res.status(200).json({message:"restaurants added successfully"})
            }
        });
});

router.get('/', function (req, res, next) {

    let sqlQuery = 'SELECT * FROM `restaurants`';
    conn.query(sqlQuery, [], function (error, result) {
        if (error) {
            return res.status(400).send(error);
        } else {
            return res.status(200).json(result)
        }
    });
});

module.exports = router;
