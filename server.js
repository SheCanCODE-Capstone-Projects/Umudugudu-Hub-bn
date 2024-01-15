const express = require('express');
const mongoose = require('mongoose');
const allroute= require('./routes');
require('dotenv').config();
var app = express();
const port=process.env.PORT || 4000;

app.use(express.json());
app.use('/api/UH/v1',allroute);

app.listen(port,()=>{
    mongoose.connect(process.env.MONGO_URL);
    
    console.log(`server listening on port  ${process.env.PORT} !!`);

})