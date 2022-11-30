const { default: mongoose } = require("mongoose");
const User = require("../../../model/user/user.model");

const getUserById = (req, res, next) => {
    const { _id } = req.user;
    try {
        if (!_id) {
            let error = new Error('Id not provided');
            throw error;
        }
        else {
            User.findById(mongoose.Types.ObjectId(_id)).then((user) => {
                if (!user) {
                    let error = new Error('Invalid User');
                    error.status = 400;
                    throw error;
                }
                else {
                    res.status(200).send(user);
                }
            })
        }
    }
    catch (err) {
        if (!err.message) err.message = 'Something went wrong';
        throw err;
    }
}

module.exports = getUserById;