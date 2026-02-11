import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { Heart, Users, Globe } from 'lucide-react';

export default function OurMissionPage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection background="muted">
        <div className="text-center max-w-4xl mx-auto">
          <PageTitle>Our Mission</PageTitle>
          <BodyText className="text-foreground/70">
            At KMI Fellowship of Churches, our mission is to connect people to Christ, empower them through discipleship,
            and extend God's love to the world.
          </BodyText>
        </div>
      </PageSection>

      {/* Mission Statement */}
      <PageSection className="textured-surface">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>
            <span className="section-title-decorated">Our Purpose</span>
          </SectionTitle>
          <BodyText className="text-foreground/70">
            We exist to glorify God by making disciples of Jesus Christ who worship authentically, grow spiritually, serve
            compassionately, and reach out boldly. Through prayer, teaching, fellowship, and outreach, we seek to be a
            light in our community and beyond.
          </BodyText>
        </div>
      </PageSection>

      {/* Three Pillars */}
      <PageSection background="muted">
        <SectionTitle className="text-center">
          <span className="section-title-decorated">How We Live It Out</span>
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Connect */}
          <div className="card-surface p-10 text-center hover:scale-[1.02] transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-xl">
              <Heart size={48} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Connect</h3>
            <p className="text-foreground leading-relaxed text-lg">
              We connect people to Christ through authentic worship, biblical teaching, and genuine relationships. No one
              walks alone—we grow together in faith and community.
            </p>
          </div>

          {/* Empower */}
          <div className="card-surface p-10 text-center hover:scale-[1.02] transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent to-secondary mb-6 shadow-xl">
              <Users size={48} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Empower</h3>
            <p className="text-foreground leading-relaxed text-lg">
              We empower believers through discipleship, training, and spiritual formation. Every member is equipped to
              discover their gifts, serve effectively, and live out their calling.
            </p>
          </div>

          {/* Extend */}
          <div className="card-surface p-10 text-center hover:scale-[1.02] transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary mb-6 shadow-xl">
              <Globe size={48} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Extend</h3>
            <p className="text-foreground leading-relaxed text-lg">
              We extend God's love to our community and the world through compassionate service, outreach, and missions.
              We are called to be the hands and feet of Jesus wherever we go.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Core Values */}
      <PageSection className="textured-surface">
        <div className="max-w-4xl mx-auto">
          <SectionTitle className="text-center">
            <span className="section-title-decorated">Our Core Values</span>
          </SectionTitle>
          <div className="space-y-8 mt-10">
            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Biblical Authority</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We believe the Bible is the inspired, authoritative Word of God and the foundation for all we believe and
                practice.
              </p>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Prayer & Worship</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We prioritize prayer and worship as essential expressions of our relationship with God and our dependence
                on His presence and power.
              </p>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Authentic Community</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We value genuine relationships where people can be real, grow together, and support one another in love
                and grace.
              </p>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Compassionate Service</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We are committed to serving others with the love and compassion of Christ, meeting needs both within and
                beyond our church family.
              </p>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Intentional Discipleship</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We are dedicated to helping every believer grow in spiritual maturity through teaching, mentoring, and
                practical application of God's Word.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}

