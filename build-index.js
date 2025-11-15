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

// Template metadata med branche og stil tags
const templateMetadata = {
    'insurance-annual-letter.html': {
        title: 'Årsbrev - Forsikring (Classic)',
        description: 'Klassisk forsikringsbrev med professionelt layout og CSS accordions',
        industry: 'forsikring',
        style: 'classic'
    },
    'insurance-annual-letter-editorial.html': {
        title: 'Årsbrev - Forsikring (Editorial)',
        description: 'Professionelt årsbrev med editorial design, serif typografi og illustrative elementer',
        industry: 'forsikring',
        style: 'editorial'
    },
    'insurance-annual-letter-swiss.html': {
        title: 'Årsbrev - Forsikring (Swiss)',
        description: 'Swiss/International Typographic Style med Helvetica, grid-baseret layout og ekstrem renhed',
        industry: 'forsikring',
        style: 'swiss'
    },
    'insurance-annual-letter-utility.html': {
        title: 'Årsbrev - Forsikring (Utility)',
        description: 'Utility-first design med funktionel æstetik, klar hierarki og maksimal læsbarhed',
        industry: 'forsikring',
        style: 'utility'
    },
    'pension-fripolice-notice.html': {
        title: 'Fripolice Notifikation - Pension',
        description: 'Pensionsinformation med soft illustrated edges, decorative marginer og farvede accordions',
        industry: 'pension',
        style: 'soft-illustrated'
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
 * Generer tag navn baseret på stil
 */
function getStyleTagName(style) {
    const styleNames = {
        'editorial': 'Editorial',
        'swiss': 'Swiss',
        'utility': 'Utility',
        'soft-illustrated': 'Soft Illustrated',
        'classic': 'Classic'
    };
    return styleNames[style] || style;
}

/**
 * Generer tag navn baseret på branche
 */
function getIndustryTagName(industry) {
    const industryNames = {
        'forsikring': 'Forsikring',
        'pension': 'Pension'
    };
    return industryNames[industry] || industry;
}

/**
 * Generer et template card HTML med den nye struktur
 */
function generateTemplateCard(filename, metadata) {
    const title = metadata.title || extractTitleFromHTML(path.join(TEMPLATES_DIR, filename)) || filename.replace('.html', '');
    const description = metadata.description || 'HTML template';
    const industry = metadata.industry || 'general';
    const style = metadata.style || 'classic';

    return `                <article class="template-card" data-industry="${industry}" data-style="${style}">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <div class="template-tags">
                        <span class="tag industry">${getIndustryTagName(industry)}</span>
                        <span class="tag style">${getStyleTagName(style)}</span>
                    </div>
                    <div class="template-links">
                        <a href="templates/${filename}" class="btn btn-primary">Se Skabelon</a>
                        <a href="templates/${filename}" download class="btn btn-secondary">Download</a>
                    </div>
                </article>`;
}

/**
 * Scan templates mappen og generer kort
 */
function generateTemplateCards() {
    const files = fs.readdirSync(TEMPLATES_DIR)
        .filter(file => file.endsWith('.html'))
        .sort();

    const cards = files.map(file => {
        const metadata = templateMetadata[file];
        if (!metadata) {
            console.warn(`⚠ Ingen metadata for ${file} - springer over`);
            return null;
        }
        return generateTemplateCard(file, metadata);
    }).filter(Boolean);

    return cards.join('\n\n');
}

/**
 * Opdater index.html med nye template cards
 */
function updateIndexHTML() {
    const indexContent = fs.readFileSync(INDEX_FILE, 'utf-8');
    const templateCards = generateTemplateCards();

    // Find start og slut markers for template grid med ny struktur
    const gridStartPattern = /<div class="template-grid"[^>]*>/;
    const gridMatch = indexContent.match(gridStartPattern);

    if (!gridMatch) {
        console.error('Kunne ikke finde template-grid i index.html');
        process.exit(1);
    }

    const gridStart = indexContent.indexOf(gridMatch[0]);

    // Find afsluttende </div> for template-grid ved at finde empty-state div
    const emptyStateStart = indexContent.indexOf('<div class="empty-state"', gridStart);

    if (emptyStateStart === -1) {
        console.error('Kunne ikke finde empty-state div');
        process.exit(1);
    }

    // Gå tilbage til det foregående </div> før empty-state
    let sectionEnd = indexContent.lastIndexOf('</div>', emptyStateStart);

    if (sectionEnd === -1 || sectionEnd <= gridStart) {
        console.error('Kunne ikke finde afsluttende div for template-grid');
        process.exit(1);
    }

    // Byg ny content
    const newContent =
        indexContent.substring(0, gridStart + gridMatch[0].length) +
        '\n' +
        templateCards +
        '\n            ' +
        indexContent.substring(sectionEnd);

    // Skriv opdateret fil
    fs.writeFileSync(INDEX_FILE, newContent, 'utf-8');
    console.log('✓ index.html opdateret med alle templates');

    const templateCount = fs.readdirSync(TEMPLATES_DIR)
        .filter(file => file.endsWith('.html')).length;
    console.log(`✓ Fundet ${templateCount} templates`);
}

// Kør script
try {
    updateIndexHTML();
} catch (error) {
    console.error('Fejl ved opdatering af index.html:', error);
    process.exit(1);
}
