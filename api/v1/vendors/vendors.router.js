const router = require('express').Router();
const vendorCtrl = require('./vendors.controller');

router.post('/', (req,res) => {
    try {
        let newVendor = req.body;
        vendorCtrl.addVendor(newVendor, function(err, data) {
            if(err) {
                console.log('There was an error adding new vendor, ERROR: ', err);
                res.status(400).send({error: 'Something went wrong behind the scenes.'});
                return;
            }
            res.status(201).send(data);
            return;
        });
    } catch(err) {
        console.error('Unexpected error in adding new vendor, ERROR: ', err);
        res.status(500).send({error: 'Unexpected error, sorry!'});
        return;
    }
});

router.get('/:vendorCode', (req, res) => {
    try {
        let vendorCode = req.params.vendorCode;
        vendorCtrl.findVendorByCode(vendorCode, (err, data)=> {
            if(err) {
                console.error('Unexpected error in fetching vendor by vendor ID, ERROR: ', err);
                res.status(400).send({error: 'Unexpected error, sorry!'});
                return;
            }
            res.status(201).send(data);
            return;
        });
    } catch(err) {
        console.error('Unexpected error in fetching vendor by vendor ID, ERROR: ', err);
        res.status(500).send({error: 'Unexpected error, sorry!'});
        return;
    }
});

module.exports = router;