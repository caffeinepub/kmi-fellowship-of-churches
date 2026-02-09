import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { EventHighlight } from '../components/BrandSections';
import { Clock, Calendar, MapPin, Music, BookOpen, Users, Heart } from 'lucide-react';

export default function GatheringAt6Page() {
  return (
    <>
      <PageSection>
        <PageTitle>The Gathering at 6</PageTitle>
        <p className="text-xl md:text-2xl text-[oklch(var(--anointed-purple))] font-semibold mb-6">
          Evening Worship in Alachua
        </p>
        <BodyText>
          Beginning February 22nd at 6:00 PM, Elohim's International Revival Center invites you to The Gathering at
          6—a powerful evening worship experience designed for those seeking deeper connection, authentic praise, and a
          fresh move of God.
        </BodyText>
        <BodyText>
          Held every second and fourth Sunday at 6:00 PM, The Gathering at 6 is a time of passionate worship,
          Spirit-led teaching, and meaningful fellowship. Whether you are ending your weekend or preparing your heart
          for the week ahead, this gathering offers a sacred space to encounter God in an atmosphere of unity and
          revival.
        </BodyText>
      </PageSection>

      <PageSection background="muted">
        <EventHighlight>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Clock className="text-[oklch(var(--flame-gold))] shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-1">Time</h4>
                  <p className="text-foreground">6:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="text-[oklch(var(--flame-gold))] shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-1">When</h4>
                  <p className="text-foreground">Every Second & Fourth Sunday</p>
                  <p className="text-sm text-muted-foreground">Launch Date: February 22</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="text-[oklch(var(--flame-gold))] shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-1">Location</h4>
                <p className="text-foreground">
                  13704 NW 150th Place<br />
                  Alachua, Florida 32616
                </p>
                <p className="text-sm text-muted-foreground mt-2">(Right next to Alachua Elementary School)</p>
              </div>
            </div>
          </div>
        </EventHighlight>
      </PageSection>

      <PageSection>
        <SectionTitle>What to Expect</SectionTitle>
        <BodyText>At The Gathering at 6, you'll experience:</BodyText>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="flex gap-4 bg-muted p-6 rounded-lg">
            <Music className="text-[oklch(var(--revival-orange))] shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-2">Dynamic, Spirit-Filled Worship</h4>
              <p className="text-foreground">
                Experience passionate worship that creates space for God's presence and celebrates His goodness.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-muted p-6 rounded-lg">
            <BookOpen className="text-[oklch(var(--revival-orange))] shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-2">Biblical Teaching</h4>
              <p className="text-foreground">
                Receive relevant, life-giving teaching rooted in Scripture that speaks to your everyday life.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-muted p-6 rounded-lg">
            <Users className="text-[oklch(var(--revival-orange))] shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-2">A Welcoming Community</h4>
              <p className="text-foreground">
                Connect with a diverse, welcoming community of believers who value authentic relationships.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-muted p-6 rounded-lg">
            <Heart className="text-[oklch(var(--revival-orange))] shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-[oklch(var(--royal-blue))] mb-2">God's Presence</h4>
              <p className="text-foreground">
                Encounter God in an atmosphere where His presence is honored and celebrated.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="muted">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle>Who Should Attend?</SectionTitle>
          <BodyText>
            This service is ideal for individuals, families, and visitors looking for an evening service in Alachua that
            is intentional, uplifting, and rooted in faith.
          </BodyText>
          <BodyText>
            Whether you're ending your weekend or preparing your heart for the week ahead, The Gathering at 6 offers a
            sacred space to encounter God and connect with others.
          </BodyText>
        </div>
      </PageSection>
    </>
  );
}
