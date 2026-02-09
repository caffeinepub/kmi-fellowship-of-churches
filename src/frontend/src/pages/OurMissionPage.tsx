import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { Target, Users, Heart } from 'lucide-react';

export default function OurMissionPage() {
  return (
    <>
      <PageSection>
        <PageTitle>Our Mission</PageTitle>
        <BodyText>
          Our mission is to connect people to Christ, empower believers through discipleship, and extend God's love
          beyond the church walls through service and outreach.
        </BodyText>
        <BodyText>
          We are committed to building strong spiritual foundations and developing leaders who serve with integrity,
          humility, and faith.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg text-center">
            <Target className="text-[oklch(var(--flame-gold))] mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Connect</h3>
            <BodyText className="mb-0">
              We connect people to Christ through authentic worship, biblical teaching, and a welcoming community where
              everyone can encounter God's presence.
            </BodyText>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <Users className="text-[oklch(var(--flame-gold))] mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Empower</h3>
            <BodyText className="mb-0">
              We empower believers through discipleship, leadership training, and spiritual development that equips them
              to walk boldly in their calling.
            </BodyText>
          </div>
          <div className="bg-white p-8 rounded-lg text-center">
            <Heart className="text-[oklch(var(--flame-gold))] mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-[oklch(var(--royal-blue))] mb-4">Extend</h3>
            <BodyText className="mb-0">
              We extend God's love through service and outreach, meeting both spiritual and practical needs in our
              community with compassion and generosity.
            </BodyText>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle>Our Commitment</SectionTitle>
        <BodyText>
          We are committed to creating an environment where people can grow in their relationship with God, discover
          their purpose, and make a lasting impact in the world around them.
        </BodyText>
        <BodyText>
          Through prayer, worship, teaching, and service, we strive to be a light in our community—reflecting Christ's
          love and demonstrating the transforming power of the gospel in everyday life.
        </BodyText>
      </PageSection>
    </>
  );
}
