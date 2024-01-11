var {SignUp}=require('../middlewares/user.auth');
var express = require('express');
var authRouter = express.Router();


authRouter.put('/signup', SignUp);

module.exports = authRouter;