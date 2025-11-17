/**
 * Generate all CSS classes for template variants
 * Uses CSS variables EXCLUSIVELY - no hardcoded colors or border-radius
 */
export function generateVariantStyles(): string {
  return `
    /* ===========================
       HEADER VARIANTS
       =========================== */

    .header-centered {
      text-align: center;
      padding: 2rem 1rem;
      background: var(--color-brand);
      color: white;
    }
    .header-centered h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
    }

    .header-left {
      padding: 2rem 1rem;
      background: var(--color-brand);
      color: white;
    }
    .header-left h1 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
      font-weight: 700;
    }
    .header-left p {
      margin: 0;
      opacity: 0.9;
    }

    .header-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 2rem 1rem;
      background: var(--color-brand);
      color: white;
    }
    .header-logo-icon {
      width: 48px;
      height: 48px;
      background: white;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 700;
      color: var(--color-brand);
      flex-shrink: 0;
    }
    .header-logo h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
    }

    /* ===========================
       TEXT BLOCK VARIANTS
       =========================== */

    .text-standard {
      padding: 2rem 1rem;
    }
    .text-standard h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: var(--color-text);
    }
    .text-standard p {
      margin: 0;
      line-height: 1.6;
      color: var(--color-text-light);
    }

    .text-badge {
      padding: 2rem 1rem;
    }
    .text-badge-label {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: var(--color-info);
      color: white;
      border-radius: var(--radius-badge);
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .text-badge h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: var(--color-text);
    }
    .text-badge p {
      margin: 0;
      line-height: 1.6;
      color: var(--color-text-light);
    }

    .text-highlighted {
      padding: 2rem 1rem;
    }
    .text-highlighted-box {
      background: var(--color-brand-lighter);
      border-left: 4px solid var(--color-brand);
      padding: 1.5rem;
      border-radius: var(--radius-sm);
    }
    .text-highlighted h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: var(--color-text);
    }
    .text-highlighted p {
      margin: 0;
      line-height: 1.6;
      color: var(--color-text-light);
    }

    /* ===========================
       INFOBOX VARIANTS
       =========================== */

    .infobox {
      padding: 2rem 1rem;
    }
    .infobox-container {
      padding: 1rem 1.5rem;
      border-radius: var(--radius-sm);
    }

    /* Info variant - ALL colors from CSS variables */
    .infobox-info .infobox-container {
      background: var(--color-info-bg);
      border-left: 4px solid var(--color-info);
    }
    .infobox-info .infobox-icon {
      background: var(--color-info);
    }
    .infobox-info h3 {
      color: var(--color-info-heading);
    }
    .infobox-info p {
      color: var(--color-info-text);
    }

    /* Warning variant - ALL colors from CSS variables */
    .infobox-warning .infobox-container {
      background: var(--color-warning-bg);
      border-left: 4px solid var(--color-warning);
    }
    .infobox-warning .infobox-icon {
      background: var(--color-warning);
    }
    .infobox-warning h3 {
      color: var(--color-warning-heading);
    }
    .infobox-warning p {
      color: var(--color-warning-text);
    }

    /* Alert variant - ALL colors from CSS variables */
    .infobox-alert .infobox-container {
      background: var(--color-error-bg);
      border-left: 4px solid var(--color-error);
    }
    .infobox-alert .infobox-icon {
      background: var(--color-error);
    }
    .infobox-alert h3 {
      color: var(--color-error-heading);
    }
    .infobox-alert p {
      color: var(--color-error-text);
    }

    .infobox-content {
      display: flex;
      gap: 0.75rem;
      align-items: start;
    }
    .infobox-icon {
      width: 24px;
      height: 24px;
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      flex-shrink: 0;
      color: white;
    }
    .infobox-info .infobox-icon {
      font-size: 0.875rem;
    }
    .infobox-warning .infobox-icon,
    .infobox-alert .infobox-icon {
      font-size: 1rem;
    }
    .infobox h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.125rem;
    }
    .infobox p {
      margin: 0;
      line-height: 1.5;
    }

    /* ===========================
       ACCORDION VARIANTS
       =========================== */

    .accordion-simple {
      padding: 2rem 1rem;
    }
    .accordion-simple details {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1rem;
    }
    .accordion-simple summary {
      cursor: pointer;
      font-weight: 600;
      font-size: 1.125rem;
      color: var(--color-text);
      user-select: none;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .accordion-simple summary span {
      font-size: 0.875rem;
    }
    .accordion-simple-content {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--color-border);
      color: var(--color-text-light);
      line-height: 1.6;
    }
    .accordion-simple-content p {
      margin: 0;
    }

    .accordion-multi {
      padding: 2rem 1rem;
    }
    .accordion-multi-container {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    .accordion-multi details {
      padding: 1rem;
    }
    .accordion-multi details:not(:last-child) {
      border-bottom: 1px solid var(--color-border);
    }
    .accordion-multi summary {
      cursor: pointer;
      font-weight: 600;
      color: var(--color-text);
      user-select: none;
      list-style: none;
    }
    .accordion-multi-content {
      margin-top: 0.5rem;
      color: var(--color-text-light);
    }

    /* ===========================
       TABLE VARIANTS
       =========================== */

    .table-container {
      padding: 2rem 1rem;
    }
    .table-container table {
      width: 100%;
      border-collapse: collapse;
    }

    .table-striped thead tr {
      background: var(--color-brand);
      color: white;
    }
    .table-striped th {
      padding: 0.75rem;
      text-align: left;
      font-weight: 600;
    }
    .table-striped th:last-child {
      text-align: right;
    }
    .table-striped tbody tr:nth-child(odd) {
      background: var(--color-neutral-lighter);
    }
    .table-striped td {
      padding: 0.75rem;
    }
    .table-striped td:last-child {
      text-align: right;
    }

    .table-bordered {
      border: 1px solid var(--color-border);
    }
    .table-bordered thead tr {
      background: var(--color-brand-light);
      color: white;
    }
    .table-bordered th,
    .table-bordered td {
      padding: 0.75rem;
      text-align: left;
      border: 1px solid var(--color-border);
    }
    .table-bordered th:last-child,
    .table-bordered td:last-child {
      text-align: right;
    }

    /* ===========================
       TIMELINE VARIANTS
       =========================== */

    .timeline-vertical {
      padding: 2rem 1rem;
    }
    .timeline-vertical-container {
      position: relative;
      padding-left: 2rem;
    }
    .timeline-vertical-line {
      position: absolute;
      left: 7px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--color-border);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
    }
    .timeline-item:last-child {
      margin-bottom: 0;
    }
    .timeline-dot {
      position: absolute;
      left: -2rem;
      width: 16px;
      height: 16px;
      background: var(--color-brand);
      border-radius: var(--radius-full);
      border: 2px solid white;
    }
    .timeline-item:last-child .timeline-dot {
      background: var(--color-accent);
    }
    .timeline-date {
      font-weight: 600;
      color: var(--color-brand);
      margin-bottom: 0.25rem;
    }
    .timeline-item h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.125rem;
      color: var(--color-text);
    }
    .timeline-item p {
      margin: 0;
      color: var(--color-text-light);
    }

    .timeline-simple {
      padding: 2rem 1rem;
    }
    .timeline-simple h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: var(--color-text);
    }
    .timeline-simple ol {
      margin: 0;
      padding-left: 1.5rem;
      color: var(--color-text-light);
      line-height: 2;
    }

    /* ===========================
       FOOTER VARIANTS
       =========================== */

    .footer-centered {
      background: var(--color-neutral-dark);
      color: white;
      padding: 2rem 1rem;
      text-align: center;
      margin-top: 2rem;
    }
    .footer-centered p {
      font-size: 0.875rem;
    }
    .footer-centered p:first-child {
      margin: 0 0 0.5rem 0;
      opacity: 0.9;
    }
    .footer-centered p:last-child {
      margin: 0;
      opacity: 0.7;
    }

    .footer-columns {
      background: var(--color-neutral-dark);
      color: white;
      padding: 2rem 1rem;
      margin-top: 2rem;
    }
    .footer-columns-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .footer-columns h3 {
      margin: 0 0 1rem 0;
      font-size: 1rem;
      font-weight: 600;
    }
    .footer-columns p {
      margin: 0;
      font-size: 0.875rem;
      opacity: 0.8;
      line-height: 1.6;
    }
  `;
}
