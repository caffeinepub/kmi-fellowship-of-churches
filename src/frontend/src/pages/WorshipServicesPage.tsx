export default function WorshipServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="/assets/generated/worship-services-hero.dim_2400x1200.jpg"
          alt="Worship & Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-display font-bold mb-4">
            Worship & Services
          </h1>
          <p className="text-xl">
            Join us as we gather to worship, learn, and encounter the presence of God.
          </p>
          <div className="mt-6 h-1 w-32 bg-gold mx-auto" />
        </div>
      </section>

      {/* Online Services */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4 text-royal-purple">
                Sabbath Service (Online)
              </h2>
              <p className="text-xl font-semibold mb-4 text-gold">
                Friday – 7:15 PM Eastern Standard Time
              </p>
              <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                Join us online for our weekly Sabbath Service experience featuring powerful worship, prophetic ministry, and teaching of God's Word.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-foreground/80">
                Our Sabbath Services are held on our Ministry Conference Line.
              </p>
              <div className="bg-white border-2 border-gold/30 rounded-lg p-6 mb-6">
                <p className="font-semibold text-lg mb-2 text-royal-purple">To Join:</p>
                <p className="text-2xl font-bold mb-2">
                  <a href="tel:667-770-1245" className="text-gold hover:underline">
                    Dial: 667-770-1245
                  </a>
                </p>
                <p className="text-xl font-semibold text-foreground/80">
                  Access Code: 9538941#
                </p>
              </div>
              <p className="text-base text-foreground/70">
                Join us every Friday at 7:15 PM EST.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="tel:667-770-1245"
                className="inline-block px-12 py-6 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold text-xl transition-all duration-300 hover:shadow-gold-glow"
              >
                Join Sabbath Service Live
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* In-Person Service */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="border-t-2 border-gold/30 mb-12" />
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4 text-royal-purple">
                The Gathering (In Person)
              </h2>
              <p className="text-xl font-semibold mb-4 text-gold">
                Second & Fourth Sundays – 6:00 PM Eastern Standard Time
              </p>
              <div className="mb-6">
                <p className="text-lg leading-relaxed mb-4 text-foreground/80">
                  13704 Northwest 150th Avenue<br />
                  Alachua, Florida 32615<br />
                  Next to Alachua Elementary School
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                Experience the power of corporate worship and prophetic ministry in person. Join our community for a transformative encounter in the presence of God.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=13704+Northwest+150th+Avenue,+Alachua,+FL+32615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
              >
                Get Directions
              </a>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden border-2 border-gold/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-82.4567!3d29.7890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ3JzIwLjQiTiA4MsKwMjcnMjQuMSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Never Miss a Service */}
      <section className="py-16 bg-royal-purple text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-6">
            Never Miss a Service
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Subscribe to receive notifications about upcoming services, special events, and livestream alerts.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-6 py-4 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold transition-all duration-300 hover:shadow-gold-glow"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            We respect your privacy. No spam. Ever.
          </p>
        </div>
      </section>
    </div>
  );
}
