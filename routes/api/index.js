const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/passwords', require('./passwords'));
router.use('/uploads', require('./uploads'));
router.use('/users', require('./users'));
router.use('/items', require('./items'));
router.use('/shops', require('./shops'));
router.use('/shoutouts', require('./shoutouts'));
router.use('/badges', require('./badges'));


module.exports = router;
