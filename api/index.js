const express = require('express');
const cors = require('cors');
const apiRoutes = require('../server/src/routes/api');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Enable API routing for Vercel serverless functions
app.use('/api', apiRoutes);
app.use('/', apiRoutes);

module.exports = app;
