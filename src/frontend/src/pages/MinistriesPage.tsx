import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import MinistrySealsSection from '../components/MinistrySealsSection';

export default function MinistriesPage() {
  return (
    <>
      <PageSection>
        <PageTitle>Our Ministries</PageTitle>
        <BodyText>
          KMI Fellowship offers a variety of ministries designed to meet people where they are and help them grow.
          There is a place for everyone to serve, grow, and connect.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Worship & Word Ministry</h3>
            <BodyText className="mb-0">
              Spirit-led services centered on biblical truth. Experience passionate worship and relevant teaching that
              transforms lives and draws us closer to God.
            </BodyText>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Men's & Women's Ministries</h3>
            <BodyText className="mb-0">
              Building strong faith, character, and community. Our gender-specific ministries provide a safe space for
              growth, accountability, and fellowship.
            </BodyText>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Discipleship & Leadership Training</h3>
            <BodyText className="mb-0">
              Equipping believers to walk boldly in their calling. Through intentional training and mentorship, we
              develop leaders who serve with integrity and purpose.
            </BodyText>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Youth & Family Support</h3>
            <BodyText className="mb-0">
              Encouraging the next generation in faith and purpose. We invest in young people and families, providing
              support, guidance, and opportunities for spiritual growth.
            </BodyText>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Community Outreach & Charity</h3>
            <BodyText className="mb-0">
              Feeding the hungry, supporting families, and serving those in need. We believe in meeting both spiritual
              and practical needs with compassion and generosity.
            </BodyText>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle>Ministry Seals</SectionTitle>
        <BodyText>
          Our ministry seals represent the heart and mission of KMI Fellowship. Each seal embodies our commitment to
          faith, service, and community. View our official ministry seals and upcoming events below.
        </BodyText>
        <MinistrySealsSection />
      </PageSection>

      <PageSection background="muted">
        <SectionTitle>Get Involved</SectionTitle>
        <BodyText>
          Every ministry at KMI Fellowship exists to help you grow in your faith and discover your purpose. Whether
          you're looking to serve, learn, or connect with others, there's a place for you.
        </BodyText>
        <BodyText>
          Contact us to learn more about how you can get involved in one of our ministries.
        </BodyText>
      </PageSection>
    </>
  );
}
