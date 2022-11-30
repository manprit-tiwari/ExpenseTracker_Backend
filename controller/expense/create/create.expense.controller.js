const Expense = require("../../../model/expense/expense.model");

const createExpense = (req, res, next) => {
    const data = req.body;
    const userId = req.user._id;

    const expense = new Expense({ ...data, user: userId });
    expense.save().then((expenseData) => {
        if (!expenseData) {
            let error = new Error('Somenthing went wrong');
            throw error;
        }
        else {
            res.status(202).send(expenseData);
        }
    }).catch((err) => {
        if (!err.message) err.message = 'Something went wrong';
        next(err);
    })
}

module.exports = createExpense;