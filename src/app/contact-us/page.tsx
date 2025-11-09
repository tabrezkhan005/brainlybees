import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';

export default function ContactUsPage() {
  const contactMethods = [
    {
      title: "WhatsApp Support",
      description: "Get instant help through WhatsApp chat",
      icon: "💬",
      contact: "+91 98379 98535",
      action: "Chat Now",
      color: "from-green-400 to-green-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Email Support",
      description: "Send us detailed inquiries via email",
      icon: "📧",
      contact: "kidcubeglobal@gmail.com",
      action: "Send Email",
      color: "from-blue-400 to-blue-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Schedule Consultation",
      description: "Book a free consultation session",
      icon: "📅",
      contact: "Free 30-minute session",
      action: "Book Now",
      color: "from-purple-400 to-purple-500",
      bgColor: "from-purple-50 to-pink-50"
    }
  ];

  const officeInfo = [
    {
      title: "Global Headquarters",
      address: "Serving students worldwide through our online platform",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM (IST)",
      icon: "🌍"
    },
    {
      title: "Support Hours",
      address: "24/7 WhatsApp support available",
      hours: "Email responses within 24 hours",
      icon: "🕒"
    },
    {
      title: "Languages Supported",
      address: "English, Hindi, and regional languages",
      hours: "Multilingual support team available",
      icon: "🗣️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 via-yellow-100 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z"
                  fill="url(#heroWave1)" opacity="0.4"/>
            <defs>
              <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-orange-200 shadow-lg mb-6">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-orange-700 font-bold text-sm">Get in Touch</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
                Contact
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 mt-2">
                  KidCube Global
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                We&apos;re here to help you and your child succeed. Reach out to us with any questions, concerns, or to learn more about our programs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 font-poppins">Quick Response</div>
                    <div className="text-gray-600">We respond within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💝</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 font-poppins">Caring Support</div>
                    <div className="text-gray-600">Friendly and helpful team</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🌟</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 font-poppins">Expert Guidance</div>
                    <div className="text-gray-600">Educational specialists available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-orange-200">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/teacher-with-all-kids.png"
                      alt="Contact KidCube Global"
                      width={400}
                      height={384}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-orange-200">
                    <span className="text-orange-600 text-lg font-bold font-poppins">We&apos;re Here for You!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Choose Your Preferred
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 mt-2">
                Contact Method
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer multiple ways to get in touch. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className={`bg-gradient-to-br ${method.bgColor} rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-orange-200 hover:border-orange-300 hover:scale-105 text-center`}>
                <div className="text-5xl mb-6">{method.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {method.description}
                </p>
                <div className="bg-white rounded-2xl p-4 mb-6 border-2 border-orange-200">
                  <div className="font-semibold text-gray-800 font-poppins">
                    {method.contact}
                  </div>
                </div>
                <div className={`bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                  {method.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Our Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn more about our operations, support hours, and global presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-4 border-orange-200">
                <div className="text-5xl mb-6">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {info.address}
                </p>
                <div className="bg-orange-50 rounded-2xl p-4 border-2 border-orange-200">
                  <div className="text-orange-700 font-semibold">
                    {info.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-orange-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 font-poppins">Parent/Guardian Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 font-nunito"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 font-poppins">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 font-nunito"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 font-poppins">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 font-nunito"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 font-poppins">Child&apos;s Age</label>
                  <select className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 font-nunito">
                    <option>Select age group</option>
                    <option>4-6 years</option>
                    <option>7-9 years</option>
                    <option>10-12 years</option>
                    <option>13+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 font-poppins">Subject</label>
                <select className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 font-nunito">
                  <option>Select inquiry type</option>
                  <option>General Information</option>
                  <option>Online Programs</option>
                  <option>Offline Programs</option>
                  <option>Special Needs Support</option>
                  <option>Technical Support</option>
                  <option>Billing & Payments</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 font-poppins">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 font-nunito resize-none"
                  placeholder="Tell us about your inquiry, questions, or how we can help you and your child..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-400 to-amber-400 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
