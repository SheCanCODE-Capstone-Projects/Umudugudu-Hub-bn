var {SignUp, login}=require('../middlewares/user.auth');
var express = require('express');
var authRouter = express.Router();


authRouter.put('/signup', SignUp);
authRouter.get('/login', login);
// authRouter.get('/login', login);

module.exports = authRouter;