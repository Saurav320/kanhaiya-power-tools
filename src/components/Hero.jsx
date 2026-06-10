export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const floatingIcons = [
    { top: "15%", left: "8%", icon: "⚡", size: "text-4xl", delay: "0s" },
    { top: "25%", right: "12%", icon: "🔧", size: "text-3xl", delay: "0.5s" },
    { top: "60%", left: "5%", icon: "❄️", size: "text-3xl", delay: "1s" },
    { bottom: "20%", right: "8%", icon: "🔌", size: "text-4xl", delay: "1.5s" },
    { top: "70%", right: "20%", icon: "🔩", size: "text-2xl", delay: "0.8s" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute top-32 left-32 w-40 h-40 rounded-full border border-white" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border-2 border-white" />
        <div className="absolute bottom-40 right-32 w-48 h-48 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white opacity-30" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.size} opacity-20 animate-float`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              animationDelay: item.delay,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-white text-sm font-medium">
            Available 24/7 for Emergency Repairs
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Kanhaiya{" "}
          <span className="text-yellow-300">Power Tools</span>
          <br />
          <span className="text-red-300">Sales & Repair Services</span>
        </h1>

        <p className="text-xl sm:text-2xl text-blue-100 mb-4 font-medium">
          Kanhaiya Power Tools & Repair Services
        </p>

        <p className="text-base text-blue-200 mb-12 max-w-xl mx-auto">
          Sales, repair and maintenance services for all types of power tools.
          Quality service at reasonable prices.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <a
            href="tel:+918434642063"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 text-white font-bold text-lg shadow-2xl hover:bg-red-700 transition-all hover:scale-105"
          >
            📞 Call Now: +91 84346 42063
          </a>

          <a
            href="https://wa.me/918434642063"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg shadow-2xl hover:bg-green-600 transition-all hover:scale-105"
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "7+", label: "Services Offered" },
            { value: "5+", label: "Years Experience" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl py-5 px-3 text-center"
            >
              <div className="text-2xl font-extrabold text-yellow-300">
                {stat.value}
              </div>
              <div className="text-xs text-blue-200 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll */}
        <button
          onClick={() => scrollTo("#services")}
          className="mt-12 flex flex-col items-center gap-2 mx-auto text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Explore Services
          </span>

          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}