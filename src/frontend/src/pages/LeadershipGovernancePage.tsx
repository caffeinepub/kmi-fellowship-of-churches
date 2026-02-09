import PageSection from '../components/PageSection';
import { PageTitle, SectionTitle, SubsectionTitle, BodyText } from '../components/Typography';
import LeadershipAvailability from '../components/LeadershipAvailability';
import { Shield, Users, BookOpen, Scale } from 'lucide-react';

export default function LeadershipGovernancePage() {
  return (
    <>
      <PageSection>
        <PageTitle>Leadership & Governance</PageTitle>
        <p className="text-xl text-[oklch(var(--anointed-purple))] font-semibold mb-6">
          KMI Fellowship of Churches • Elohim's International Revival Center
        </p>
      </PageSection>

      {/* Presiding Prelate */}
      <PageSection background="muted">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-[oklch(var(--royal-blue))] rounded-full flex items-center justify-center">
                <Shield className="text-[oklch(var(--flame-gold))]" size={64} />
              </div>
              <h3 className="text-xl font-bold text-[oklch(var(--royal-blue))] mb-2">Presiding Prelate</h3>
              <p className="text-sm text-muted-foreground">Chief Apostle & Prophet</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <SubsectionTitle>Dr. Virgil Leo Postell Jr.</SubsectionTitle>
            <p className="text-lg font-semibold text-[oklch(var(--anointed-purple))] mb-4">
              Chief Apostle and Prophet
            </p>
            <BodyText>
              Dr. Virgil Leo Postell Jr. serves as the Chief Apostle and Prophet of KMI Fellowship of Churches and the
              Senior Pastor of Elohim's International Revival Center. As Presiding Prelate, he provides spiritual
              oversight, apostolic governance, and prophetic leadership for the fellowship and its affiliated
              ministries.
            </BodyText>
            <BodyText>
              Dr. Postell is called to equip leaders, establish order within the Body of Christ, and advance the work of
              the Kingdom through sound doctrine, spiritual accountability, and Spirit-led ministry. His leadership
              emphasizes biblical integrity, prayer, discipleship, and the proper functioning of ministry offices as
              outlined in Scripture.
            </BodyText>
            <BodyText className="mb-0">
              As Chief Apostle and Prophet, Dr. Postell holds the highest spiritual authority within KMI Fellowship of
              Churches, providing direction, covering, and final oversight for all Joint Colleges, councils, and
              assemblies operating under the fellowship.
            </BodyText>
          </div>
        </div>
      </PageSection>

      {/* Availability Calendar */}
      <PageSection>
        <LeadershipAvailability />
      </PageSection>

      {/* Governance Structure */}
      <PageSection background="muted">
        <SectionTitle>Apostolic & Ministerial Governance Structure</SectionTitle>
        <BodyText>
          Under the leadership of the Chief Apostle and Prophet, KMI Fellowship of Churches operates through a unified
          leadership framework designed to train, govern, and support ministry leaders with clarity and accountability.
        </BodyText>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Joint Colleges */}
          <div className="bg-white p-8 rounded-lg">
            <Users className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <SubsectionTitle>Joint Colleges</SubsectionTitle>
            <p className="text-sm text-muted-foreground mb-4">(Operating under Apostolic Oversight)</p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Joint College of Apostles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Joint College of Prophets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Joint College of Evangelists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Joint College of Pastors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Joint College of Bishops <span className="text-sm text-muted-foreground italic">(Positions currently vacant)</span></span>
              </li>
            </ul>
            <p className="text-sm text-foreground mt-4">
              Each Joint College functions to develop, affirm, and govern individuals called to their respective offices
              while remaining under the spiritual authority of the Chief Apostle and Prophet.
            </p>
          </div>

          {/* Schools of Ministry */}
          <div className="bg-white p-8 rounded-lg">
            <BookOpen className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <SubsectionTitle>Schools of Ministry</SubsectionTitle>
            <ul className="space-y-2 text-foreground mt-4">
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>School of Teachers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>School of Ministers</span>
              </li>
            </ul>
            <p className="text-sm text-foreground mt-4">
              These schools exist to provide biblical instruction, doctrinal grounding, and practical ministry training
              for those preparing to serve within the fellowship and local churches.
            </p>
          </div>

          {/* Councils & Assemblies */}
          <div className="bg-white p-8 rounded-lg">
            <Users className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <SubsectionTitle>Councils & Assemblies</SubsectionTitle>
            <ul className="space-y-2 text-foreground mt-4">
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Council of Deacons & Deaconesses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Board of Ruling Elders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[oklch(var(--flame-gold))] mt-1">•</span>
                <span>Joint College of Armor Bearers (Armor Bearers Assembly)</span>
              </li>
            </ul>
            <p className="text-sm text-foreground mt-4">
              These bodies serve in support, governance, service, and leadership assistance, helping maintain order,
              care, and operational excellence within the fellowship.
            </p>
          </div>

          {/* Episcopal Positions */}
          <div className="bg-white p-8 rounded-lg">
            <Shield className="text-[oklch(var(--flame-gold))] mb-4" size={40} />
            <SubsectionTitle>Episcopal Positions</SubsectionTitle>
            <p className="text-foreground mt-4">
              Bishops will be appointed to sit within the Joint College of Bishops as the fellowship grows. At this
              time, these positions remain vacant and will be filled through prayer, discernment, and apostolic
              appointment under the authority of the Chief Apostle and Prophet.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Tribunal */}
      <PageSection>
        <div className="bg-gradient-to-br from-[oklch(var(--anointed-purple))] to-[oklch(var(--royal-blue))] text-white p-8 rounded-lg">
          <Scale className="mb-4" size={48} />
          <SubsectionTitle className="text-white">Tribunal & Tribunal of Wisdom</SubsectionTitle>
          <BodyText className="text-white/90">
            KMI Fellowship of Churches maintains a Tribunal and a Tribunal of Wisdom to address internal ministry
            matters, including leadership concerns, doctrinal issues, and internal church affairs. These tribunals
            operate with prayer, biblical counsel, and accountability to ensure integrity and proper governance within
            the fellowship.
          </BodyText>
        </div>
      </PageSection>

      {/* Accountability & Legal Compliance */}
      <PageSection background="muted">
        <div className="bg-white p-8 rounded-lg border-l-4 border-[oklch(var(--revival-orange))]">
          <SubsectionTitle>Accountability & Legal Compliance</SubsectionTitle>
          <BodyText>
            Any matters involving criminal activity, abuse, or legal violations are not handled internally. Such matters
            are reported immediately and directly to the appropriate local law enforcement or civil authorities in
            accordance with the law. KMI Fellowship of Churches is committed to transparency, safety, and legal
            responsibility.
          </BodyText>
        </div>
      </PageSection>

      {/* Leadership Philosophy */}
      <PageSection>
        <SectionTitle>Leadership Philosophy</SectionTitle>
        <BodyText>Our leadership structure is designed to:</BodyText>
        <ul className="space-y-3 text-foreground text-lg mt-4">
          <li className="flex items-start gap-3">
            <span className="text-[oklch(var(--flame-gold))] text-2xl">•</span>
            <span>Honor biblical order</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[oklch(var(--flame-gold))] text-2xl">•</span>
            <span>Protect the integrity of ministry</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[oklch(var(--flame-gold))] text-2xl">•</span>
            <span>Equip leaders for service</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[oklch(var(--flame-gold))] text-2xl">•</span>
            <span>Provide accountability and spiritual covering</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[oklch(var(--flame-gold))] text-2xl">•</span>
            <span>Serve the Body of Christ with wisdom and humility</span>
          </li>
        </ul>
      </PageSection>
    </>
  );
}
