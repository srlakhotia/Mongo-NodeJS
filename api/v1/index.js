const router = require('express').Router();

router.use('/vendors', require('./vendors'));
router.use('/products', require('./products'));

module.exports = router;