const route = require('express').Router();
const productRouter = require('./product.route')

route.use("/products", productRouter);

module.exports = route;