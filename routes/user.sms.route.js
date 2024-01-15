var express = require('express');
const sendToAll = require('../controllers/user.sms.controller');

var smsRoute = express.Router();


smsRoute.get('/announcement',sendToAll );


module.exports = smsRoute;