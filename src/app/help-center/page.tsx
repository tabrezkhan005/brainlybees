import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function HelpCenterPage() {
  const helpTopics = [
    {
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      icon: "🚀",
      articles: [
        "Creating your child's account",
        "Choosing the right program",
        "Setting up learning preferences",
        "Understanding progress tracking"
      ]
    },
    {
      title: "Online Learning",
      description: "Everything about our online programs",
      icon: "💻",
      articles: [
        "System requirements",
        "Joining virtual classes",
        "Interactive learning tools",
        "Technical troubleshooting"
      ]
    },
    {
      title: "Offline Programs",
      description: "Information about in-person learning",
      icon: "🏫",
      articles: [
        "Finding locations near you",
        "Scheduling visits",
        "Class schedules",
        "Safety protocols"
      ]
    },
    {
      title: "Special Needs Support",
      description: "Tailored assistance for every child",
      icon: "🌟",
      articles: [
        "Assessment process",
        "Individualized learning plans",
        "Support resources",
        "Parent collaboration"
      ]
    },
    {
      title: "Payment & Billing",
      description: "Information about payments and subscriptions",
      icon: "💳",
      articles: [
        "Payment methods",
        "Subscription plans",
        "Billing cycles",
        "Refund process"
      ]
    },
    {
      title: "Account Management",
      description: "Managing your BrainlyBees account",
      icon: "⚙️",
      articles: [
        "Profile settings",
        "Password management",
        "Notification preferences",
        "Account security"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z"
                  fill="url(#heroWave1)" opacity="0.4"/>
            <defs>
              <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="50%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-blue-200 shadow-lg mb-6">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
            <span className="text-blue-700 font-bold text-sm">We&apos;re Here to Help!</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Help Center
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Find answers to common questions and get the support you need to make the most of your BrainlyBees experience.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 pl-12 bg-white border-2 border-blue-200 rounded-full text-gray-700 focus:outline-none focus:border-blue-400 shadow-lg"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Browse Help Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select a category below to find detailed information and step-by-step guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-blue-200 hover:border-blue-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{topic.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {topic.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {topic.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{article}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-blue-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our support team is here to assist you with any questions or concerns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">Email Support</h3>
                <p className="text-gray-600 mb-4">Get detailed help via email</p>
                <div className="text-blue-600 font-semibold">BrainlyBeesGlobal@gmail.com</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">WhatsApp Support</h3>
                <p className="text-gray-600 mb-4">Quick assistance via chat</p>
                <div className="text-green-600 font-semibold">+91 8979245215</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
