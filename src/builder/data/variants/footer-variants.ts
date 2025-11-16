export const FOOTER_TEMPLATES: Record<string, string> = {
  'footer-centered': `
    <footer style="background: var(--color-neutral-dark); color: white; padding: 2rem 1rem; text-align: center; margin-top: 2rem;">
      <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; opacity: 0.9;">
        © 2024 Company Name. All rights reserved.
      </p>
      <p style="margin: 0; font-size: 0.875rem; opacity: 0.7;">
        Contact: info@company.com | +45 12 34 56 78
      </p>
    </footer>
  `,

  'footer-columns': `
    <footer style="background: var(--color-neutral-dark); color: white; padding: 2rem 1rem; margin-top: 2rem;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto;">
        <div>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Company Name</h3>
          <p style="margin: 0; font-size: 0.875rem; opacity: 0.8; line-height: 1.6;">
            Your trusted partner for all your needs.
          </p>
        </div>
        <div>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Contact</h3>
          <p style="margin: 0; font-size: 0.875rem; opacity: 0.8;">
            Email: info@company.com<br>
            Phone: +45 12 34 56 78
          </p>
        </div>
        <div>
          <h3 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 600;">Legal</h3>
          <p style="margin: 0; font-size: 0.875rem; opacity: 0.8;">
            © 2024 Company Name<br>
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  `,
};
