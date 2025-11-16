export const ACCORDION_TEMPLATES: Record<string, string> = {
  'accordion-simple': `
    <section style="padding: 2rem 1rem;">
      <details style="border: 1px solid var(--color-border); border-radius: 8px; padding: 1rem;">
        <summary style="cursor: pointer; font-weight: 600; font-size: 1.125rem; color: var(--color-text); user-select: none; list-style: none; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.875rem;">▶</span>
          Click to expand
        </summary>
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--color-border); color: var(--color-text-light); line-height: 1.6;">
          <p style="margin: 0;">
            This content is hidden by default and will be revealed when the user clicks the summary.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </details>
    </section>
  `,

  'accordion-multi': `
    <section style="padding: 2rem 1rem;">
      <div style="border: 1px solid var(--color-border); border-radius: 8px; overflow: hidden;">
        <details style="border-bottom: 1px solid var(--color-border); padding: 1rem;">
          <summary style="cursor: pointer; font-weight: 600; color: var(--color-text); user-select: none; list-style: none;">
            ▶ Section 1
          </summary>
          <div style="margin-top: 0.5rem; color: var(--color-text-light);">
            Content for section 1
          </div>
        </details>
        <details style="border-bottom: 1px solid var(--color-border); padding: 1rem;">
          <summary style="cursor: pointer; font-weight: 600; color: var(--color-text); user-select: none; list-style: none;">
            ▶ Section 2
          </summary>
          <div style="margin-top: 0.5rem; color: var(--color-text-light);">
            Content for section 2
          </div>
        </details>
        <details style="padding: 1rem;">
          <summary style="cursor: pointer; font-weight: 600; color: var(--color-text); user-select: none; list-style: none;">
            ▶ Section 3
          </summary>
          <div style="margin-top: 0.5rem; color: var(--color-text-light);">
            Content for section 3
          </div>
        </details>
      </div>
    </section>
  `,
};
