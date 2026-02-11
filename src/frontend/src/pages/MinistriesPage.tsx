import { Link } from '@tanstack/react-router';
import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import MinistrySealsSection from '../components/MinistrySealsSection';

export default function MinistriesPage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection background="muted">
        <div className="text-center max-w-4xl mx-auto">
          <PageTitle>Our Ministries</PageTitle>
          <BodyText className="text-foreground/70">
            At KMI Fellowship, we offer a variety of ministries designed to help you grow in faith, connect with others,
            and serve the community.
          </BodyText>
        </div>
      </PageSection>

      {/* Ministry Descriptions */}
      <PageSection className="textured-surface">
        <SectionTitle className="text-center">
          <span className="section-title-decorated">Get Involved</span>
        </SectionTitle>
        <div className="space-y-8 max-w-5xl mx-auto mt-10">
          <div className="card-surface p-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Worship & Arts</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Join our worship team, choir, or creative arts ministry to use your gifts in leading others into God's
              presence through music, drama, and visual arts.
            </p>
          </div>

          <div className="card-surface p-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Children & Youth</h3>
            <p className="text-foreground leading-relaxed text-lg">
              We provide age-appropriate programs for children and teens, including Sunday School, youth group, and
              special events designed to help young people grow in their faith.
            </p>
          </div>

          <div className="card-surface p-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Small Groups</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Connect with others in a small group setting for Bible study, prayer, and fellowship. Small groups meet
              throughout the week in various locations.
            </p>
          </div>

          <div className="card-surface p-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Outreach & Missions</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Serve the community through local outreach programs and support global missions. Opportunities include food
              distribution, community events, and mission trips.
            </p>
          </div>

          <div className="card-surface p-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Prayer Ministry</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Join our prayer team to intercede for our church, community, and world. Prayer meetings are held weekly, and
              prayer requests are always welcome.
            </p>
          </div>

          <div className="card-surface p-8">
            <h3 className="text-3xl font-bold text-primary mb-4 font-display">Hospitality & Welcome</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Help create a warm and welcoming environment for guests and members through greeting, ushering, and
              hospitality services.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Ministry Seals */}
      <PageSection background="muted">
        <MinistrySealsSection />
      </PageSection>

      {/* Call to Action */}
      <PageSection className="textured-surface">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-6">
            Find Your Place to Serve
          </h2>
          <BodyText className="text-foreground/70 mb-8">
            Every member has a role to play in the body of Christ. Discover your gifts and find a ministry where you can
            make a difference.
          </BodyText>
          <Link to="/get-involved" className="btn-primary inline-block">
            Get Connected
          </Link>
        </div>
      </PageSection>
    </>
  );
}
