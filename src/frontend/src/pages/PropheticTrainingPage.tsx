export default function PropheticTrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <img
          src="/assets/generated/prophetic-training-hero.dim_2400x1200.jpg"
          alt="Prophetic Training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-purple/80 to-charcoal/70" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-display font-bold mb-4">
            🎓 Prophetic Training
          </h1>
          <p className="text-xl">
            Raising and equipping prophetic voices for this generation.
          </p>
          <div className="mt-6 h-1 w-32 bg-gold mx-auto" />
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-display font-bold text-center mb-6 text-royal-purple">
            School of the Prophets
          </h2>
          <p className="text-center text-xl mb-12 text-foreground/80">
            Equipping believers to hear, receive, and deliver the prophetic word of the Lord — developing prophetic voices.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gold">
                School of the Prophets
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-foreground/80">
                The School of the Prophets is the training ground for those called to prophetic ministry under the leadership of Apostle and Prophet Dr. Virgil V. Postell Jr.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-foreground/80">
                Students are equipped to operate in the gifts of the Spirit with accuracy, integrity, and humility.
              </p>
              <h4 className="text-xl font-bold mb-3 text-royal-purple">What You Will Learn</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Biblical foundation of prophecy</li>
                <li>• How to discern and test prophetic words</li>
                <li>• Character development for prophetic ministry</li>
                <li>• Practical activation and mentorship</li>
              </ul>
            </div>
            <div>
              <img
                src="/assets/generated/leader-virgil-postell.dim_1200x1500.jpg"
                alt="Apostle & Prophet Dr. Virgil V. Postell Jr."
                className="w-full rounded-lg shadow-lg border-4 border-gold"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="border-t-2 border-gold/30 mb-12" />
          <h2 className="text-3xl font-display font-bold mb-6 text-royal-purple">
            Class Schedule
          </h2>
          <p className="text-xl mb-4 text-foreground/80">
            Join us Monday through Thursday<br />
            7:15 PM Eastern Standard Time
          </p>
          <p className="text-lg mb-8 text-foreground/70">
            Classes are conducted via Conference Call, making it accessible from anywhere.
          </p>
          <div className="bg-cream border-2 border-gold rounded-lg p-8 mb-8">
            <p className="text-2xl font-bold mb-2">
              <a href="tel:667-770-1245" className="text-gold hover:underline">
                Call: 667-770-1245
              </a>
            </p>
            <p className="text-xl font-semibold text-foreground/80">
              Access Code: 9538941#
            </p>
          </div>
          <a
            href="tel:667-770-1245"
            className="inline-block px-12 py-4 bg-gold text-charcoal hover:bg-gold/90 rounded-lg font-bold text-xl transition-all duration-300 hover:shadow-gold-glow"
          >
            📞 Call Now
          </a>
          <p className="text-sm mt-6 text-foreground/60">
            Accessible worldwide. Join from anywhere and grow in prophetic clarity and spiritual maturity.
          </p>
        </div>
      </section>
    </div>
  );
}
