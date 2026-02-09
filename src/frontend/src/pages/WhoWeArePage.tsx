import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';

export default function WhoWeArePage() {
  return (
    <>
      <PageSection>
        <PageTitle>Who We Are</PageTitle>
        <BodyText>
          KMI Fellowship of Churches is a non-denominational Christian ministry dedicated to equipping believers,
          strengthening families, and serving our communities with compassion and purpose.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <SectionTitle>What We Believe In</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">The Power of Prayer</h3>
            <BodyText className="mb-0">
              We believe in the transformative power of prayer and seek God's presence in all we do.
            </BodyText>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Spirit-Led Worship</h3>
            <BodyText className="mb-0">
              Our worship is passionate, authentic, and centered on honoring God's presence.
            </BodyText>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Biblical Teaching</h3>
            <BodyText className="mb-0">
              We are committed to teaching God's Word with clarity, relevance, and practical application.
            </BodyText>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Authentic Discipleship</h3>
            <BodyText className="mb-0">
              We equip believers to grow in faith and live out their calling with integrity and purpose.
            </BodyText>
          </div>
          <div className="bg-white p-6 rounded-lg md:col-span-2">
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-3">Practical Outreach and Service</h3>
            <BodyText className="mb-0">
              We extend God's love beyond the church walls through compassionate service and community impact.
            </BodyText>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle>Our Purpose</SectionTitle>
        <BodyText>
          Our ministry exists to glorify God while helping people live transformed lives through Jesus Christ. We are
          committed to building strong spiritual foundations and developing leaders who serve with integrity, humility,
          and faith.
        </BodyText>
        <BodyText>
          At KMI Fellowship, we believe that the church is more than a building—it's a family. We are a community of
          believers who support one another, grow together, and serve with purpose. Whether you're taking your first
          steps in faith or have been walking with Christ for years, you'll find a place where you belong.
        </BodyText>
      </PageSection>
    </>
  );
}
