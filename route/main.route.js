const express = require('express');
const middleware = require('../middleware/main.middleware');
const expenseRoute = require('./expense/expense.route');
const userRoute = require('./user/user.route');

const mainRoute = express.Router();

mainRoute.use('/user', userRoute);

mainRoute.use('/expense', middleware.authentication , expenseRoute)

// mainRoute.get();

module.exports = mainRoute;