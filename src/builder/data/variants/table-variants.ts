export const TABLE_TEMPLATES: Record<string, string> = {
  'table-striped': `
    <section style="padding: 2rem 1rem;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: var(--color-brand); color: white;">
            <th style="padding: 0.75rem; text-align: left; font-weight: 600;">Item</th>
            <th style="padding: 0.75rem; text-align: left; font-weight: 600;">Description</th>
            <th style="padding: 0.75rem; text-align: right; font-weight: 600;">Amount</th>
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
          <tr style="border-top: 2px solid var(--color-brand);">
            <td colspan="2" style="padding: 0.75rem; font-weight: 600;">Total</td>
            <td style="padding: 0.75rem; text-align: right; font-weight: 600;">$450.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,

  'table-bordered': `
    <section style="padding: 2rem 1rem;">
      <table style="width: 100%; border-collapse: collapse; border: 1px solid var(--color-border);">
        <thead>
          <tr style="background: var(--color-brand-light); color: white;">
            <th style="padding: 0.75rem; text-align: left; font-weight: 600; border: 1px solid var(--color-border);">Item</th>
            <th style="padding: 0.75rem; text-align: left; font-weight: 600; border: 1px solid var(--color-border);">Description</th>
            <th style="padding: 0.75rem; text-align: right; font-weight: 600; border: 1px solid var(--color-border);">Amount</th>
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
          <tr>
            <td style="padding: 0.75rem; border: 1px solid var(--color-border);">Item 3</td>
            <td style="padding: 0.75rem; border: 1px solid var(--color-border);">Description for item 3</td>
            <td style="padding: 0.75rem; text-align: right; border: 1px solid var(--color-border);">$150.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
};
