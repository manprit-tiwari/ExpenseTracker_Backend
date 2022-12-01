const express = require('express');
const userController = require('../../controller/user/main.user.controller');
const middleware = require('../../middleware/main.middleware');
const userRoute = express.Router();

userRoute.post('/login', userController.login);

userRoute.post('/signUp', userController.signUp);

userRoute.get('/getById', middleware.authentication, userController.getById);

userRoute.get('/update', middleware.authentication, userController.update);

module.exports = userRoute