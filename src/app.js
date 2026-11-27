const express = require('express');
const productsRoute = require('./routes/products.route');
const errorHandler = require("./middleware/error.middleware");

const app = express();
app.use(express.json());
app.use('/products',productsRoute);
app.use(errorHandler);

module.exports = app;
