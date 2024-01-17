var express = require('express');
const { sendToAll, viewAll } = require('../controllers/user.sms.controller');

var smsRoute = express.Router();


smsRoute.get('/announcement', sendToAll);
smsRoute.get('/viewAll', viewAll)


module.exports = smsRoute;