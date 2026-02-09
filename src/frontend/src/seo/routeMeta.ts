export interface RouteMetadata {
  title: string;
  description: string;
}

export const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: 'KMI Fellowship of Churches - Home',
    description: 'Welcome to KMI Fellowship of Churches. A community dedicated to prayer, worship, teaching, discipleship, and outreach. Join us for The Gathering at 6 and experience transformative worship.',
  },
  '/who-we-are': {
    title: 'Who We Are - KMI Fellowship of Churches',
    description: 'Learn about KMI Fellowship of Churches, our beliefs, and our commitment to prayer, worship, teaching, discipleship, and outreach. Discover our purpose and values.',
  },
  '/our-mission': {
    title: 'Our Mission - KMI Fellowship of Churches',
    description: 'Our mission is to Connect believers to Christ, Empower them through discipleship, and Extend God\'s love to the world. Learn about our commitment to transforming lives.',
  },
  '/visit': {
    title: 'Plan Your Visit - KMI Fellowship of Churches',
    description: 'Planning to visit KMI Fellowship? Learn what to expect: a welcoming atmosphere, powerful worship, biblical teaching, and opportunities for spiritual growth.',
  },
  '/ministries': {
    title: 'Ministries - KMI Fellowship of Churches',
    description: 'Explore our ministries including Youth Ministry, Women\'s Ministry, Men\'s Ministry, Children\'s Ministry, Worship Ministry, and more. Find your place to serve and grow.',
  },
  '/outreach': {
    title: 'Community Outreach - KMI Fellowship of Churches',
    description: 'Discover our community outreach programs including food assistance, compassionate care, and community events. Join us in extending God\'s love to our neighbors.',
  },
  '/connect': {
    title: 'Connect With Us - KMI Fellowship of Churches',
    description: 'Connect with KMI Fellowship through our services, watch live online, find our location, and follow us on social media. Stay connected with our community.',
  },
  '/gathering-at-6': {
    title: 'The Gathering at 6 - KMI Fellowship of Churches',
    description: 'Join us for The Gathering at 6, our evening worship service featuring powerful praise, biblical teaching, and community fellowship. Every Sunday at 6:00 PM.',
  },
  '/leadership': {
    title: 'Leadership & Governance - KMI Fellowship of Churches',
    description: 'Meet our leadership team including our Presiding Prelate and learn about our governance structure, Joint Colleges, Schools, Councils, and Tribunal.',
  },
  '/schedule-meeting': {
    title: 'Schedule a Meeting - KMI Fellowship of Churches',
    description: 'Request an appointment with our leadership for consultation, prayer counseling, speaking engagements, or other ministry needs. We\'re here to serve you.',
  },
};

export function getRouteMetadata(pathname: string): RouteMetadata {
  return routeMetadata[pathname] || {
    title: 'KMI Fellowship of Churches',
    description: 'KMI Fellowship of Churches - A community dedicated to prayer, worship, teaching, discipleship, and outreach.',
  };
}
