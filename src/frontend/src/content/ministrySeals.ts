/**
 * Ministry Seals image catalog
 * Contains all ministry seal and event flyer images
 */

export interface MinistrySeal {
  src: string;
  alt: string;
  category: 'seal' | 'event';
}

export const ministrySeals: MinistrySeal[] = [
  {
    src: 'ministry-seals/ChatGPT Image Feb 5, 2026 at 11_34_19 PM.png',
    alt: 'SHEMA and El Ohim\'s International Revival Center Ministry Seals',
    category: 'seal',
  },
  {
    src: 'ministry-seals/The Gathering at 6 launch service.png',
    alt: 'The Gathering at 6 Launch Service - Elohim\'s Revival Center International',
    category: 'event',
  },
  {
    src: 'ministry-seals/save the date with us.png',
    alt: 'Save the Date - Ministry Event Invitation',
    category: 'event',
  },
  {
    src: 'ministry-seals/church.png',
    alt: 'Church in the Neighborhood - Outreach & Evangelism Event, Lake Butler, Florida',
    category: 'event',
  },
];
