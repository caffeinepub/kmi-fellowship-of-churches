import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { Link } from '@tanstack/react-router';
import { Heart, Music, BookOpen, Users } from 'lucide-react';

export default function VisitPage() {
  return (
    <>
      <PageSection>
        <PageTitle>What to Expect When You Visit</PageTitle>
        <BodyText>
          When you join us for worship, you can expect a warm and welcoming atmosphere where God's presence is honored
          and celebrated. Whether this is your first time in church or you've been walking with Christ for years, you'll
          find a place where you belong.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <SectionTitle>You Can Expect</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg flex gap-4">
            <Heart className="text-[oklch(var(--flame-gold))] shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-2">A Warm and Welcoming Atmosphere</h3>
              <p className="text-foreground leading-relaxed">
                From the moment you arrive, you'll be greeted with genuine warmth and hospitality. We're here to make
                you feel at home.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg flex gap-4">
            <Music className="text-[oklch(var(--flame-gold))] shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-2">Passionate, Spirit-Filled Worship</h3>
              <p className="text-foreground leading-relaxed">
                Experience authentic worship that honors God and creates space for His presence to move among us.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg flex gap-4">
            <BookOpen className="text-[oklch(var(--flame-gold))] shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-2">Relevant, Bible-Based Teaching</h3>
              <p className="text-foreground leading-relaxed">
                Receive practical, life-giving teaching rooted in Scripture that speaks to your everyday life.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg flex gap-4">
            <Users className="text-[oklch(var(--flame-gold))] shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-2">Opportunities for Growth</h3>
              <p className="text-foreground leading-relaxed">
                Connect with opportunities for prayer, spiritual growth, and meaningful relationships with a church
                family that values love, unity, and truth.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle>Come as You Are</SectionTitle>
        <BodyText>
          You don't need to dress up or have it all together. Come as you are, and let God meet you where you are. Our
          church is a place of grace, acceptance, and transformation.
        </BodyText>
        <BodyText>
          Whether you're seeking answers, looking for community, or simply curious about faith, we're here to walk
          alongside you on your journey.
        </BodyText>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="/connect" className="btn-primary text-center">
            Get Service Times & Location
          </Link>
          <Link to="/gathering-at-6" className="btn-secondary text-center">
            Learn About The Gathering at 6
          </Link>
        </div>
      </PageSection>
    </>
  );
}
