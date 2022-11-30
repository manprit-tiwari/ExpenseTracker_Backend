const User = require("../../../model/user/user.model");
const JWT = require('jsonwebtoken');

const userLogin = (req, res, next) => {
    const { userName, password } = req.body;
    User.findOne({ userName: userName }).then((user) => {
        if (!user) {
            let error = new Error('Invalid Username!');
            throw error;
        }
        else {
            if (user.password === password) {
                const tokenPaylod = { userName: userName, _id: user._id };
                const token = JWT.sign(tokenPaylod, process.env.JWT_TOKEN);

                res.status(202).send({
                    "Message": "Login Successfull",
                    'auth_token': token
                })
            }
            else {
                let error = new Error('Invalid password!');
                throw error;
            }
        }
    }).catch((err) => {
        if(!err.message) err.message = 'Something went wrong!';
        next(err);
    })
}

module.exports = userLogin;