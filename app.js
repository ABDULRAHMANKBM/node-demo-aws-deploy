const express = require('express');
require('dotenv').config();

const app = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AWS EC2 node-demo is running success auto github');
});
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'aws-node-demo',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, HOST, () => {
  console.log(`aws-node-demo listening on ${HOST}:${PORT}`);
});
