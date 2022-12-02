const createExpense = require("./create/create.expense.controller");
const deleteExpense = require("./delete/delete.expense.controller");
const getAllExpense = require("./getAll/getAll.expense.controller");

const expenseController = {
    create: createExpense,
    getAll: getAllExpense,
    delete: deleteExpense
}

module.exports = expenseController;