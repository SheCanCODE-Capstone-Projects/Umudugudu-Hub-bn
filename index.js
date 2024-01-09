const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var app = express();
const port=process.env.PORT || 4000;

app.listen(port,()=>{
    mongoose.connect(process.env.MONGO_URL);
    
    console.log(`server listening on port  ${process.env.PORT} !!`);

})