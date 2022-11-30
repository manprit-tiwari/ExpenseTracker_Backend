const createExpense = require("./create/create.expense.controller");
const getAllExpense = require("./getAll/getAll.expense.controller");

const expenseController = {
    create: createExpense,
    getAll: getAllExpense
}

module.exports = expenseController;