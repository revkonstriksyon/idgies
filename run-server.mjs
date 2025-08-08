import { register } from 'module';
import { pathToFileURL } from 'url';

// Register the TypeScript loader
register('tsx/esm', pathToFileURL('./'));

// Import and run the server
import('./server/index.ts');