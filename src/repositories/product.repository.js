const products = require('../data/products');

const findAll = () => {
    console.log("Map:", products);
    console.log("Map size:", products.size);

    return Array.from(products.values());
}

const create = () => {
    products.set(products.id, products);
    return products;
}

module.exports = {findAll, create}