export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-4 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Contact <span className="text-red-600">Kanhaiya Power Tools</span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-xl mx-auto text-lg">
            AC Repair, Chimney Repair, Cooler Repair, Fan Repair, House Wiring and Electrical Services in Patna.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Cards */}
          <div className="space-y-5">
            {/* Phone */}
            <a
              href="tel:+918434642063"
              className="group flex items-center gap-5 p-6 bg-gradient-to-r from-red-50 to-red-100/50 border border-red-200 rounded-2xl hover:from-red-100 hover:to-red-200/50 transition-all card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Phone Number</p>
                <p className="text-xl font-bold text-gray-900">+91 84346 42063</p>
                <p className="text-sm text-gray-500 mt-0.5">Available 24/7 for emergencies</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918434642063?text=Hello%2C%20I%20need%20appliance%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 rounded-2xl hover:from-green-100 hover:to-green-200/50 transition-all card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="text-xl font-bold text-gray-900">+91 84346 42063</p>
                <p className="text-sm text-gray-500 mt-0.5">Chat with us anytime</p>
              </div>
            </a>

            {/* Address */}
            <div className="group flex items-center gap-5 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Address</p>
                <p className="text-lg font-bold text-gray-900">Bairiya Four Lane</p>
                <p className="text-gray-600">Patna – 800007, Bihar, India</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-5 p-6 bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">Working Hours</p>
                <p className="text-lg font-bold text-gray-900">Mon – Sun: 8:00 AM – 8:00 PM</p>
                <p className="text-gray-500 text-sm mt-0.5">Emergency calls accepted 24/7</p>
              </div>
            </div>
          </div>

          {/* Right: Map placeholder + CTA */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                title="Kanhaiya Power Tools Location"
                src="https://maps.google.com/maps?q=Bairiya%20Four%20Lane%20Patna%20800007&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="relative text-center px-8">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 shadow-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-bold text-gray-800 text-lg">Kanhaiya Power Tools House</p>
              <p className="text-gray-600 mt-1">Bairiya Four Lane, Patna – 800007</p>
              <a
                href="https://www.google.com/maps/search/Bairiya+Four+Lane+Patna+800007"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Quick contact card */}
          <div className="gradient-hero rounded-2xl p-7 text-white">
            <h3 className="text-xl font-bold mb-2">
              Need Repair Service?
            </h3>

            <p className="text-blue-200 text-sm mb-5 leading-relaxed">
              Call or WhatsApp now for fast and reliable repair services in Patna and nearby areas.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918434642063"
                className="flex items-center justify-center gap-3 py-3.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors"
              >
                📞 Call: +91 84346 42063
              </a>
              <a
                href="https://wa.me/918434642063?text=Hello%2C%20I%20need%20a%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp: +91 84346 42063
              </a>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}
