#!/usr/bin/env node

// Development startup script that replaces the broken tsx setup
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Restaurant Idgie development server...');

// Start the JavaScript server (our working backend)
const serverProcess = spawn('node', ['simple-start.js'], {
  stdio: 'pipe',
  env: { 
    ...process.env, 
    NODE_ENV: 'development',
    PORT: '5000'
  }
});

// Log server output
serverProcess.stdout.on('data', (data) => {
  process.stdout.write(`[SERVER] ${data}`);
});

serverProcess.stderr.on('data', (data) => {
  process.stderr.write(`[SERVER] ${data}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🔄 Shutting down development server...');
  serverProcess.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  serverProcess.kill();
  process.exit(0);
});

serverProcess.on('error', (error) => {
  console.error('❌ Server process error:', error);
  process.exit(1);
});

serverProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ Server process exited with code ${code}`);
    process.exit(code);
  }
});

console.log('✅ Development server starting on http://localhost:5000');
console.log('📡 API endpoints available at http://localhost:5000/api/*');
console.log('⏹️  Press Ctrl+C to stop');