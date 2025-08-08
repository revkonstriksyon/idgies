#!/usr/bin/env node

// Simple TypeScript runner for Replit environment
const { spawn } = require('child_process');
const path = require('path');

// Get the TypeScript file from command line arguments
const tsFile = process.argv[2];
if (!tsFile) {
  console.error('Usage: node run-ts.js <typescript-file>');
  process.exit(1);
}

// Use npx to run tsx if available, otherwise fallback to ts-node
const runCommand = (cmd, args) => {
  const child = spawn(cmd, args, {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: process.env.NODE_ENV || 'development' }
  });

  child.on('error', (err) => {
    console.error('Failed to start process:', err);
    process.exit(1);
  });

  child.on('exit', (code) => {
    process.exit(code);
  });
};

// Try tsx first, then ts-node, then fallback to compilation + node
runCommand('npx', ['tsx', tsFile]);