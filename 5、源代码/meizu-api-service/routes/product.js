var express = require('express');
var router = express.Router();
var product = require("../data/product.data")


router.get('/', function(req, res, next) {
    res.jsonp(product)
});

module.exports = router;
