import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { Heart, Gift, Users } from 'lucide-react';

export default function OutreachPage() {
  return (
    <>
      <PageSection>
        <PageTitle>Community Outreach</PageTitle>
        <BodyText>
          We believe the church should be a light in the community. Through outreach programs, food assistance, holiday
          giveaways, and acts of service, KMI Fellowship is committed to meeting both spiritual and practical needs.
        </BodyText>
        <BodyText>
          Our goal is to reflect Christ's love through action, compassion, and generosity.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <SectionTitle>How We Serve</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg text-center">
            <Heart className="text-[oklch(var(--revival-orange))] mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-4">Compassionate Care</h3>
            <BodyText className="mb-0">
              We provide support to individuals and families facing difficult circumstances, offering both spiritual
              encouragement and practical assistance.
            </BodyText>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <Gift className="text-[oklch(var(--revival-orange))] mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-4">Food & Resource Assistance</h3>
            <BodyText className="mb-0">
              Through food programs and resource distribution, we help meet the basic needs of those in our community
              who are struggling.
            </BodyText>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <Users className="text-[oklch(var(--revival-orange))] mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-4">Community Events</h3>
            <BodyText className="mb-0">
              We host holiday giveaways, community gatherings, and special events that bring people together and
              demonstrate God's love in tangible ways.
            </BodyText>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle>Our Commitment</SectionTitle>
        <BodyText>
          At KMI Fellowship, outreach is not just a program—it's a way of life. We are committed to being the hands and
          feet of Jesus in our community, serving with humility, generosity, and love.
        </BodyText>
        <BodyText>
          Whether through feeding the hungry, supporting families in crisis, or simply being present with those who are
          hurting, we strive to make a lasting impact that points people to the hope found in Christ.
        </BodyText>
      </PageSection>
    </>
  );
}
