const express = require('express');
const app = express();
const cors = require('cors');
const databaseConnection = require('./util/database/database.util');
const mainRoute = require('./route/main.route');
const errorHandler = require('./controller/error/error.controller');


app.use(cors())
app.use(express.json());

app.use(mainRoute);

app.use(errorHandler);

databaseConnection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
}).catch((err) => {
    throw err;
})