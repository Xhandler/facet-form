const { Router }  = require('express');

const router = new Router();

const financialRoutes = require('./financialRoutes');

router.use('/api/financial', financialRoutes);

module.exports = router;