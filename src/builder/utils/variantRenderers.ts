/**
 * Variant renderers that generate HTML from section data
 */

type RenderFunction = (data: Record<string, any>) => string;

export const VARIANT_RENDERERS: Record<string, RenderFunction> = {
  // Header variants
  'header-centered': (data) => `
    <header class="header-centered">
      <h1>${data.title || 'Company Name'}</h1>
    </header>
  `,

  'header-left': (data) => `
    <header class="header-left">
      <h1>${data.title || 'Company Name'}</h1>
      <p>${data.tagline || 'Your trusted partner'}</p>
    </header>
  `,

  'header-logo': (data) => `
    <header class="header-logo">
      <div class="header-logo-icon">${data.logo || 'LOGO'}</div>
      <h1>${data.title || 'Company Name'}</h1>
    </header>
  `,

  // Text block variants
  'text-standard': (data) => `
    <section class="text-standard">
      <h2>${data.heading || 'Section Title'}</h2>
      <p>${data.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
    </section>
  `,

  'text-badge': (data) => `
    <section class="text-badge">
      <div class="text-badge-label">${data.badge || 'NEW'}</div>
      <h2>${data.heading || 'Section Title'}</h2>
      <p>${data.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
    </section>
  `,

  'text-highlighted': (data) => `
    <section class="text-highlighted">
      <div class="text-highlighted-box">
        <h2>${data.heading || 'Highlighted Section'}</h2>
        <p>${data.content || 'This content is highlighted to draw attention.'}</p>
      </div>
    </section>
  `,

  // InfoBox variants
  'infobox-info': (data) => `
    <section class="infobox infobox-info">
      <div class="infobox-container">
        <div class="infobox-content">
          <div class="infobox-icon">i</div>
          <div>
            <h3>${data.title || 'Information'}</h3>
            <p>${data.message || 'This is an informational message.'}</p>
          </div>
        </div>
      </div>
    </section>
  `,

  'infobox-warning': (data) => `
    <section class="infobox infobox-warning">
      <div class="infobox-container">
        <div class="infobox-content">
          <div class="infobox-icon">!</div>
          <div>
            <h3>${data.title || 'Warning'}</h3>
            <p>${data.message || 'Please pay attention to this warning.'}</p>
          </div>
        </div>
      </div>
    </section>
  `,

  'infobox-alert': (data) => `
    <section class="infobox infobox-alert">
      <div class="infobox-container">
        <div class="infobox-content">
          <div class="infobox-icon">X</div>
          <div>
            <h3>${data.title || 'Alert'}</h3>
            <p>${data.message || 'This is an important alert.'}</p>
          </div>
        </div>
      </div>
    </section>
  `,

  // Accordion variants
  'accordion-simple': (data) => `
    <section class="accordion-simple">
      <details>
        <summary>
          <span>▶</span>
          ${data.summary || 'Click to expand'}
        </summary>
        <div class="accordion-simple-content">
          <p>${data.content || 'This content is hidden by default.'}</p>
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

    const itemsHTML = items.map((item: { title: string; content: string }) => `
      <details>
        <summary>▶ ${item.title}</summary>
        <div class="accordion-multi-content">${item.content}</div>
      </details>
    `).join('');

    return `
      <section class="accordion-multi">
        <div class="accordion-multi-container">
          ${itemsHTML}
        </div>
      </section>
    `;
  },

  // Table variants
  'table-striped': (data) => `
    <section class="table-container">
      <table class="table-striped">
        <thead>
          <tr>
            <th>${data.header1 || 'Item'}</th>
            <th>${data.header2 || 'Description'}</th>
            <th>${data.header3 || 'Amount'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>Description for item 1</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>Description for item 2</td>
            <td>$200.00</td>
          </tr>
          <tr>
            <td>Item 3</td>
            <td>Description for item 3</td>
            <td>$150.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,

  'table-bordered': (data) => `
    <section class="table-container">
      <table class="table-bordered">
        <thead>
          <tr>
            <th>${data.header1 || 'Item'}</th>
            <th>${data.header2 || 'Description'}</th>
            <th>${data.header3 || 'Amount'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>Description for item 1</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>Description for item 2</td>
            <td>$200.00</td>
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

    const itemsHTML = items.map((item: { date: string; title: string; desc: string }) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `).join('');

    return `
      <section class="timeline-vertical">
        <div class="timeline-vertical-container">
          <div class="timeline-vertical-line"></div>
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
      <section class="timeline-simple">
        <h2>${data.heading || 'Timeline'}</h2>
        <ol>
          ${itemsHTML}
        </ol>
      </section>
    `;
  },

  // Footer variants
  'footer-centered': (data) => `
    <footer class="footer-centered">
      <p>${data.copyright || '© 2024 Company Name. All rights reserved.'}</p>
      <p>${data.contact || 'Contact: info@company.com | +45 12 34 56 78'}</p>
    </footer>
  `,

  'footer-columns': (data) => `
    <footer class="footer-columns">
      <div class="footer-columns-grid">
        <div>
          <h3>${data.companyName || 'Company Name'}</h3>
          <p>${data.companyDesc || 'Your trusted partner for all your needs.'}</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Email: ${data.email || 'info@company.com'}<br>
            Phone: ${data.phone || '+45 12 34 56 78'}
          </p>
        </div>
        <div>
          <h3>Legal</h3>
          <p>
            © 2024 ${data.companyName || 'Company Name'}<br>
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  `,
};
