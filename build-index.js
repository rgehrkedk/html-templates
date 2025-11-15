#!/usr/bin/env node

/**
 * build-index.js
 *
 * Automatisk opdatering af index.html med alle templates fra templates/ mappen.
 * Kører automatisk ved hver template-tilføjelse.
 */

const fs = require('fs');
const path = require('path');

// Konfiguration
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const INDEX_FILE = path.join(__dirname, 'index.html');

// Template metadata - kan udvides med metadata fra HTML-filerne
const templateMetadata = {
    'insurance-annual-letter.html': {
        title: 'Årsbrev - Forsikring',
        description: 'Professionelt årsbrev fra forsikringsselskab med smart brug af CSS accordions',
        featured: true
    },
    'insurance-annual-letter-swiss.html': {
        title: 'Årsbrev - Forsikring (Swiss Style)',
        description: 'Swiss/International Typographic Style variant med Helvetica, grid-baseret layout og ekstrem renhed',
        featured: true
    },
    'basic-notification.html': {
        title: 'Grundlæggende Notifikation',
        description: 'Simpel, ren skabelon til systemnotifikationer og advarsler',
        featured: false
    },
    'welcome-email.html': {
        title: 'Velkomstbesked',
        description: 'Professionel velkomstbesked til nye brugere eller kunder',
        featured: false
    },
    'security-alert.html': {
        title: 'Sikkerhedsadvarsel',
        description: 'Vigtig sikkerhedsnotifikation med tydelige handlingsemner',
        featured: false
    },
    'newsletter.html': {
        title: 'Nyhedsbrev',
        description: 'Multi-sektion nyhedsbrevsskabelon til regelmæssige opdateringer',
        featured: false
    }
};

/**
 * Ekstraher titel fra HTML fil hvis ikke defineret i metadata
 */
function extractTitleFromHTML(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const titleMatch = content.match(/<title>(.*?)<\/title>/i);
        if (titleMatch) {
            return titleMatch[1].trim();
        }
    } catch (error) {
        console.warn(`Kunne ikke læse ${filePath}:`, error.message);
    }
    return null;
}

/**
 * Generer et template card HTML
 */
function generateTemplateCard(filename, metadata) {
    const isFeatured = metadata.featured ? ' featured' : '';
    const title = metadata.title || extractTitleFromHTML(path.join(TEMPLATES_DIR, filename)) || filename.replace('.html', '');
    const description = metadata.description || 'HTML template';

    return `                <div class="template-card${isFeatured}">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <div class="template-links">
                        <a href="templates/${filename}" class="btn btn-primary">Se Skabelon</a>
                        <a href="templates/${filename}" download class="btn btn-secondary">Download</a>
                    </div>
                </div>`;
}

/**
 * Scan templates mappen og generer kort
 */
function generateTemplateCards() {
    const files = fs.readdirSync(TEMPLATES_DIR)
        .filter(file => file.endsWith('.html'))
        .sort();

    const cards = files.map(file => {
        const metadata = templateMetadata[file] || { featured: false };
        return generateTemplateCard(file, metadata);
    });

    return cards.join('\n\n');
}

/**
 * Opdater index.html med nye template cards
 */
function updateIndexHTML() {
    const indexContent = fs.readFileSync(INDEX_FILE, 'utf-8');
    const templateCards = generateTemplateCards();

    // Find start og slut markers for template grid
    const gridStart = indexContent.indexOf('<div class="template-grid">');
    const gridEnd = indexContent.indexOf('</div>', gridStart + 100); // Find næste </div> efter grid start

    if (gridStart === -1 || gridEnd === -1) {
        console.error('Kunne ikke finde template-grid i index.html');
        process.exit(1);
    }

    // Søg efter afsluttende </div> for template-grid sektionen
    let sectionEnd = gridEnd;
    let nestingLevel = 1;
    let currentPos = gridStart + '<div class="template-grid">'.length;

    while (nestingLevel > 0 && currentPos < indexContent.length) {
        const nextOpenDiv = indexContent.indexOf('<div', currentPos);
        const nextCloseDiv = indexContent.indexOf('</div>', currentPos);

        if (nextCloseDiv === -1) break;

        if (nextOpenDiv !== -1 && nextOpenDiv < nextCloseDiv) {
            nestingLevel++;
            currentPos = nextOpenDiv + 4;
        } else {
            nestingLevel--;
            sectionEnd = nextCloseDiv;
            currentPos = nextCloseDiv + 6;
        }
    }

    // Byg ny content
    const newContent =
        indexContent.substring(0, gridStart + '<div class="template-grid">'.length) +
        '\n' +
        templateCards +
        '\n            ' +
        indexContent.substring(sectionEnd);

    // Skriv opdateret fil
    fs.writeFileSync(INDEX_FILE, newContent, 'utf-8');
    console.log('✓ index.html opdateret med alle templates');
    console.log(`✓ Fundet ${Object.keys(templateMetadata).length} templates`);
}

// Kør script
try {
    updateIndexHTML();
} catch (error) {
    console.error('Fejl ved opdatering af index.html:', error);
    process.exit(1);
}
