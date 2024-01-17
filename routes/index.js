const express = require ('express');
const allroute = express.Router();
var authRouter =require('./user.auth.routes');
const userRouter = require('./user.crud');
const smsRoute = require('./user.sms.route');
const citizenRoutes = require('./citizen.routes');

allroute.use('/citizen' , citizenRoutes);
allroute.use('/user/auth',authRouter);
allroute.use('/user/crud',userRouter);
allroute.use('/user/sms',smsRoute);
module.exports = allroute;