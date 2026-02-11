import { BookOpen, Heart, Users, Flame, Crown, Shield } from 'lucide-react';

export default function AboutMinistryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-cream py-16 border-b-2 border-gold">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 text-royal-purple">
            About the Ministry
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Elohim International Revival Center & KMI Fellowship of Churches<br />
            Equipping and releasing believers for Kingdom impact.
          </p>
          <div className="mt-6 h-1 w-32 bg-gold mx-auto" />
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-royal-purple">
            Our Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gold">
                Ministry Vision
              </h3>
              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                The Gathering exists to create a prophetic and apostolic community that raises up, equips, and releases believers to fulfill their divine purpose in this generation.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                We envision a body of believers walking in the fullness of the spiritual gifts, operating in prophetic revelation, and advancing the Kingdom of God through love, power, and demonstration of the Spirit.
              </p>
            </div>
            <div>
              <img
                src="/assets/generated/about-vision-image.dim_1200x1400.jpg"
                alt="Ministry Vision"
                className="w-full rounded-lg shadow-lg border-2 border-gold/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apostolic & Prophetic Mandate */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-royal-purple text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-display font-bold mb-4">
                Apostolic Foundation
              </h3>
              <p className="text-lg leading-relaxed opacity-95 mb-4">
                We are committed to establishing biblical foundations, building according to divine pattern, and setting things in order according to the Word of God.
              </p>
              <p className="text-lg leading-relaxed opacity-95">
                The apostolic mandate calls us to pioneer new works, plant churches, and raise up leaders for Kingdom advancement.
              </p>
            </div>

            <div className="bg-burgundy text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-display font-bold mb-4">
                Prophetic Voice
              </h3>
              <p className="text-lg leading-relaxed opacity-95 mb-4">
                We embrace the prophetic dimension of ministry, hearing the voice of God and declaring His word with boldness.
              </p>
              <p className="text-lg leading-relaxed opacity-95">
                Through prophetic insight, we edify the body, provide direction, and release hope to the nations through revelation and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gradient-to-br from-cream to-gold/10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6 text-royal-purple">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed text-foreground/80">
            To gather believers into a Spirit-filled community where they are equipped through the Word, activated in their gifts, and released to transform their spheres of influence for the glory of God.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-4 text-royal-purple">
            Core Values
          </h2>
          <p className="text-center text-lg mb-12 text-foreground/70">
            The principles that guide our ministry and community.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-cream rounded-lg border-2 border-gold/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <BookOpen size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                Biblical Foundation
              </h3>
              <p className="text-foreground/80">
                We are rooted in Scripture and committed to building according to the unchanging Word of God.
              </p>
            </div>

            <div className="text-center p-6 bg-cream rounded-lg border-2 border-gold/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Heart size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                Love & Compassion
              </h3>
              <p className="text-foreground/80">
                Walking in the love of Christ and demonstrating compassion toward the church and the community.
              </p>
            </div>

            <div className="text-center p-6 bg-cream rounded-lg border-2 border-gold/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Users size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                Community
              </h3>
              <p className="text-foreground/80">
                Building authentic relationships and strengthening the Body of Christ through fellowship and unity.
              </p>
            </div>

            <div className="text-center p-6 bg-cream rounded-lg border-2 border-gold/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Flame size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                Spirit-Led
              </h3>
              <p className="text-foreground/80">
                Operating in the gifts and power of the Holy Spirit with sensitivity to His leading.
              </p>
            </div>

            <div className="text-center p-6 bg-cream rounded-lg border-2 border-gold/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Crown size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                Kingdom Focus
              </h3>
              <p className="text-foreground/80">
                Advancing God's Kingdom on earth as it is in heaven.
              </p>
            </div>

            <div className="text-center p-6 bg-cream rounded-lg border-2 border-gold/30">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold mb-4">
                <Shield size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                Integrity
              </h3>
              <p className="text-foreground/80">
                Walking in righteousness and truth in all that we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
