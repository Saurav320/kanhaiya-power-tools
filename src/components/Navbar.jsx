import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <div>
              <div
                className={`font-bold text-base leading-tight transition-colors ${
                  scrolled ? "text-blue-800" : "text-white"
                }`}
              >
                Kanhaiya
              </div>

              <div
                className={`text-xs font-medium leading-tight transition-colors ${
                  scrolled ? "text-red-600" : "text-red-300"
                }`}
              >
                Power Tools House
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    : "text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href="tel:+918434642063"
              className="ml-3 px-5 py-2 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
            >
              📞 Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/15"
            }`}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3 animate-slide-down">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-5 py-3.5 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 last:border-0"
                >
                  {link.label}
                </button>
              ))}

              <div className="px-5 py-3 bg-gray-50">
                <a
                  href="tel:+918434642063"
                  className="block w-full text-center py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                >
                  📞 Call Now: +91 84346 42063
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}