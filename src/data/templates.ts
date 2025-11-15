import { Template } from '../types/template';

export const templates: Template[] = [
  {
    id: 'insurance-annual-letter',
    title: 'Årsbrev - Forsikring (Classic)',
    description: 'Et professionelt årsbrev til forsikringskunder med klassisk design. Indeholder CSS-only accordions til klar strukturering af indhold.',
    industry: 'forsikring',
    style: 'classic',
    filename: 'insurance-annual-letter.html'
  },
  {
    id: 'insurance-annual-letter-editorial',
    title: 'Årsbrev - Forsikring (Editorial)',
    description: 'Moderne årsbrev med redaktionel tilgang. Elegant typografi og illustrationer skaber en professionel kommunikation.',
    industry: 'forsikring',
    style: 'editorial',
    filename: 'insurance-annual-letter-editorial.html'
  },
  {
    id: 'insurance-annual-letter-swiss',
    title: 'Årsbrev - Forsikring (Swiss Style)',
    description: 'Årsbrev inspireret af schweizisk typografi. Stringent grid-baseret layout med fokus på klarhed og læsbarhed.',
    industry: 'forsikring',
    style: 'swiss',
    filename: 'insurance-annual-letter-swiss.html'
  },
  {
    id: 'insurance-annual-letter-utility',
    title: 'Årsbrev - Forsikring (Utility)',
    description: 'Funktionelt årsbrev med klart visuelt hierarki. Fokus på information og brugervenlighed.',
    industry: 'forsikring',
    style: 'utility',
    filename: 'insurance-annual-letter-utility.html'
  },
  {
    id: 'pension-fripolice-notice',
    title: 'Fripolicemeddelelse - Pension',
    description: 'Skabelon til meddelelse om fripolice. Soft Illustrated stil med dekorative marginer for en venlig og tilgængelig kommunikation.',
    industry: 'pension',
    style: 'soft-illustrated',
    filename: 'pension-fripolice-notice.html'
  }
];
