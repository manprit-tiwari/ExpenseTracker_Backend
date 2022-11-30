const mongoose = require('mongoose');

const connectDatabase = () => {
    return mongoose.connect(process.env.MONGODB_URI);
}

module.exports = connectDatabase;