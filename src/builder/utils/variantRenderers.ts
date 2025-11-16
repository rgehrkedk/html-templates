/**
 * Variant renderers that generate HTML from section data
 */

type RenderFunction = (data: Record<string, any>) => string;

export const VARIANT_RENDERERS: Record<string, RenderFunction> = {
  // Header variants
  'header-centered': (data) => `
    <header style="text-align: center; padding: 2rem 1rem; background: var(--color-brand); color: white;">
      <h1 style="margin: 0; font-size: 2rem; font-weight: 700;">${data.title || 'Company Name'}</h1>
    </header>
  `,

  'header-left': (data) => `
    <header style="padding: 2rem 1rem; background: var(--color-brand); color: white;">
      <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 700;">${data.title || 'Company Name'}</h1>
      <p style="margin: 0; opacity: 0.9;">${data.tagline || 'Your trusted partner'}</p>
    </header>
  `,

  'header-logo': (data) => `
    <header style="display: flex; align-items: center; gap: 1rem; padding: 2rem 1rem; background: var(--color-brand); color: white;">
      <div style="width: 48px; height: 48px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">
        ${data.logo || '🏢'}
      </div>
      <h1 style="margin: 0; font-size: 2rem; font-weight: 700;">${data.title || 'Company Name'}</h1>
    </header>
  `,

  // Text block variants
  'text-standard': (data) => `
    <section style="padding: 2rem 1rem;">
      <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">${data.heading || 'Section Title'}</h2>
      <p style="margin: 0; line-height: 1.6; color: var(--color-text-light);">
        ${data.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </p>
    </section>
  `,

  'text-badge': (data) => `
    <section style="padding: 2rem 1rem;">
      <div style="display: inline-block; padding: 0.25rem 0.75rem; background: var(--color-info); color: white; border-radius: 12px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
        ${data.badge || 'NEW'}
      </div>
      <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">${data.heading || 'Section Title'}</h2>
      <p style="margin: 0; line-height: 1.6; color: var(--color-text-light);">
        ${data.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      </p>
    </section>
  `,

  'text-highlighted': (data) => `
    <section style="padding: 2rem 1rem;">
      <div style="background: var(--color-brand-lighter); border-left: 4px solid var(--color-brand); padding: 1.5rem; border-radius: 4px;">
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">${data.heading || 'Highlighted Section'}</h2>
        <p style="margin: 0; line-height: 1.6; color: var(--color-text-light);">
          ${data.content || 'This content is highlighted to draw attention.'}
        </p>
      </div>
    </section>
  `,

  // InfoBox variants
  'infobox-info': (data) => `
    <section style="padding: 2rem 1rem;">
      <div style="background: #dbeafe; border-left: 4px solid var(--color-info); padding: 1rem 1.5rem; border-radius: 4px;">
        <div style="display: flex; gap: 0.75rem; align-items: start;">
          <div style="font-size: 1.5rem; flex-shrink: 0;">ℹ️</div>
          <div>
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: #1e40af;">${data.title || 'Information'}</h3>
            <p style="margin: 0; line-height: 1.5; color: #1e3a8a;">
              ${data.message || 'This is an informational message.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  'infobox-warning': (data) => `
    <section style="padding: 2rem 1rem;">
      <div style="background: #fef3c7; border-left: 4px solid var(--color-warning); padding: 1rem 1.5rem; border-radius: 4px;">
        <div style="display: flex; gap: 0.75rem; align-items: start;">
          <div style="font-size: 1.5rem; flex-shrink: 0;">⚠️</div>
          <div>
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: #92400e;">${data.title || 'Warning'}</h3>
            <p style="margin: 0; line-height: 1.5; color: #78350f;">
              ${data.message || 'Please pay attention to this warning.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  'infobox-alert': (data) => `
    <section style="padding: 2rem 1rem;">
      <div style="background: #fee2e2; border-left: 4px solid var(--color-error); padding: 1rem 1.5rem; border-radius: 4px;">
        <div style="display: flex; gap: 0.75rem; align-items: start;">
          <div style="font-size: 1.5rem; flex-shrink: 0;">❌</div>
          <div>
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: #991b1b;">${data.title || 'Alert'}</h3>
            <p style="margin: 0; line-height: 1.5; color: #7f1d1d;">
              ${data.message || 'This is an important alert.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  // Accordion variants
  'accordion-simple': (data) => `
    <section style="padding: 2rem 1rem;">
      <details style="border: 1px solid var(--color-border); border-radius: 8px; padding: 1rem;">
        <summary style="cursor: pointer; font-weight: 600; font-size: 1.125rem; color: var(--color-text); user-select: none; list-style: none; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.875rem;">▶</span>
          ${data.summary || 'Click to expand'}
        </summary>
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--color-border); color: var(--color-text-light); line-height: 1.6;">
          <p style="margin: 0;">
            ${data.content || 'This content is hidden by default.'}
          </p>
        </div>
      </details>
    </section>
  `,

  'accordion-multi': (data) => {
    const items = (data.items || 'Section 1:Content 1,Section 2:Content 2,Section 3:Content 3')
      .split(',')
      .map((item: string) => {
        const [title, content] = item.split(':');
        return { title: title?.trim() || 'Section', content: content?.trim() || 'Content' };
      });

    const itemsHTML = items.map((item: { title: string; content: string }, index: number) => `
      <details style="${index < items.length - 1 ? 'border-bottom: 1px solid var(--color-border);' : ''} padding: 1rem;">
        <summary style="cursor: pointer; font-weight: 600; color: var(--color-text); user-select: none; list-style: none;">
          ▶ ${item.title}
        </summary>
        <div style="margin-top: 0.5rem; color: var(--color-text-light);">
          ${item.content}
        </div>
      </details>
    `).join('');

    return `
      <section style="padding: 2rem 1rem;">
        <div style="border: 1px solid var(--color-border); border-radius: 8px; overflow: hidden;">
          ${itemsHTML}
        </div>
      </section>
    `;
  },

  // Table variants
  'table-striped': (data) => `
    <section style="padding: 2rem 1rem;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: var(--color-brand); color: white;">
            <th style="padding: 0.75rem; text-align: left; font-weight: 600;">${data.header1 || 'Item'}</th>
            <th style="padding: 0.75rem; text-align: left; font-weight: 600;">${data.header2 || 'Description'}</th>
            <th style="padding: 0.75rem; text-align: right; font-weight: 600;">${data.header3 || 'Amount'}</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: var(--color-neutral-lighter);">
            <td style="padding: 0.75rem;">Item 1</td>
            <td style="padding: 0.75rem;">Description for item 1</td>
            <td style="padding: 0.75rem; text-align: right;">$100.00</td>
          </tr>
          <tr>
            <td style="padding: 0.75rem;">Item 2</td>
            <td style="padding: 0.75rem;">Description for item 2</td>
            <td style="padding: 0.75rem; text-align: right;">$200.00</td>
          </tr>
          <tr style="background: var(--color-neutral-lighter);">
            <td style="padding: 0.75rem;">Item 3</td>
            <td style="padding: 0.75rem;">Description for item 3</td>
            <td style="padding: 0.75rem; text-align: right;">$150.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,

  'table-bordered': (data) => `
    <section style="padding: 2rem 1rem;">
      <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--color-border);">
        <thead>
          <tr style="background: var(--color-brand-light); color: white;">
            <th style="padding: 0.75rem; text-align: left; font-weight: 600; border: 1px solid var(--color-border);">${data.header1 || 'Item'}</th>
            <th style="padding: 0.75rem; text-align: left; font-weight: 600; border: 1px solid var(--color-border);">${data.header2 || 'Description'}</th>
            <th style="padding: 0.75rem; text-align: right; font-weight: 600; border: 1px solid var(--color-border);">${data.header3 || 'Amount'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.75rem; border: 1px solid var(--color-border);">Item 1</td>
            <td style="padding: 0.75rem; border: 1px solid var(--color-border);">Description for item 1</td>
            <td style="padding: 0.75rem; text-align: right; border: 1px solid var(--color-border);">$100.00</td>
          </tr>
          <tr>
            <td style="padding: 0.75rem; border: 1px solid var(--color-border);">Item 2</td>
            <td style="padding: 0.75rem; border: 1px solid var(--color-border);">Description for item 2</td>
            <td style="padding: 0.75rem; text-align: right; border: 1px solid var(--color-border);">$200.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,

  // Timeline variants
  'timeline-vertical': (data) => {
    const items = (data.items || 'January 2024:Milestone:Description')
      .split(',')
      .map((item: string) => {
        const [date, title, desc] = item.split(':');
        return {
          date: date?.trim() || 'Date',
          title: title?.trim() || 'Title',
          desc: desc?.trim() || 'Description'
        };
      });

    const itemsHTML = items.map((item: { date: string; title: string; desc: string }, index: number) => `
      <div style="position: relative; margin-bottom: ${index < items.length - 1 ? '2rem' : '0'};">
        <div style="position: absolute; left: -2rem; width: 16px; height: 16px; background: ${index === items.length - 1 ? 'var(--color-accent)' : 'var(--color-brand)'}; border-radius: 50%; border: 2px solid white;"></div>
        <div style="font-weight: 600; color: var(--color-brand); margin-bottom: 0.25rem;">${item.date}</div>
        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: var(--color-text);">${item.title}</h3>
        <p style="margin: 0; color: var(--color-text-light);">${item.desc}</p>
      </div>
    `).join('');

    return `
      <section style="padding: 2rem 1rem;">
        <div style="position: relative; padding-left: 2rem;">
          <div style="position: absolute; left: 7px; top: 0; bottom: 0; width: 2px; background: var(--color-border);"></div>
          ${itemsHTML}
        </div>
      </section>
    `;
  },

  'timeline-simple': (data) => {
    const items = (data.items || 'January 2024: First milestone\nMarch 2024: Second phase')
      .split('\n')
      .map((item: string) => item.trim())
      .filter((item: string) => item);

    const itemsHTML = items.map((item: string) => `<li>${item}</li>`).join('');

    return `
      <section style="padding: 2rem 1rem;">
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">${data.heading || 'Timeline'}</h2>
        <ol style="margin: 0; padding-left: 1.5rem; color: var(--color-text-light); line-height: 2;">
          ${itemsHTML}
        </ol>
      </section>
    `;
  },

  // Footer variants
  'footer-centered': (data) => `
    <footer style="background: var(--color-neutral-dark); color: white; padding: 2rem 1rem; text-align: center; margin-top: 2rem;">
      <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; opacity: 0.9;">
        ${data.copyright || '© 2024 Company Name. All rights reserved.'}
      </p>
      <p style="margin: 0; font-size: 0.875rem; opacity: 0.7;">
        ${data.contact || 'Contact: info@company.com | +45 12 34 56 78'}
      </p>
    </footer>
  `,

  'footer-columns': (data) => `
    <footer style="background: var(--color-neutral-dark); color: white; padding: 2rem 1rem; margin-top: 2rem;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
        <div>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">${data.companyName || 'Company Name'}</h3>
          <p style="margin: 0; font-size: 0.875rem; opacity: 0.8; line-height: 1.6;">
            ${data.companyDesc || 'Your trusted partner for all your needs.'}
          </p>
        </div>
        <div>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Contact</h3>
          <p style="margin: 0; font-size: 0.875rem; opacity: 0.8;">
            Email: ${data.email || 'info@company.com'}<br>
            Phone: ${data.phone || '+45 12 34 56 78'}
          </p>
        </div>
        <div>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Legal</h3>
          <p style="margin: 0; font-size: 0.875rem; opacity: 0.8;">
            © 2024 ${data.companyName || 'Company Name'}<br>
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  `,
};
