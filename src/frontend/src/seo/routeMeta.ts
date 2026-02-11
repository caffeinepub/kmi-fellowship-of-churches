export interface RouteMetadata {
  title: string;
  description: string;
}

export const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: "Elohim's International Revival Center - Home",
    description: "Welcome to Elohim's International Revival Center & KMI Fellowship of Churches. A prophetic and apostolic community raising up believers for this generation.",
  },
  '/about': {
    title: 'About the Ministry - EIRC',
    description: "Learn about Elohim's International Revival Center and KMI Fellowship of Churches, our vision, mission, and core values.",
  },
  '/leadership': {
    title: 'Leadership - EIRC',
    description: 'Meet our leadership team led by Apostle & Prophet Dr. Virgil Postell, Jr. and learn about our apostolic order and governance.',
  },
  '/worship-services': {
    title: 'Worship & Services - EIRC',
    description: 'Join us for Sabbath Service online, The Gathering in person, and School of the Prophets. Service times and dial-in information.',
  },
  '/learning-study': {
    title: 'Learning & Study - EIRC',
    description: 'Access Bible translations, study tools, and resources for deeper understanding of Scripture.',
  },
  '/prophetic-training': {
    title: 'Prophetic Training - EIRC',
    description: 'School of the Prophets - Equipping believers to hear, receive, and deliver the prophetic word of the Lord.',
  },
  '/kmi-fellowship': {
    title: 'KMI Fellowship - EIRC',
    description: 'Kingdom Ministries International Fellowship - A fellowship of churches and ministries united in advancing the Kingdom of God.',
  },
  '/kmi-governance': {
    title: 'KMI Governance - EIRC',
    description: 'Learn about our apostolic structure, Joint Colleges, and governance framework.',
  },
  '/get-involved': {
    title: 'Get Involved - EIRC',
    description: 'Discover your place in the Body of Christ. Explore ministry opportunities and find where you can serve.',
  },
  '/prayer-request': {
    title: 'Prayer Request - EIRC',
    description: 'Submit a prayer request to our intercessory team. We believe in the power of prayer.',
  },
  '/schedule-meeting': {
    title: 'Schedule a Meeting - EIRC',
    description: 'Request an appointment with our leadership for consultation, prayer counseling, or other ministry needs.',
  },
};

export function getRouteMetadata(pathname: string): RouteMetadata {
  return routeMetadata[pathname] || {
    title: "Elohim's International Revival Center",
    description: "A prophetic and apostolic community raising up believers for this generation.",
  };
}
