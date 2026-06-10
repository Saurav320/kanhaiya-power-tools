export default function About() {
  const features = [
    {
      icon: "🔧",
      title: "Experienced Service",
      desc: "Years of practical experience in appliance and electrical repairs.",
    },
    {
      icon: "✅",
      title: "Quality Work",
      desc: "Reliable repair solutions with attention to every detail.",
    },
    {
      icon: "⚡",
      title: "Fast Service",
      desc: "Quick response and timely completion of repair work.",
    },
    {
      icon: "💰",
      title: "Reasonable Charges",
      desc: "Affordable pricing with complete transparency.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="gradient-hero aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-white p-10">
                  <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 mx-auto flex items-center justify-center mb-6 shadow-xl">
                    <span className="text-5xl">🔧</span>
                  </div>

                  <p className="text-3xl font-extrabold text-yellow-300">
                    5+ Years
                  </p>

                  <p className="text-blue-200 text-lg mt-1">
                    Trusted Repair Service
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-black">1000+</div>
              <div className="text-xs">Repairs Completed</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-blue-700 text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-black">5+</div>
              <div className="text-xs">Years Experience</div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Trusted <span className="text-red-600">Repair Services</span> in
              Patna
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              <strong>Kanhaiya Power Tools House</strong> provides AC Repair,
              Chimney Repair, Cooler Repair, Fan Repair, House Wiring and
              Electrical Services in Patna and nearby areas.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Fast service, reasonable pricing and customer satisfaction are our
              priorities. Reliable solutions are provided for homes, shops and
              offices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 rounded-xl p-4">
                <h4 className="font-bold text-red-600 text-xl">5+</h4>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-bold text-blue-600 text-xl">1000+</h4>
                <p className="text-gray-600 text-sm">Repairs Completed</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <span className="text-2xl">{item.icon}</span>

                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {item.title}
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918434642063"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-all"
              >
                📞 Call Now
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-blue-700 text-blue-700 font-bold hover:bg-blue-700 hover:text-white transition-all"
              >
                View Services →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}