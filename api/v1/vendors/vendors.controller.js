const vendorService = require('./vendors.service');

const addVendor = function(vendorData, done) {
    vendorService.addVendor(vendorData, done);
};

const findVendorByCode = function(vendorCode, done) {
    vendorService.findVendorByCode(vendorCode, done);
};

module.exports = {
    addVendor,
    findVendorByCode
};