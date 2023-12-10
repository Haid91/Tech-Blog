const express = require('express');
const router = express.Router();

// Importing route modules
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Mounting route modules
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Exporting the configured router
module.exports = router;