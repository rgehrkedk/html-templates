import { TemplateSection, ColorPalette, StyleType } from '../types/builder.types';
import { VARIANT_TEMPLATES } from '../data/variants';
import { generateCSSVariables } from './colorGenerator';

const STYLE_BASE_CSS: Record<StyleType, string> = {
  classic: `
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background: #f9fafb;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    * {
      box-sizing: border-box;
    }
  `,
  swiss: `
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      background: #ffffff;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
    }
    * {
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 {
      font-weight: 500;
      letter-spacing: -0.02em;
    }
  `,
};

/**
 * Render complete HTML template from sections
 */
export function renderTemplate(
  sections: TemplateSection[],
  palette: ColorPalette,
  style: StyleType
): string {
  const cssVariables = generateCSSVariables(palette);
  const baseCSS = STYLE_BASE_CSS[style];

  const sortedSections = [...sections].sort((a, b) => a.order - b.order);
  const sectionsHTML = sortedSections
    .map((section) => VARIANT_TEMPLATES[section.variant] || '')
    .join('\n');

  const buildDate = new Date().toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="generator" content="HTML Template Builder">
  <meta name="template-style" content="${style}">
  <meta name="template-status" content="builded">
  <meta name="template-build-date" content="${buildDate}">
  <title>Generated Template</title>
  <style>
    ${cssVariables}

    ${baseCSS}

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .container {
        margin: 0;
      }
      section {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
      }
    }

    /* Details/Summary styling for accordion */
    details > summary {
      list-style: none;
    }
    details > summary::-webkit-details-marker {
      display: none;
    }
    details[open] > summary span:first-child {
      transform: rotate(90deg);
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="container">
    ${sectionsHTML}
  </div>
</body>
</html>`;
}

/**
 * Generate filename for download
 */
export function generateFilename(style: StyleType): string {
  const timestamp = new Date().toISOString().split('T')[0];
  return `template-${style}-${timestamp}.html`;
}
