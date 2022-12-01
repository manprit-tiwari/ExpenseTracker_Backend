const getUserById = require("./getById/getById.user.controller");
const userLogin = require("./login/login.user.controller");
const userSignUp = require("./sign-up/sign-up.user.controller");
const updateUser = require("./update/update.user.controller");


const userController = {
    login: userLogin,
    signUp: userSignUp,
    getById: getUserById,
    update: updateUser
}

module.exports = userController;