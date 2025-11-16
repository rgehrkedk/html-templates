export const TEXT_BLOCK_TEMPLATES: Record<string, string> = {
  'text-standard': `
    <section style="padding: 2rem 1rem;">
      <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">Section Title</h2>
      <p style="margin: 0; line-height: 1.6; color: var(--color-text-light);">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
    </section>
  `,

  'text-badge': `
    <section style="padding: 2rem 1rem;">
      <div style="display: inline-block; padding: 0.25rem 0.75rem; background: var(--color-info); color: white; border-radius: 12px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
        NEW
      </div>
      <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">Section Title</h2>
      <p style="margin: 0; line-height: 1.6; color: var(--color-text-light);">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  `,

  'text-highlighted': `
    <section style="padding: 2rem 1rem;">
      <div style="background: var(--color-brand-lighter); border-left: 4px solid var(--color-brand); padding: 1.5rem; border-radius: 4px;">
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">Highlighted Section</h2>
        <p style="margin: 0; line-height: 1.6; color: var(--color-text-light);">
          This content is highlighted to draw attention. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  `,
};
