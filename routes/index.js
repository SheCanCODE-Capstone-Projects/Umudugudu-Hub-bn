const express = require ('express');
const allRoutes = express.Router();

const citizenRoutes = require('./citizen.routes');

allRoutes.use('/citizen' , citizenRoutes);

module.exports = allRoutes;