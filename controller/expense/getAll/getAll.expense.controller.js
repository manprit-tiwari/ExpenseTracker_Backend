const { default: mongoose } = require("mongoose");
const Expense = require("../../../model/expense/expense.model");

const getAllExpense = (req, res, next) => {
    const { _id } = req.user;
    Expense.find({ user: mongoose.Types.ObjectId(_id) }).then((expenses) => {
        if (expenses) {
            res.status(200).send(expenses);
        }
        else {
            let error = new Error('Something went wrong');
            throw error;
        }
    }).catch((err) => {
        if (!err.message) err.message = 'Something went wrong';
        next(err);
    })
}

module.exports = getAllExpense;