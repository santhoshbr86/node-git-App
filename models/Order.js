const Sq = require('sequelize');
const db = require('../db');
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const Order = db.define('orders',{
    productId:{
        type:Sq.STRING
    },
    quantity:{
        type:Sq.NUMBER
    },
    cost:{
        type:Sq.NUMBER
    },
    orderDate:{
        type:Sq.DATE
    }
});

module.exports = Product;
