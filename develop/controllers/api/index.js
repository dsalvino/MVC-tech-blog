const router = require('express').Router();
const authorRoutes = require('./authorRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/author', authorRoutes);
router.use('/blog', blogRoutes);

module.exports = router;