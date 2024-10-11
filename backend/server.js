const app = require('./app');
const config = require('./config/config');
const WebSocket = require('ws');
const dhanService = require('./services/dhanService'); // Import the Dhan service

// Start Express server
const server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

// WebSocket server setup
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('New client connected');

    // Periodically send portfolio updates to client
    const interval = setInterval(async () => {
        try {
            // Fetch portfolio data from the Dhan API
            const portfolioData = await dhanService.fetchPortfolioData();

            // Send the fetched data to the client
            ws.send(JSON.stringify({ event: 'portfolioUpdate', data: portfolioData }));
        } catch (error) {
            console.error('Error fetching portfolio data:', error);
        }
    }, 5000); // Every 5 seconds

    ws.on('close', () => {
        clearInterval(interval);
        console.log('Client disconnected');
    });
});
