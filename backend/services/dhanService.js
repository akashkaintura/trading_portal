const axios = require('axios');
const config = require('../config/config');

exports.fetchPortfolioData = async () => {
    const response = await axios.get(`${config.dhanApiUrl}/portfolio`, {
        headers: { Authorization: `Bearer ${config.dhanApiKey}` }
    });
    return response.data;
};
