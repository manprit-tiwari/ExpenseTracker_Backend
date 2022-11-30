const JWT = require('jsonwebtoken');

const authentication = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        let token = authorization.trim().split('Bearer')[1].trim();
        const decode = JWT.verify(token, process.env.JWT_TOKEN);
        if (decode) {
            console.log(decode);
            req.user = decode;
            next();
        }
        else {
            let error = new Error('Unauthorized User');
            throw error;
        }
    }
    catch (err) {
        if (!err.message) err.message = 'Unauthorized';
        if (!err.status) err.status = 401;
        throw err;
    }
}

module.exports = authentication;