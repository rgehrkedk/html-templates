export const INFOBOX_TEMPLATES: Record<string, string> = {
  'infobox-info': `
    <section style="padding: 2rem 1rem;">
      <div style="background: #dbeafe; border-left: 4px solid var(--color-info); padding: 1rem 1.5rem; border-radius: 4px;">
        <div style="display: flex; gap: 0.75rem; align-items: start;">
          <div style="font-size: 1.5rem; flex-shrink: 0;">ℹ️</div>
          <div>
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: #1e40af;">Information</h3>
            <p style="margin: 0; line-height: 1.5; color: #1e3a8a;">
              This is an informational message. Please review the details carefully.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  'infobox-warning': `
    <section style="padding: 2rem 1rem;">
      <div style="background: #fef3c7; border-left: 4px solid var(--color-warning); padding: 1rem 1.5rem; border-radius: 4px;">
        <div style="display: flex; gap: 0.75rem; align-items: start;">
          <div style="font-size: 1.5rem; flex-shrink: 0;">⚠️</div>
          <div>
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: #92400e;">Warning</h3>
            <p style="margin: 0; line-height: 1.5; color: #78350f;">
              Please pay attention to this warning. Action may be required.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  'infobox-alert': `
    <section style="padding: 2rem 1rem;">
      <div style="background: #fee2e2; border-left: 4px solid var(--color-error); padding: 1rem 1.5rem; border-radius: 4px;">
        <div style="display: flex; gap: 0.75rem; align-items: start;">
          <div style="font-size: 1.5rem; flex-shrink: 0;">❌</div>
          <div>
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.125rem; color: #991b1b;">Alert</h3>
            <p style="margin: 0; line-height: 1.5; color: #7f1d1d;">
              This is an important alert. Immediate action may be required.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
};
