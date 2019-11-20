var express = require('express');
var router = express.Router();
var user = require('../middlware/user');

/* GET users listing. */
router.get('/add', function(req,res, next){
   res.send('Added successfully');
});

router.get('/', user.getUsers);
router.post('/', user.postUsers);


module.exports = router;
