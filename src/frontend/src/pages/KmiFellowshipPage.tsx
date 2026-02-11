export default function KmiFellowshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <img
          src="/assets/generated/kmi-unity-hero.dim_2400x1200.jpg"
          alt="KMI Fellowship"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-display font-bold mb-4">
            KMI Fellowship
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kingdom Ministries International<br />
            A Fellowship of Churches and Ministries United in Advancing the Kingdom of God
          </p>
          <div className="mt-6 h-1 w-32 bg-gold mx-auto" />
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-center mb-8 text-royal-purple">
            Fellowship Vision
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80 mb-4">
            Kingdom Ministries International Fellowship is a fellowship of churches, ministries, and leaders committed to apostolic order and prophetic ministry under the leadership of Apostle and Prophet Dr. V. Postell Jr.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-4">
            KMI provides covering, accountability, and support for ministers and churches across the Body of Christ.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            Our fellowship operates through various colleges and boards that oversee different aspects of the ministry, ensuring proper order, training, and spiritual development for all members.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="border-t-2 border-gold/30 mb-12" />
          <h2 className="text-4xl font-display font-bold text-center mb-4 text-royal-purple">
            Joint Colleges & Assemblies
          </h2>
          <p className="text-center text-lg mb-12 text-foreground/70">
            Governing bodies providing oversight, development, and spiritual accountability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Joint College of Apostles', desc: 'Overseeing apostolic order in the church and church planting initiatives.' },
              { title: 'Joint College of Prophets', desc: 'Providing prophetic oversight, activation, and training.' },
              { title: 'Joint College of Bishops', desc: 'Episcopal oversight and spiritual governance within the fellowship.' },
              { title: 'Joint College of Pastors', desc: 'Shepherding leaders and strengthening pastoral care across ministries.' },
              { title: 'Ministers Assembly', desc: 'Fellowship, development, and accountability for licensed and ordained ministers.' },
              { title: 'Teachers Association', desc: 'Biblical education, doctrinal discipline, and theological development.' },
              { title: 'Armor Bearers Assembly', desc: 'Supporting and serving ministry leaders with dedication and spiritual protection.' },
            ].map((college, index) => (
              <div key={index} className="bg-cream border-2 border-gold/30 rounded-lg p-6">
                <h3 className="text-xl font-display font-bold mb-3 text-royal-purple">
                  {college.title}
                </h3>
                <p className="text-foreground/80">
                  {college.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
