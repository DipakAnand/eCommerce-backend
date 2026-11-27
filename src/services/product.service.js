const getRepo = require('../repositories/product.repository');

const getAllProducts = () => {
     return getRepo.findAll();
}

let nextId = 4;

const createProduct = (data) => {
    const product = {
        id: nextId++,
        name: data.name,
        price: data.price,
        stock: data.stock
    }
    return getRepo.create(product);
}

module.exports = { getAllProducts, createProduct};