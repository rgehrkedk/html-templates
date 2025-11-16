export const TIMELINE_TEMPLATES: Record<string, string> = {
  'timeline-vertical': `
    <section style="padding: 2rem 1rem;">
      <div style="position: relative; padding-left: 2rem;">
        <div style="position: absolute; left: 7px; top: 0; bottom: 0; width: 2px; background: var(--color-border);"></div>

        <div style="position: relative; margin-bottom: 2rem;">
          <div style="position: absolute; left: -2rem; width: 16px; height: 16px; background: var(--color-brand); border-radius: 50%; border: 2px solid white;"></div>
          <div style="font-weight: 600; color: var(--color-brand); margin-bottom: 0.25rem;">January 2024</div>
          <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: var(--color-text);">Milestone Title</h3>
          <p style="margin: 0; color: var(--color-text-light);">Description of what happened at this point in time.</p>
        </div>

        <div style="position: relative; margin-bottom: 2rem;">
          <div style="position: absolute; left: -2rem; width: 16px; height: 16px; background: var(--color-brand); border-radius: 50%; border: 2px solid white;"></div>
          <div style="font-weight: 600; color: var(--color-brand); margin-bottom: 0.25rem;">March 2024</div>
          <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: var(--color-text);">Another Milestone</h3>
          <p style="margin: 0; color: var(--color-text-light);">Description of the second milestone.</p>
        </div>

        <div style="position: relative;">
          <div style="position: absolute; left: -2rem; width: 16px; height: 16px; background: var(--color-accent); border-radius: 50%; border: 2px solid white;"></div>
          <div style="font-weight: 600; color: var(--color-brand); margin-bottom: 0.25rem;">June 2024</div>
          <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: var(--color-text);">Current Status</h3>
          <p style="margin: 0; color: var(--color-text-light);">The most recent update or current status.</p>
        </div>
      </div>
    </section>
  `,

  'timeline-simple': `
    <section style="padding: 2rem 1rem;">
      <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; color: var(--color-text);">Timeline</h2>
      <ol style="margin: 0; padding-left: 1.5rem; color: var(--color-text-light); line-height: 2;">
        <li><strong style="color: var(--color-text);">January 2024:</strong> First milestone completed</li>
        <li><strong style="color: var(--color-text);">March 2024:</strong> Second phase initiated</li>
        <li><strong style="color: var(--color-text);">June 2024:</strong> Current status and next steps</li>
      </ol>
    </section>
  `,
};
