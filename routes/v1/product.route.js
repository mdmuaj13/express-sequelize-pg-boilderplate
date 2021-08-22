const productRouter = require('express').Router();
const productController = require('../../controller/v1/product/product.controller')


productRouter.route('/')
    .get(productController.index)


module.exports = productRouter;