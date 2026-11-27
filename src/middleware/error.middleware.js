const errorHandler = (err, req, res, next) => {

    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;

    console.error(err.stack);

    return res.status(statusCode).json({
        success: false,
        message: err.isOperational
            ? err.message
            : statusCode === 400
                ? "Invalid request"
                : "Internal server error"
    });
};

module.exports = errorHandler;