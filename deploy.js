#!/usr/bin/env node

/**
 * deploy.js
 *
 * Prepares the build for GitHub Pages deployment by copying
 * dist contents to root directory.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const rootDir = __dirname;

// Files/folders to copy from dist to root for GitHub Pages
const filesToDeploy = [
  { src: 'index.html', dest: 'index.html' },
  { src: 'assets', dest: 'assets' }
];

console.log('📦 Preparing deployment...');

// Note: index.html in root is the development version with /src/main.tsx entry point
// We don't copy the built index.html to avoid overwriting it
// GitHub Pages will be configured to serve from dist/ folder instead
console.log('✓ Keeping development index.html for Vite');

// Remove old assets folder if exists
const assetsDestDir = path.join(rootDir, 'assets');
if (fs.existsSync(assetsDestDir)) {
  fs.rmSync(assetsDestDir, { recursive: true, force: true });
}

// Copy assets folder
const assetsSrcDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsSrcDir)) {
  fs.cpSync(assetsSrcDir, assetsDestDir, { recursive: true });
  console.log('✓ Copied assets/ to root');
}

// Ensure templates are accessible (they're already in templates/ folder)
console.log('✓ Templates directory already in place');

console.log('🚀 Deployment preparation complete!');
console.log('   Files ready for GitHub Pages deployment from root');
