const User = require("../../../model/user/user.model");
const JWT = require('jsonwebtoken');

const userSignUp = (req, res, next) => {
    const data = req.body;
    const user = new User(data);
    console.log(data);
    User.findOne({ userName: data.userName }).then(userData => {
        if (userData) {
            let error = new Error('User already exist');
            throw error;
        }
        else {
            user.save().then((userData) => {
                if (!userData) {
                    let error = new Error('Something went wrong');
                    throw error;
                }
                else {
                    const tokenPaylod = { userName: userData.userName, _id: user._id };
                    const token = JWT.sign(tokenPaylod, process.env.JWT_TOKEN);
                    res.status(202).send({
                        "Message": "Sign-Up Successfull",
                        "Token": token
                    })
                }
            }).catch((err) => {
                if (!err.message) err.message = 'Something went wrong';
                next(err);
            })
        }
    }).catch((err) => {
        if (!err.message) err.message = 'Something went wrong';
        next(err);
    })
    
}

module.exports = userSignUp;