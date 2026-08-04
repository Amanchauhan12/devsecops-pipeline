const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message:  'DevSecOps Pipeline App',
    author:   'Aman Chauhan',
    version:  '1.0.0',
    status:   'running',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
