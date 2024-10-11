const dhanService = require('../services/dhanService');

exports.getPortfolio = async (req, res) => {
    try {
        const portfolio = await dhanService.fetchPortfolioData();
        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch portfolio data' });
    }
};
