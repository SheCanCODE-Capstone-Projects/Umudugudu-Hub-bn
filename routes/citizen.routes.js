const express = require('express');
const {create,update, list,findByFullName} = require('../controllers/citizen.controller');
const citizenRoutes = express.Router();


citizenRoutes.post('/add', create);
citizenRoutes.put('/update', update);
citizenRoutes.get('/list', list);
citizenRoutes.get('/findByName', findByFullName); 


module.exports = citizenRoutes;