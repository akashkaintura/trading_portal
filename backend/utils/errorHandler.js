exports.handleError = (error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
};
