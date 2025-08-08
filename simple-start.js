// Simple start script to run the JavaScript server
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import('./server/index.js').catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});