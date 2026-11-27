const AppError = require("../utils/AppError");

const validateProduct = (req, res, next) => {

    const { name, price, stock } = req.body || {};

    if (typeof name !== "string" || !name.trim()) {
        return next(
            new AppError("Product name is required", 400)
        );
    }

    if (!Number.isFinite(price) || price <= 0) {
        return next(
            new AppError("Price must be a positive number", 400)
        );
    }

    if (!Number.isInteger(stock) || stock < 0) {
        return next(
            new AppError("Stock must be a non-negative integer", 400)
        );
    }

    next();
};

module.exports = {
    validateProduct
};