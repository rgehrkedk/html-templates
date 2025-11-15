#!/usr/bin/env node

/**
 * build-index.js
 *
 * Post-build script that copies templates to the dist folder
 * for deployment.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy templates directory to dist
const templatesDir = path.join(__dirname, 'templates');
const distTemplatesDir = path.join(__dirname, 'dist', 'templates');

// Create dist/templates if it doesn't exist
if (!fs.existsSync(distTemplatesDir)) {
  fs.mkdirSync(distTemplatesDir, { recursive: true });
}

// Copy all HTML files from templates/ to dist/templates/
const files = fs.readdirSync(templatesDir);
files.forEach(file => {
  if (file.endsWith('.html')) {
    const src = path.join(templatesDir, file);
    const dest = path.join(distTemplatesDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to dist/templates/`);
  }
});

console.log('✓ Templates copied to dist folder');
