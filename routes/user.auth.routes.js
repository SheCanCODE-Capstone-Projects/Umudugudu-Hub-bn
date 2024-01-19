var {SignUp, login, logout, forgotPassword, updatePassword}=require('../middlewares/user.auth');
var express = require('express');
var authRouter = express.Router();

authRouter.put('/signup', SignUp);
authRouter.get('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/forgotpassword',forgotPassword);
authRouter.post('/updatepassword', updatePassword);

module.exports = authRouter;