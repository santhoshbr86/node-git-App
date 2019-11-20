const Sq = require('sequelize');
const Product = require('../models/Product');
var logger = require('morgan');

const getProducts = (req, res) => {
    Product.findAll()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        console.log(err);
    })
};
const postProduct = (req, res) => {
    Product.create({
        name:req.body.name,
        description:req.body.description,
        cost:req.body.cost,
        availableDate:Date(req.body.availableDate)
    }).then(product => {
        res.status(200).json(product);
      })
      .catch(err => {
          console.log(err);
      })
};
const getProduct = (req, res) => {
    console.log('rs',req.params.id);
    Product.findOne({where:{id:req.params.id}}).then(p => {
        console.log(p);
        res.status(200).json(p)
    })
    .catch(err => {
        console.log(err);
    })
};
module.exports = { getProducts, postProduct, getProduct }