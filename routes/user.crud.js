const express = require('express');
const { addUser, deleteUser } = require('../controllers/user.controller');
const userRouter = express.Router();
userRouter.post('/add',addUser);
userRouter.delete('/delete',deleteUser);
module.exports = userRouter;