const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3000;

// ✅ Add metrics tracking
let totalRequests  = 0;
let successCount   = 0;
let errorCount     = 0;
const startTime    = Date.now();

// Middleware to count all requests
app.use((req, res, next) => {
  totalRequests++;
  res.on('finish', () => {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      successCount++;
    } else {
      errorCount++;
    }
  });
  next();
});

app.get('/', (req, res) => {
  res.json({
    message:   'DevSecOps Pipeline App',
    author:    'Aman Chauhan',
    version:   '1.0.0',
    status:    'running',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({
    status:  'healthy',
    uptime:  process.uptime(),
    memory:  process.memoryUsage(),
  });
});

// ✅ Metrics endpoint for Prometheus
app.get('/metrics', (req, res) => {
  const uptimeSeconds = (Date.now() - startTime) / 1000;
  const metrics = `
# HELP http_requests_total Total HTTP requests
# TYPE http_requests_total counter
http_requests_total ${totalRequests}

# HELP http_success_total Successful requests
# TYPE http_success_total counter
http_success_total ${successCount}

# HELP http_error_total Error requests
# TYPE http_error_total counter
http_error_total ${errorCount}

# HELP app_uptime_seconds App uptime in seconds
# TYPE app_uptime_seconds gauge
app_uptime_seconds ${uptimeSeconds}

# HELP nodejs_memory_heap_used Heap memory used
# TYPE nodejs_memory_heap_used gauge
nodejs_memory_heap_used ${process.memoryUsage().heapUsed}
`;
  res.set('Content-Type', 'text/plain');
  res.send(metrics.trim());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
