const express = require('express');
const expenseController = require('../../controller/expense/main.expense.controller');
const expenseRoute = express.Router();

expenseRoute.post('/create', expenseController.create);

expenseRoute.get('/getAll', expenseController.getAll);

expenseRoute.delete('/delete/:Id', expenseController.delete);

module.exports = expenseRoute;