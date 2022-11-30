const getUserById = require("./getById/getById.user.controller");
const userLogin = require("./login/login.user.controller");
const userSignUp = require("./sign-up/sign-up.user.controller");


const userController = {
    login: userLogin,
    signUp: userSignUp,
    getById: getUserById
}

module.exports = userController;