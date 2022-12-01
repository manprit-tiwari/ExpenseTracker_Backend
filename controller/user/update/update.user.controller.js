const { default: mongoose } = require("mongoose");
const User = require("../../../model/user/user.model");

const updateUser = (req, res, next) => {
    let userId = req.user._id;
    let data = req.body;
    User.updateOne({ _id: mongoose.Types.ObjectId(userId) }, { $set: data }).then((result) => {
        if (result.acknowledged) {
            if (result.modifiedCount > 0) {
                res.status(202).send({
                    "Message": "Profile updated successfully"
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
        next(err);
    })
}

module.exports = updateUser;