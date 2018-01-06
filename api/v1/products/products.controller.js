const productService = require('./products.service');
const vendorCtrl = require('../vendors/vendors.controller');
const async = require('async');

const addNewProduct = function(newProduct, done) {
  productService.addNewProduct(newProduct, done);
}

const submitReview = function(productCode, reviewObj, done) {
	productService.submitNewReview(productCode, reviewObj, done);
}

const getProducts = function(done) {
  productService.getProducts(done);
};

const getFullProductObject = function(product, done) {
	let prod = product[0];
	vendorCtrl.findVendorByCode(prod.vendor, (err, res) => {
		prod.vendor = res[0];
		done(null, prod);
	});
};

const findProductByCode = function(productCode, done) {
	async.waterfall([
		productService.findProductByCode.bind(null, productCode),
		getFullProductObject
	], (err, result) => {
		if(err) {
			console.error('Error finding product by code, ERROR:', err);
			done(err);
			return;
		}
		done(null, result);
	});
}

module.exports = {
  addNewProduct,
  getProducts,
  submitReview,
  findProductByCode
}