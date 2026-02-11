import { Link } from '@tanstack/react-router';

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-royal-purple to-charcoal py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4">
            Leadership
          </h1>
          <p className="text-xl opacity-95">
            Serving with Apostolic Order and Prophetic Vision
          </p>
          <div className="mt-6 h-1 w-32 bg-gold mx-auto" />
        </div>
      </section>

      {/* Senior Leader */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <img
                src="/assets/generated/leader-virgil-postell.dim_1200x1500.jpg"
                alt="Apostle & Prophet Dr. Virgil Postell, Jr."
                className="w-full rounded-lg shadow-lg border-4 border-gold"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-2 text-royal-purple">
                Senior Leader
              </h2>
              <h3 className="text-2xl font-display font-bold mb-6 text-gold">
                Apostle & Prophet Dr. Virgil Postell, Jr.
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                <p>
                  Apostle and Prophet Dr. Virgil Postell, Jr. carries a profound mantle for prophetic ministry and apostolic leadership, called to raise up a generation of Spirit-filled believers.
                </p>
                <p>
                  His ministry is marked by accurate prophetic utterance, revelatory teaching, and a heart committed to equipping the saints for the work of ministry.
                </p>
                <p>
                  Under his leadership, Elohim's International Revival Center has become a hub for prophetic training, Kingdom advancement, and community transformation.
                </p>
                <p>
                  His vision extends beyond local ministry to impacting nations through the School of the Prophets and Kingdom Ministries International Fellowship.
                </p>
              </div>
            </div>
          </div>

          {/* Ministry Schedule */}
          <div className="mt-12 max-w-4xl mx-auto bg-white border-2 border-gold rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold mb-6 text-royal-purple text-center">
              Ministry Schedule
            </h3>
            <div className="mb-6">
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span>In Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-400" />
                  <span>Out of Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  <span>Traveling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-royal-purple" />
                  <span>Outreach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500" />
                  <span>Teaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-burgundy" />
                  <span>Preaching</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/schedule-meeting"
                className="inline-block px-8 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fellowship Leaders */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="border-t-2 border-gold/30 pt-12 mb-12" />
          <h2 className="text-4xl font-display font-bold text-center mb-4 text-royal-purple">
            Fellowship Leaders
          </h2>
          <p className="text-center text-lg mb-12 text-foreground/70">
            Our dedicated team of leaders serving the Body of Christ.
          </p>
          <p className="text-center text-base text-foreground/60 max-w-3xl mx-auto">
            These leaders serve under the apostolic covering and leadership of Apostle & Prophet Dr. Virgil Postell, Jr., including Apostles, Prophets, Bishops, Pastors, Evangelists, Teachers, and Ministers.
          </p>
        </div>
      </section>

      {/* Apostolic Order */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center mb-6 text-royal-purple">
            Apostolic Order & Covering
          </h2>
          <p className="text-lg leading-relaxed text-center text-foreground/80">
            Elohim's International Revival Center and KMI Fellowship of Churches operates under apostolic order, where leaders are equipped, developed, and released according to biblical structure and divine calling.
          </p>
        </div>
      </section>
    </div>
  );
}
