const VendorModel = require('./vendors.entity');

const addVendor = function(vendorData, done) {
    let vendor = new VendorModel();
    vendor.name = vendorData.name;
    vendor.code = vendorData.code;
    vendor.contact = vendorData.contact;
    vendor.rank = vendorData.rank;

    vendor.save((err, savedDoc) => {
        if(err) {
            console.error("Error in adding vendor, ERROR:", err);
            done(err);
        } else {
            done(null, savedDoc);
            return;
        }
    });
};

const findVendorByCode = function(vendorCode, done) {
    let query = { "code": vendorCode };
    
    VendorModel
        .find(query)
        .exec((err, colln) => {
            if(err) {
                console.error("Error in finding vendor", vendorCode," ERROR:", err);
                done(err);
            } else {
                done(null, colln);
                return;
            }
        });
};

module.exports = {
    addVendor,
    findVendorByCode
}