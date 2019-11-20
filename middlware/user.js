const Sq = require('sequelize');
const User = require('../models/User');
var logger = require('morgan');
const getUsers = (req,res) => {
   User.findAll()
   .then(users => {
     res.status(200).json(users);
    })
    .catch(err => {
        console.log(err);
    })
}
function upsert(values, condition) {
    return User
        .findOne({ where: condition })
        .then(function(obj) {
           console.log('This is return object',obj);
            // update
            if(obj)
                return obj;
            // insert
            return User.create(values);
        })
}
const postUsers = (req, res) => {
  upsert({id:req.body.id, name:req.body.name, email:req.body.email, photoUrl:req.body.photoUrl},{id:req.body.id})
   .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        console.log(err);
    })
 
}


module.exports = { getUsers, postUsers }