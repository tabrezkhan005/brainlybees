import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';

export default function TeacherResourcesPage() {
  const resourceCategories = [
    {
      title: "Teaching Tools & Materials",
      description: "Essential resources for effective online and offline teaching",
      icon: "🧰",
      resources: [
        "Interactive lesson plan templates",
        "Digital whiteboard tools and techniques",
        "Educational games and activities library",
        "Assessment rubrics and evaluation forms",
        "Student progress tracking templates",
        "Parent communication guides"
      ],
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Curriculum Support",
      description: "Comprehensive curriculum guides and standards alignment",
      icon: "📚",
      resources: [
        "Age-appropriate learning objectives",
        "Subject-specific teaching strategies",
        "Cross-curricular integration ideas",
        "Differentiated instruction techniques",
        "Special needs accommodation strategies",
        "Global curriculum standards mapping"
      ],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities for educators",
      icon: "🎓",
      resources: [
        "Monthly teacher training webinars",
        "Best practices sharing sessions",
        "Educational technology workshops",
        "Child psychology and development courses",
        "Certification programs and credentials",
        "Peer mentoring and collaboration groups"
      ],
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      title: "Student Engagement",
      description: "Strategies to keep young learners motivated and engaged",
      icon: "⚡",
      resources: [
        "Interactive engagement techniques",
        "Gamification strategies for learning",
        "Attention management for different ages",
        "Positive reinforcement systems",
        "Creative project ideas and activities",
        "Technology integration for engagement"
      ],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      title: "Assessment & Feedback",
      description: "Effective evaluation and feedback mechanisms",
      icon: "📊",
      resources: [
        "Formative assessment strategies",
        "Portfolio-based evaluation methods",
        "Constructive feedback techniques",
        "Progress reporting templates",
        "Self-assessment tools for students",
        "Data-driven instruction methods"
      ],
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      title: "Technology Integration",
      description: "Digital tools and platforms for modern education",
      icon: "💻",
      resources: [
        "Educational software recommendations",
        "Virtual classroom management tips",
        "Digital collaboration tools",
        "Online safety and digital citizenship",
        "Troubleshooting common tech issues",
        "Blended learning implementation guides"
      ],
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50"
    }
  ];

  const teachingTips = [
    {
      tip: "Start each session with a warm welcome",
      description: "Build rapport and set a positive tone by greeting each student personally and asking about their day.",
      icon: "👋"
    },
    {
      tip: "Use the 10-minute rule",
      description: "Change activities every 10 minutes to maintain attention, especially for younger children.",
      icon: "⏰"
    },
    {
      tip: "Incorporate movement breaks",
      description: "Include physical activities or stretching breaks to help students refocus and re-energize.",
      icon: "🤸‍♀️"
    },
    {
      tip: "Ask open-ended questions",
      description: "Encourage critical thinking by asking 'how' and 'why' questions rather than yes/no questions.",
      icon: "❓"
    },
    {
      tip: "Celebrate small wins",
      description: "Acknowledge effort and progress, not just correct answers, to build confidence and motivation.",
      icon: "🎉"
    },
    {
      tip: "Create visual learning aids",
      description: "Use colorful charts, diagrams, and visual organizers to support different learning styles.",
      icon: "🎨"
    },
    {
      tip: "Connect learning to real life",
      description: "Help students see relevance by relating concepts to their everyday experiences and interests.",
      icon: "🌟"
    },
    {
      tip: "Maintain consistent routines",
      description: "Establish predictable structures that help students feel secure and know what to expect.",
      icon: "📅"
    }
  ];

  const supportServices = [
    {
      service: "Curriculum Planning Support",
      description: "Get help designing lesson plans and curricula that align with our educational philosophy",
      icon: "📋",
      availability: "Available on request"
    },
    {
      service: "Technical Training",
      description: "Learn to use our educational technology platforms and digital tools effectively",
      icon: "🔧",
      availability: "Monthly workshops"
    },
    {
      service: "Mentorship Program",
      description: "Connect with experienced KidCube Global educators for guidance and support",
      icon: "🤝",
      availability: "Ongoing program"
    },
    {
      service: "Resource Library Access",
      description: "Access our comprehensive digital library of teaching materials and resources",
      icon: "📖",
      availability: "24/7 access"
    },
    {
      service: "Student Support Consultation",
      description: "Get advice on handling specific student needs or challenging situations",
      icon: "💭",
      availability: "As needed"
    },
    {
      service: "Professional Development Credits",
      description: "Earn continuing education credits through our training programs",
      icon: "🏆",
      availability: "Quarterly options"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z"
                  fill="url(#heroWave1)" opacity="0.4"/>
            <defs>
              <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="50%" stopColor="#5eead4" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-emerald-200 shadow-lg mb-6">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
                <span className="text-emerald-700 font-bold text-sm">For Educators</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
                Teacher Resources &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 mt-2">
                  Support Center
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Comprehensive tools, training, and support to help you create exceptional learning experiences for every child.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 font-poppins">Extensive Resource Library</div>
                    <div className="text-gray-600">Thousands of teaching materials and tools</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 font-poppins">Ongoing Professional Development</div>
                    <div className="text-gray-600">Regular training and skill enhancement</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 font-poppins">Dedicated Support Team</div>
                    <div className="text-gray-600">Expert guidance when you need it</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-emerald-200">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/teacher-helping-girl-kid-doubt.png"
                      alt="Teacher Resources"
                      width={400}
                      height={384}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-emerald-200">
                    <span className="text-emerald-600 text-lg font-bold font-poppins">Empowering Educators!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Resource Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of teaching resources organized by category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.bgColor} rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-emerald-200 hover:border-emerald-300 hover:scale-105`}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Tips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Quick Teaching Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Practical, actionable tips you can implement immediately to enhance your teaching effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-emerald-200">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-3">{tip.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">
                    {tip.tip}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services available to all KidCube Global educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-emerald-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">
                    {service.service}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4 border-2 border-emerald-200">
                  <div className="text-center">
                    <div className="text-emerald-700 font-semibold">
                      {service.availability}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-emerald-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Need Additional Support?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our educator support team is here to help you succeed. Reach out anytime for assistance, guidance, or resources.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Educator Hotline</h3>
                <p className="text-gray-600 mb-3">Direct teacher support</p>
                <div className="text-blue-600 font-semibold">+91 63973 16375</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Resource Requests</h3>
                <p className="text-gray-600 mb-3">Custom material requests</p>
                <div className="text-green-600 font-semibold text-sm">kidcubeglobal@gmail.com</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Teacher Community</h3>
                <p className="text-gray-600 mb-3">Connect with peers</p>
                <div className="text-purple-600 font-semibold">Join Our Network</div>
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
