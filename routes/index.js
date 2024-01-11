var express = require('express');
var authRouter =require('./user.auth.routes');
const userRouter = require('./user.crud');

var allroute =express.Router();


allroute.use('/user/auth',authRouter);
allroute.use('/user/crud',userRouter);

module.exports =allroute;