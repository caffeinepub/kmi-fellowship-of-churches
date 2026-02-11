import { Link } from '@tanstack/react-router';
import { BookOpen, Users, Heart, Globe, Music, Shield, Video, Briefcase } from 'lucide-react';

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 text-royal-purple">
            Get Involved
          </h1>
          <p className="text-xl text-foreground/80">
            Discover your place in the Body of Christ and use your gift to serve.
          </p>
          <div className="mt-6 h-1 w-32 bg-gold mx-auto" />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-royal-purple">
            Every Member Has a Ministry
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80 mb-4">
            At The Gathering, we believe every believer has been gifted by God for service in the Body of Christ.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-4">
            Whether you are called to teach, serve, worship, lead, or support, there is a place for you to use your gifts and grow in your calling.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 font-semibold">
            You are not just called to attend — you are called to build.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-4 text-royal-purple">
            Ministry Auxiliaries
          </h2>
          <p className="text-center text-lg mb-12 text-foreground/70">
            Find your place of service and make an impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: BookOpen, title: 'Teaching Ministry', desc: 'Equip and disciple believers through biblical education.' },
              { icon: Users, title: "Men's Ministry", desc: 'Building godly men through fellowship, accountability, and leadership development.' },
              { icon: Heart, title: "Women's Ministry", desc: 'Empowering women to walk confidently in their calling and spiritual authority.' },
              { icon: Globe, title: 'Evangelism', desc: 'Sharing the Gospel and winning souls for Christ through outreach and witness.' },
              { icon: Music, title: 'Praise & Choir', desc: "Leading worship through song and music, ushering the congregation into God's presence." },
              { icon: Shield, title: 'Armor Bearers', desc: 'Serving and protecting ministry leaders while supporting prayer and altar ministry.' },
              { icon: Video, title: 'Media & Digital', desc: 'Expanding the reach of the ministry through technology, livestream, and digital content.' },
              { icon: Briefcase, title: 'Administration', desc: 'Supporting ministry operations, logistics, and organizational excellence.' },
            ].map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <div key={index} className="bg-white border-2 border-gold/30 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold mb-4">
                    <Icon size={24} className="text-charcoal" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                    {ministry.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {ministry.desc}
                  </p>
                  <Link to="/prayer-request" className="text-gold hover:text-gold/80 font-semibold">
                    Learn More →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-royal-purple text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Serve?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Contact us to learn more about how you can get involved in ministry at The Gathering. We would love to help you discover your gifts and find your place.
          </p>
          <Link
            to="/prayer-request"
            className="inline-block px-8 py-4 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-gold-glow"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
