const { default: mongoose } = require("mongoose");
const Expense = require("../../../model/expense/expense.model");

const deleteExpense = (req, res, next) => {
    let Id = req.params.Id;
    try {
        if (!Id) {
            let error = new Error('Id not provided!');
            throw error;
        }
        else {
            Expense.deleteOne({ _id: mongoose.Types.ObjectId(Id) }).then((result) => {
                if (result.acknowledged) {
                    if (result.deletedCount > 0) {
                        res.status(200).send({
                            "Message": "Expense deleted successfully"
                        })
                    }
                    else {
                        let error = new Error('Something went wrong');
                        throw error;
                    }
                }
                else {
                    let error = new Error('Something went wrong');
                    throw error;
                }
            }).catch((err) => {
                if (!err.message) err.message = 'Something went wrong';
                if (!err.status) err.status = 400;
                next(err);
            })
        }
    }
    catch (err) {
        if (!err.message) err.message = 'Something went wrong';
        if (!err.status) err.status = 400;
        throw err;
    }
}

module.exports = deleteExpense;