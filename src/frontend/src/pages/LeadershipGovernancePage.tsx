import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, BodyText } from '../components/Typography';
import { Users, Shield, BookOpen, Heart } from 'lucide-react';

export default function LeadershipGovernancePage() {
  return (
    <>
      {/* Hero Section */}
      <PageSection background="muted">
        <div className="text-center max-w-4xl mx-auto">
          <PageTitle>Leadership & Governance</PageTitle>
          <BodyText className="text-foreground/70">
            KMI Fellowship is led by a team of dedicated servants committed to biblical leadership, accountability, and
            spiritual oversight.
          </BodyText>
        </div>
      </PageSection>

      {/* Presiding Prelate Section */}
      <PageSection className="textured-surface">
        <div className="max-w-5xl mx-auto">
          <SectionTitle className="text-center">
            <span className="section-title-decorated">Presiding Prelate</span>
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-primary mb-4 font-display">Chief Apostle [Name]</h3>
              <p className="text-foreground leading-relaxed text-lg mb-4">
                Chief Apostle [Name] serves as the Presiding Prelate of KMI Fellowship of Churches, providing spiritual
                oversight and apostolic leadership to the fellowship.
              </p>
              <p className="text-foreground leading-relaxed text-lg mb-4">
                With a heart for worship, discipleship, and community transformation, Chief Apostle [Name] leads with
                wisdom, compassion, and a deep commitment to biblical truth.
              </p>
              <p className="text-foreground leading-relaxed text-lg">
                Under his leadership, KMI Fellowship continues to grow as a vibrant community of believers dedicated to
                worship, teaching, and service.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/assets/generated/chief-apostle-portrait.dim_1200x1500.jpg"
                alt="Chief Apostle Portrait"
                className="w-full rounded-2xl shadow-2xl border-4 border-accent/30"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Governance Structure */}
      <PageSection background="muted">
        <SectionTitle className="text-center">
          <span className="section-title-decorated">Governance Structure</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
          <div className="card-surface p-8">
            <Users size={48} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4 font-display">Apostolic Leadership</h3>
            <p className="text-foreground leading-relaxed text-lg">
              The Chief Apostle provides spiritual oversight and apostolic direction for the fellowship, ensuring
              alignment with biblical principles and the vision of the ministry.
            </p>
          </div>

          <div className="card-surface p-8">
            <Shield size={48} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4 font-display">Elder Board</h3>
            <p className="text-foreground leading-relaxed text-lg">
              A team of elders provides spiritual guidance, pastoral care, and accountability, working together to shepherd
              the congregation and support the vision of the church.
            </p>
          </div>

          <div className="card-surface p-8">
            <BookOpen size={48} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4 font-display">Ministry Leaders</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Dedicated ministry leaders oversee specific areas of church life, including worship, children's ministry,
              outreach, and discipleship, ensuring excellence and effectiveness.
            </p>
          </div>

          <div className="card-surface p-8">
            <Heart size={48} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4 font-display">Deacon Team</h3>
            <p className="text-foreground leading-relaxed text-lg">
              Deacons serve the practical needs of the church, providing support in areas such as hospitality, facilities,
              and community care, allowing leaders to focus on spiritual oversight.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Tribunal Section */}
      <PageSection className="textured-surface">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-secondary to-primary text-white p-12 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-display font-black mb-6 text-center">The Tribunal</h2>
            <p className="text-xl leading-relaxed mb-6">
              The Tribunal serves as the governing body responsible for maintaining doctrinal integrity, resolving
              disputes, and ensuring accountability within the fellowship. Composed of senior apostolic leaders and elders,
              the Tribunal provides wisdom, guidance, and oversight in matters of church discipline, doctrine, and
              governance.
            </p>
            <p className="text-xl leading-relaxed">
              Operating with transparency and biblical authority, the Tribunal ensures that all decisions align with
              Scripture and the core values of KMI Fellowship, protecting the spiritual health and unity of the church.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Leadership Values */}
      <PageSection background="muted">
        <div className="max-w-4xl mx-auto">
          <SectionTitle className="text-center">
            <span className="section-title-decorated">Our Leadership Values</span>
          </SectionTitle>
          <div className="space-y-6 mt-10">
            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Servant Leadership</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We lead by example, following Christ's model of humble service and sacrificial love.
              </p>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Biblical Integrity</h3>
              <p className="text-foreground leading-relaxed text-lg">
                All leadership decisions are grounded in Scripture and guided by the Holy Spirit.
              </p>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Accountability & Transparency</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We operate with openness and accountability, ensuring trust and integrity in all we do.
              </p>
            </div>

            <div className="card-surface p-8">
              <h3 className="text-2xl font-bold text-primary mb-3 font-display">Collaborative Ministry</h3>
              <p className="text-foreground leading-relaxed text-lg">
                We believe in shared leadership, empowering others to use their gifts and serve effectively.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}

