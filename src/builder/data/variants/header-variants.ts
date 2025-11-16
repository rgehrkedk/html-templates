export const HEADER_TEMPLATES: Record<string, string> = {
  'header-centered': `
    <header style="text-align: center; padding: 2rem 1rem; background: var(--color-brand); color: white;">
      <h1 style="margin: 0; font-size: 2rem; font-weight: 700;">Company Name</h1>
    </header>
  `,

  'header-left': `
    <header style="padding: 2rem 1rem; background: var(--color-brand); color: white;">
      <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 700;">Company Name</h1>
      <p style="margin: 0; opacity: 0.9;">Your trusted partner</p>
    </header>
  `,

  'header-logo': `
    <header style="display: flex; align-items: center; gap: 1rem; padding: 2rem 1rem; background: var(--color-brand); color: white;">
      <div style="width: 48px; height: 48px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;">
        🏢
      </div>
      <h1 style="margin: 0; font-size: 2rem; font-weight: 700;">Company Name</h1>
    </header>
  `,
};
