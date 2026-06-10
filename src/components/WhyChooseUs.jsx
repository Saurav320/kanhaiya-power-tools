const REASONS = [
  {
    icon: "⚡",
    title: "Fast Service",
    desc: "Quick response and timely repair service.",
  },
  {
    icon: "💰",
    title: "Affordable Charges",
    desc: "Reasonable pricing with no hidden charges.",
  },
  {
    icon: "🔧",
    title: "Experienced Work",
    desc: "Years of experience in repair and electrical services.",
  },
  {
    icon: "✅",
    title: "Trusted Service",
    desc: "Customer satisfaction is our first priority.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 text-sm font-semibold mb-4 border border-red-400/30">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Why Choose{" "}
            <span className="text-yellow-300">
              Kanhaiya Power Tools?
            </span>
          </h2>

          <p className="text-blue-300 max-w-xl mx-auto text-lg">
            Reliable repair services with fast response and affordable pricing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-blue-300 mb-5 text-lg">
            Need AC, Cooler, Chimney or Electrical Repair?
          </p>

          <a
            href="tel:+918434642063"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl"
          >
            📞 Call Now: +91 84346 42063
          </a>
        </div>
      </div>
    </section>
  );
}