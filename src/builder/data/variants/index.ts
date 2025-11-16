import { HEADER_TEMPLATES } from './header-variants';
import { TEXT_BLOCK_TEMPLATES } from './text-block-variants';
import { INFOBOX_TEMPLATES } from './infobox-variants';
import { ACCORDION_TEMPLATES } from './accordion-variants';
import { TABLE_TEMPLATES } from './table-variants';
import { TIMELINE_TEMPLATES } from './timeline-variants';
import { FOOTER_TEMPLATES } from './footer-variants';

export const VARIANT_TEMPLATES: Record<string, string> = {
  ...HEADER_TEMPLATES,
  ...TEXT_BLOCK_TEMPLATES,
  ...INFOBOX_TEMPLATES,
  ...ACCORDION_TEMPLATES,
  ...TABLE_TEMPLATES,
  ...TIMELINE_TEMPLATES,
  ...FOOTER_TEMPLATES,
};
