import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      purpose: "Platform Functionality",
      description: "These cookies are necessary for our website to function properly and cannot be switched off. They enable core functionality such as security, authentication, and network management.",
      examples: [
        "User authentication and login sessions",
        "Security and fraud prevention",
        "Platform preferences and settings",
        "Shopping cart and enrollment management"
      ],
      duration: "Session to 1 year",
      control: "Cannot be disabled"
    },
    {
      title: "Performance Cookies",
      purpose: "Analytics & Optimization",
      description: "These cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously.",
      examples: [
        "Page view counts and visitor statistics",
        "User journey and behavior analysis",
        "Platform performance monitoring",
        "Error tracking and debugging"
      ],
      duration: "Up to 2 years",
      control: "Can be managed via preferences"
    },
    {
      title: "Functional Cookies",
      purpose: "Enhanced User Experience",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing more relevant content.",
      examples: [
        "Language and region preferences",
        "Customized learning dashboards",
        "Accessibility settings",
        "Educational progress tracking"
      ],
      duration: "Up to 1 year",
      control: "Can be disabled in settings"
    },
    {
      title: "Marketing Cookies",
      purpose: "Advertising & Communication",
      description: "These cookies are used to make advertising messages more relevant to you and help us communicate about our educational programs effectively.",
      examples: [
        "Targeted educational content recommendations",
        "Social media integration",
        "Email campaign tracking",
        "Advertising effectiveness measurement"
      ],
      duration: "Up to 13 months",
      control: "Can be opted out completely"
    }
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and user behavior tracking",
      data: "Anonymized usage statistics, page views, session data",
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "Google Fonts",
      purpose: "Web font delivery and display optimization",
      data: "IP address, browser information, font requests",
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "WhatsApp Business API",
      purpose: "Customer communication and support",
      data: "Phone numbers, message content, interaction logs",
      privacy: "https://www.whatsapp.com/legal/privacy-policy"
    },
    {
      service: "Payment Processors",
      purpose: "Secure payment processing for educational services",
      data: "Transaction details, payment methods, billing information",
      privacy: "Varies by payment provider"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-gray-200 shadow-lg mb-6">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
            <span className="text-gray-700 font-bold text-sm">Data & Privacy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Cookie Policy
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            How we use cookies and tracking technologies on our platform
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <p className="text-blue-800 font-semibold">
              Last Updated: October 3, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">What Are Cookies?</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better user experience by remembering your preferences, enabling essential platform functionality, and helping us understand how our educational services are used.
              </p>
              <p className="mb-4">
                This Cookie Policy explains what cookies we use, why we use them, and how you can manage your cookie preferences. By using our platform, you consent to our use of cookies as described in this policy.
              </p>
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <p className="text-blue-800 font-semibold">
                  🍪 We are committed to transparency about our cookie usage and provide you with full control over your cookie preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center font-poppins">
            Types of Cookies We Use
          </h2>
          
          <div className="space-y-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
                      {cookie.title}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {cookie.purpose}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="text-sm font-semibold text-gray-700">{cookie.duration}</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {cookie.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3 font-poppins">Examples:</h4>
                    <ul className="space-y-2">
                      {cookie.examples.map((example, eIndex) => (
                        <li key={eIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3 font-poppins">Your Control:</h4>
                    <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200">
                      <p className="text-gray-700 font-semibold">{cookie.control}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center font-poppins">
            Third-Party Services and Cookies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">
                  {service.service}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-700 mb-1">Purpose:</h4>
                    <p className="text-gray-600 text-sm">{service.purpose}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-700 mb-1">Data Collected:</h4>
                    <p className="text-gray-600 text-sm">{service.data}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-700 mb-1">Privacy Policy:</h4>
                    <p className="text-blue-600 text-sm font-semibold">{service.privacy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Managing Your Cookie Preferences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 font-poppins">Browser Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Most browsers allow you to manage cookie preferences in settings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">You can block or delete cookies at any time</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Private/incognito browsing prevents cookie storage</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 font-poppins">Platform Controls</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Account settings for personalization preferences</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Opt-out options for marketing communications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">Contact us for assistance with privacy settings</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-2xl">
              <h4 className="text-lg font-bold text-yellow-800 mb-2 font-poppins">Important Notice</h4>
              <p className="text-yellow-700">
                Disabling certain cookies may limit platform functionality. Essential cookies cannot be disabled as they are necessary for basic platform operation and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-2 border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
              Questions About Cookies?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              If you have questions about our cookie usage, privacy practices, or need help managing your preferences, please contact us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Email Support</h3>
                <div className="text-gray-600 font-semibold">BrainlyBeesGlobal@gmail.com</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">WhatsApp</h3>
                <div className="text-gray-600 font-semibold">+91 8979245215</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <p className="text-blue-800 font-semibold">
                We are committed to helping you understand and control your privacy preferences. Contact us anytime for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}