export default function LearningStudyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-16 bg-gradient-to-br from-cream to-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 text-royal-purple">
            Learning & Study
          </h1>
          <p className="text-xl text-foreground/80">
            Dig deeper into God's Word with multiple translations, study tools, and resources.
          </p>
          <div className="mt-6 h-1 w-32 bg-gold mx-auto" />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-royal-purple text-center">
            Bible Translations
          </h2>
          <p className="text-center text-lg mb-8 text-foreground/70">
            Access multiple translations to gain a deeper understanding of Scripture.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['KJV', 'ASV', 'NLT', 'NIV', 'ESV', 'Amplified', 'The Message', 'HCSB'].map((translation) => (
              <button
                key={translation}
                className="px-6 py-4 bg-cream border-2 border-gold/30 rounded-lg font-semibold hover:bg-gold hover:text-charcoal transition-all"
              >
                {translation}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold mb-4 text-royal-purple">
            AI Biblical Research Tool
          </h2>
          <p className="text-lg mb-8 text-foreground/70">
            Search Scripture, themes, historical context, prophetic insight, and theological topics.
          </p>
          <div className="bg-white border-2 border-gold rounded-lg p-6 shadow-lg">
            <input
              type="text"
              placeholder="Ask a question about Scripture..."
              className="w-full px-6 py-4 border-2 border-gold/30 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <div className="mt-4 text-sm text-left text-foreground/60 space-y-1">
              <p>• Explain the prophetic significance of Isaiah 61.</p>
              <p>• Compare KJV and NIV of Romans 8.</p>
              <p>• What is the Greek meaning of agape?</p>
              <p>• Explain apostolic order in the New Testament.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
