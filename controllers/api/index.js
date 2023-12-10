// Import express and create a router
const express = require('express');
const router = express.Router();

// Import routes
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

// Configure routes
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

// Export the configured router
module.exports = router;