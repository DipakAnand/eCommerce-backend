// const express = reqiure('express');
const getAllProducts = require('../services/product.service');

const getProducts = (req, res) => {
    const products = getAllProducts.getAllProducts();
    return res.status(200).json(products);
}

const createProduct = (req,res) => {
    const product = getAllProducts.createProduct(req.body);
    return res.status(201).json(product);
}

module.exports = {
    getProducts,
    createProduct
}