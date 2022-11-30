const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    expenses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Expense'
        }
    ]
});

const User = mongoose.model('User', userModel);
module.exports = User;