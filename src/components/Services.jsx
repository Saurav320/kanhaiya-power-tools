const SERVICES = [
  {
    image: "/images/ac.jpg",
    title: "AC Repair",
    desc: "AC installation, servicing, gas refilling and repair.",
    color: "from-blue-600 to-indigo-700",
    border: "border-indigo-200",
  },
  {
    image: "/images/chimney.jpg",
    title: "Chimney Repair",
    desc: "Kitchen chimney cleaning, servicing and repair.",
    color: "from-red-500 to-red-700",
    border: "border-red-200",
  },
  {
    image:
      "/images/cooler.jpg",
    title: "Cooler Repair",
    desc: "Cooler motor, pump and maintenance service.",
    color: "from-blue-500 to-cyan-700",
    border: "border-blue-200",
  },

  {
    image: "/images/washing.jpg",
    title: "Washing Machine Repair",
    desc: "Washing machine installation, servicing and repair for all brands.",
    color: "from-cyan-500 to-cyan-700",
    border: "border-cyan-200",
  },
  {
    image:
      "/images/wiring.jpg",
    title: "House Wiring",
    desc: "House wiring, rewiring, MCB and switchboard installation.",
    color: "from-yellow-500 to-amber-600",
    border: "border-yellow-200",
  },
  {
    image: "/images/plumbing.jpg",
    title: "Plumbing Services",
    desc: "Pipe fitting, leakage repair, tap installation and maintenance services.",
    color: "from-teal-500 to-teal-700",
    border: "border-teal-200",
  },

  {
    image:
      "/images/electrical.jpg",
    title: "Other Electrical Services",
    desc: "Mixer, Iron, Motor, Pump and all electrical appliance repairs.",
    color: "from-purple-500 to-purple-700",
    border: "border-purple-200",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-4 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 section-title">
            Our Services
          </h2>
          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-lg">
            Professional repair and maintenance services delivered by skilled technicians at your doorstep.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-2xl border ${service.border} overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300`}
            >
              {/* Top Gradient Bar */}
              <div
                className={`h-1 bg-gradient-to-r ${service.color}`}
              />

              {/* Service Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {service.desc}
                </p>

                <a
                  href="tel:+918434642063"
                  className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
                >
                  Book Now
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl gradient-hero p-10 text-center text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-2">
            Need Repair Service?
          </h3>

          <p className="text-blue-200 mb-6">
            AC, Chimney, Cooler, Fan, House Wiring aur Electrical Repair Services. Available in Bihar and other states on request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918434642063"
              className="px-8 py-3.5 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
            >
              📞 +91 84346 42063
            </a>
            <a
              href="https://wa.me/918434642063"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
