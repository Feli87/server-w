const router = require('express').Router();
const userRouter = require('./users/userRoutes');

// router middleware to Routes
router.use('/', userRouter);

module.exports = router;
