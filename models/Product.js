const Sq = require('sequelize');
const db = require('../db');
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const Product = db.define('products',{
    // image:{
    //   type:Sq.ARRAY(Sq.TEXT)
    // },
    name:{
        type:Sq.STRING
    },
    description:{
        type:Sq.STRING
    },
    cost:{
        type:Sq.NUMBER
    },
    availableDate:{
        type:Sq.DATE
    }
});

module.exports = Product;
