const authentication = require("./authentication/authentication.middleware");

const middleware = {
    authentication: authentication
}

module.exports = middleware;