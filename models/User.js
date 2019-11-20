const Sq = require('sequelize');
const db = require('../db');
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const User = db.define('user',{
    name:{
        type:Sq.STRING
    },
    email:{
        type:Sq.STRING,
    },
    photoUrl:{
        type:Sq.STRING
    }
},
{
    freezeTableName: true
});

module.exports = User;
