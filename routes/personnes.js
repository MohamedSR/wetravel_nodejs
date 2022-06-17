var express = require('express');
var router = express.Router();

const conn = require("../config/db");

/**
 * @Path /personnes
*/

// url ==> /personnes/create?nom=test&prenom=test
router.get('/create', function (req, res, next) {
    const nom = req.query.nom;
    const { prenom } = req.query;
    const { age } = req.query;


    let sqlQuery = 'INSERT INTO `personne` (`nom`,`prenom`,`age`) VALUES (?,?,?)';
    conn.query(sqlQuery, [nom,prenom,age], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("personne added successfully")
        }
    });
});

router.get('/listPersonne', function (req, res, next) {

    let sqlQuery = 'SELECT * FROM `personne`';
    conn.query(sqlQuery, [], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).json(result)
        }
    });
});

// url ==> /personnes/update?id=1&nom=test&prenom=test
router.get('/update', function (req, res, next) {
    const { id, nom, prenom } = req.query;
    if(!id){
        return res.status(401).send("Id is required");
    }

    let sqlQuery = 'UPDATE `personnes` SET `nom`=?,`prenom`=? WHERE `id`=?';
    conn.query(sqlQuery, [nom, prenom, id], function(error,result){
        if(error){
            return res.status(400).send("An error has occured");
        }else{
            return res.status(200).send("Personne updated successfully ")
        }
    });
});

module.exports = router;
