export interface EditableField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  placeholder?: string;
  options?: { value: string; label: string }[];
  defaultValue?: string;
}

// Field definitions for each variant
export const VARIANT_FIELDS: Record<string, EditableField[]> = {
  // Header variants
  'header-centered': [
    { key: 'title', label: 'Company Name', type: 'text', defaultValue: 'Company Name', placeholder: 'Enter company name' },
  ],
  'header-left': [
    { key: 'title', label: 'Company Name', type: 'text', defaultValue: 'Company Name', placeholder: 'Enter company name' },
    { key: 'tagline', label: 'Tagline', type: 'text', defaultValue: 'Your trusted partner', placeholder: 'Enter tagline' },
  ],
  'header-logo': [
    { key: 'title', label: 'Company Name', type: 'text', defaultValue: 'Company Name', placeholder: 'Enter company name' },
    { key: 'logo', label: 'Logo Emoji', type: 'text', defaultValue: '🏢', placeholder: 'Enter emoji' },
  ],

  // Text block variants
  'text-standard': [
    { key: 'heading', label: 'Heading', type: 'text', defaultValue: 'Section Title', placeholder: 'Enter heading' },
    { key: 'content', label: 'Content', type: 'textarea', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', placeholder: 'Enter content' },
  ],
  'text-badge': [
    { key: 'badge', label: 'Badge Text', type: 'text', defaultValue: 'NEW', placeholder: 'Enter badge text' },
    { key: 'heading', label: 'Heading', type: 'text', defaultValue: 'Section Title', placeholder: 'Enter heading' },
    { key: 'content', label: 'Content', type: 'textarea', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', placeholder: 'Enter content' },
  ],
  'text-highlighted': [
    { key: 'heading', label: 'Heading', type: 'text', defaultValue: 'Highlighted Section', placeholder: 'Enter heading' },
    { key: 'content', label: 'Content', type: 'textarea', defaultValue: 'This content is highlighted to draw attention.', placeholder: 'Enter content' },
  ],

  // InfoBox variants
  'infobox-info': [
    { key: 'title', label: 'Title', type: 'text', defaultValue: 'Information', placeholder: 'Enter title' },
    { key: 'message', label: 'Message', type: 'textarea', defaultValue: 'This is an informational message. Please review the details carefully.', placeholder: 'Enter message' },
  ],
  'infobox-warning': [
    { key: 'title', label: 'Title', type: 'text', defaultValue: 'Warning', placeholder: 'Enter title' },
    { key: 'message', label: 'Message', type: 'textarea', defaultValue: 'Please pay attention to this warning. Action may be required.', placeholder: 'Enter message' },
  ],
  'infobox-alert': [
    { key: 'title', label: 'Title', type: 'text', defaultValue: 'Alert', placeholder: 'Enter title' },
    { key: 'message', label: 'Message', type: 'textarea', defaultValue: 'This is an important alert. Immediate action may be required.', placeholder: 'Enter message' },
  ],

  // Accordion variants
  'accordion-simple': [
    { key: 'summary', label: 'Summary Text', type: 'text', defaultValue: 'Click to expand', placeholder: 'Enter summary' },
    { key: 'content', label: 'Hidden Content', type: 'textarea', defaultValue: 'This content is hidden by default and will be revealed when the user clicks the summary.', placeholder: 'Enter content' },
  ],
  'accordion-multi': [
    { key: 'items', label: 'Items (comma-separated)', type: 'textarea', defaultValue: 'Section 1:Content 1,Section 2:Content 2,Section 3:Content 3', placeholder: 'Format: Title:Content,Title:Content' },
  ],

  // Table variants (simplified)
  'table-striped': [
    { key: 'header1', label: 'Header 1', type: 'text', defaultValue: 'Item', placeholder: 'Column 1' },
    { key: 'header2', label: 'Header 2', type: 'text', defaultValue: 'Description', placeholder: 'Column 2' },
    { key: 'header3', label: 'Header 3', type: 'text', defaultValue: 'Amount', placeholder: 'Column 3' },
  ],
  'table-bordered': [
    { key: 'header1', label: 'Header 1', type: 'text', defaultValue: 'Item', placeholder: 'Column 1' },
    { key: 'header2', label: 'Header 2', type: 'text', defaultValue: 'Description', placeholder: 'Column 2' },
    { key: 'header3', label: 'Header 3', type: 'text', defaultValue: 'Amount', placeholder: 'Column 3' },
  ],

  // Timeline variants
  'timeline-vertical': [
    { key: 'items', label: 'Timeline Items', type: 'textarea', defaultValue: 'January 2024:Milestone Title:Description,March 2024:Another Milestone:Description 2,June 2024:Current Status:Latest update', placeholder: 'Format: Date:Title:Description,Date:Title:Description' },
  ],
  'timeline-simple': [
    { key: 'heading', label: 'Heading', type: 'text', defaultValue: 'Timeline', placeholder: 'Enter heading' },
    { key: 'items', label: 'Timeline Items', type: 'textarea', defaultValue: 'January 2024: First milestone,March 2024: Second phase,June 2024: Current status', placeholder: 'One item per line' },
  ],

  // Footer variants
  'footer-centered': [
    { key: 'copyright', label: 'Copyright Text', type: 'text', defaultValue: '© 2024 Company Name. All rights reserved.', placeholder: 'Enter copyright' },
    { key: 'contact', label: 'Contact Info', type: 'text', defaultValue: 'Contact: info@company.com | +45 12 34 56 78', placeholder: 'Enter contact' },
  ],
  'footer-columns': [
    { key: 'companyName', label: 'Company Name', type: 'text', defaultValue: 'Company Name', placeholder: 'Enter company name' },
    { key: 'companyDesc', label: 'Company Description', type: 'textarea', defaultValue: 'Your trusted partner for all your needs.', placeholder: 'Enter description' },
    { key: 'email', label: 'Email', type: 'text', defaultValue: 'info@company.com', placeholder: 'Enter email' },
    { key: 'phone', label: 'Phone', type: 'text', defaultValue: '+45 12 34 56 78', placeholder: 'Enter phone' },
  ],
};

/**
 * Get default data for a variant
 */
export function getDefaultData(variantId: string): Record<string, any> {
  const fields = VARIANT_FIELDS[variantId] || [];
  const data: Record<string, any> = {};

  fields.forEach(field => {
    data[field.key] = field.defaultValue || '';
  });

  return data;
}
