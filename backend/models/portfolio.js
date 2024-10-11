const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    userId: String,
    assets: Array,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
