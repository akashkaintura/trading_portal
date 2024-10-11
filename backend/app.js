const express = require('express');
const portfolioRoutes = require('./routes/profileRoutes');
const errorHandler = require('./utils/errorHandler');
const server = require('./server');
const app = express();

app.use(express.json());
app.use('/api/portfolio', portfolioRoutes);
app.use(errorHandler.handleError);

module.exports = app;
