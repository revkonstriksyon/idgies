import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting development servers...');

// Start the backend server
const serverProcess = spawn('node', ['simple-start.js'], {
  stdio: 'inherit',
  env: { 
    ...process.env, 
    NODE_ENV: 'development' 
  }
});

// Start the Vite frontend development server
const viteProcess = spawn('npx', ['vite', '--port=3000'], {
  stdio: 'inherit',
  cwd: path.join(__dirname, 'client'),
  env: {
    ...process.env,
    NODE_ENV: 'development'
  }
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down development servers...');
  serverProcess.kill();
  viteProcess.kill();
  process.exit(0);
});

serverProcess.on('error', (error) => {
  console.error('Server process error:', error);
});

viteProcess.on('error', (error) => {
  console.error('Vite process error:', error);
});

console.log('Backend server running on port 5000');
console.log('Frontend development server will run on port 3000');