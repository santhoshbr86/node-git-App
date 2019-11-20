var express = require('express');
var router = express.Router();
var product = require('../middlware/product');

/* GET users listing. */
// router.get('/add', function(req,res, next){
//    res.send('Added successfully');
// });

router.get('/', product.getProducts);
router.post('/', product.postProduct);
router.get('/:id', product.getProduct);

module.exports = router;
