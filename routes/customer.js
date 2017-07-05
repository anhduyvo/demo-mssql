// Dependencies
var express = require('express');
var router = express.Router();
var q = require('q');
var auth = require('../config/auth');
var constant = require('../config/constant');
var dbContext = require('../config/dbContext');
var errorHelper = require('../config/errorHelper');
var productService = require('../services/productService');

// Router
router.get('/itemspaging/:id', function (request, response, next) {
    var pageIndex = request.params.id;
    if (pageIndex == undefined) pageIndex = 0;
    
	var ctx = {};
    dbContext.getConnection().then(function (result) {
		ctx = result;
        return productService.getProductsPaging(ctx, pageIndex);
	}).then(function (result) {
		var products = result[0];
		response.status(200).json(products);      
    }).catch(function (error) {        
        next(error);
    }).done(function () {
		ctx.release();
    });    
});

router.get('/items/:id', function (request, response, next) {
	var productId = request.params.id;
	
	var ctx = {};
	dbContext.getConnection().then(function (result) {
		ctx = result;
		return productService.getProductById(ctx, productId);
	}).then(function (products) {
		if (products.length == 0) {
            response.status(404).json(errorHelper.Error_Not_Exist_ProductId);
		} else {
			response.status(200).json(products[0]);
		}
	}).catch(function (error) {        
        next(error);
	}).done(function () {
		ctx.release();
	});
});

router.get('/itemsbrand/:id', function (request, response, next) {
    var brandId = request.params.id;

    var ctx = {};
    dbContext.getConnection().then(function (result) {
        ctx = result;
        return productService.getProductsByBrand(ctx, brandId);
    }).then(function (products) {
        response.status(200).json(products)
    }).catch(function (error) {        
        next(error);
    }).done(function () {
        ctx.release();
    });
});

// return Router
module.exports = router;