const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/passwords', require('./passwords'));
router.use('/uploads', require('./uploads'));
router.use('/users', require('./users'));
router.use('/items', require('./items'));
router.use('/shoptypes', require('./shoptypes'));
router.use('/communityidentities', require('./communityidentities'));
router.use('/ownershopphotos', require('./ownershopphotos'));



module.exports = router;
