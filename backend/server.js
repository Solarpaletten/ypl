/**
 * YPL CORE Backend Server
 * ========================
 * Main API server for YPL Platform
 * 
 * @author YPL GRUP INC
 * @version 1.0.0
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// ===================
// Middleware
// ===================

// Security headers
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: [
    'https://ypl.app',
    'https://dev.ypl.app',
    'http://localhost:3000',
  ],
  credentials: true,
}));

// Request logging
app.use(morgan('combined'));

// JSON body parser
app.use(express.json());

// ===================
// Routes
// ===================

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'ypl-core-api',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API info endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'YPL CORE API',
    version: '1.0.0',
    company: 'YPL GRUP INC',
    location: 'Florida, USA',
    endpoints: {
      health: '/health',
      api: '/api',
      status: '/api/status',
    },
  });
});

// Status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    platform: 'YPL CORE',
    status: 'pre-launch',
    phase: 'Phase 1: Core Setup',
    modules: {
      frontend: 'active',
      backend: 'active',
      database: 'pending',
      ai_engine: 'pending',
    },
  });
});

// ===================
// Error Handling
// ===================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
    status: 404,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
    status: 500,
  });
});

// ===================
// Server Start
// ===================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║                                            ║
║   🚀 YPL CORE API Server                   ║
║                                            ║
║   Status:  Running                         ║
║   Port:    ${PORT}                            ║
║   Version: 1.0.0                           ║
║                                            ║
║   Endpoints:                               ║
║   • GET /health                            ║
║   • GET /api                               ║
║   • GET /api/status                        ║
║                                            ║
║   © 2025 YPL GRUP INC                      ║
║                                            ║
╚════════════════════════════════════════════╝
  `);
});

module.exports = app;
