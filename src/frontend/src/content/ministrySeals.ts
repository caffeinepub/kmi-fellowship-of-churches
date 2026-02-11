/**
 * Ministry Seals image catalog
 * Contains all ministry seal and event flyer images with modern, contemporary visuals
 */

export interface MinistrySeal {
  src: string;
  alt: string;
  category: 'seal' | 'event';
}

export const ministrySeals: MinistrySeal[] = [
  {
    src: '/assets/generated/ministry-seals-modern-collage.dim_1200x1200.png',
    alt: 'Modern Ministry Seals - Contemporary design showcasing vibrant young leadership',
    category: 'seal',
  },
  {
    src: '/assets/generated/gathering-at-6-modern-flyer.dim_1200x1200.png',
    alt: 'The Gathering at 6 - Modern event flyer with contemporary design',
    category: 'event',
  },
  {
    src: '/assets/generated/save-the-date-modern-flyer.dim_1200x1200.png',
    alt: 'Save the Date - Modern ministry event invitation with fresh design',
    category: 'event',
  },
  {
    src: '/assets/generated/church-outreach-modern.dim_1200x1200.png',
    alt: 'Church in the Neighborhood - Modern outreach event showcasing vibrant community engagement',
    category: 'event',
  },
];
