import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function ParentGuidePage() {
  const guideSteps = [
    {
      step: "01",
      title: "Assess Your Child's Needs",
      description: "Understanding your child's learning style and interests",
      details: [
        "Observe how your child learns best (visual, auditory, hands-on)",
        "Note their interests and favorite subjects",
        "Consider any special learning needs or challenges",
        "Think about their current academic level and goals"
      ],
      icon: "🔍"
    },
    {
      step: "02",
      title: "Choose the Right Program",
      description: "Selecting programs that match your child's needs",
      details: [
        "Review our age-appropriate program options",
        "Consider online vs offline preferences",
        "Look at specialized programs for unique needs",
        "Schedule a consultation for personalized recommendations"
      ],
      icon: "🎯"
    },
    {
      step: "03",
      title: "Prepare for Success",
      description: "Setting up the ideal learning environment",
      details: [
        "Create a dedicated, quiet learning space",
        "Ensure reliable internet and proper devices",
        "Establish consistent learning routines",
        "Communicate expectations and goals with your child"
      ],
      icon: "🏠"
    },
    {
      step: "04",
      title: "Support Your Child's Journey",
      description: "Being an active partner in their education",
      details: [
        "Regularly communicate with teachers and staff",
        "Monitor progress and celebrate achievements",
        "Provide encouragement and emotional support",
        "Stay involved without overwhelming your child"
      ],
      icon: "🤝"
    }
  ];

  const tipsByAge = [
    {
      ageGroup: "4-6 Years",
      title: "Early Learning Foundation",
      icon: "🌱",
      tips: [
        "Keep learning sessions short and fun (20-30 minutes)",
        "Use lots of praise and positive reinforcement",
        "Incorporate play and hands-on activities",
        "Read together daily to build language skills",
        "Be patient with attention spans and energy levels",
        "Focus on building curiosity rather than perfect performance"
      ],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      ageGroup: "7-9 Years",
      title: "Primary Skills Development",
      icon: "📚",
      tips: [
        "Establish consistent homework and study routines",
        "Help them organize their learning materials",
        "Encourage questions and curiosity about everything",
        "Balance screen time with physical activities",
        "Celebrate effort and progress, not just results",
        "Teach basic problem-solving strategies"
      ],
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      ageGroup: "10-12 Years",
      title: "Advanced Academic Skills",
      icon: "🎓",
      tips: [
        "Encourage independent learning and responsibility",
        "Help them set personal learning goals",
        "Discuss real-world applications of what they're learning",
        "Support their developing interests and hobbies",
        "Teach time management and study skills",
        "Be available for guidance without micromanaging"
      ],
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      ageGroup: "13+ Years",
      title: "Teen Academic Mastery",
      icon: "🚀",
      tips: [
        "Respect their growing need for independence",
        "Support their academic and career exploration",
        "Help them develop critical thinking skills",
        "Encourage healthy study habits and self-care",
        "Be a supportive listener for their challenges",
        "Guide them in making responsible decisions"
      ],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  const commonChallenges = [
    {
      challenge: "My child doesn't want to study",
      solution: "Make learning fun and relevant to their interests. Set small, achievable goals and celebrate progress. Consider changing the learning environment or time of day.",
      icon: "😤"
    },
    {
      challenge: "Difficulty concentrating during online classes",
      solution: "Ensure a distraction-free environment, take regular breaks, and communicate with teachers about your child's attention patterns. Consider fidget tools or standing desk options.",
      icon: "😵‍💫"
    },
    {
      challenge: "Falling behind in certain subjects",
      solution: "Don't panic. Communicate with teachers immediately, consider additional support sessions, and focus on understanding rather than speed. Every child learns at their own pace.",
      icon: "📉"
    },
    {
      challenge: "Technical issues during online learning",
      solution: "Test technology beforehand, have backup plans ready, and don't hesitate to contact technical support. Keep it simple and focus on the learning, not the technology.",
      icon: "🔧"
    },
    {
      challenge: "Child is too perfectionist or anxious",
      solution: "Emphasize effort over results, normalize mistakes as learning opportunities, and create a supportive environment. Consider speaking with educational counselors if anxiety persists.",
      icon: "😰"
    },
    {
      challenge: "Balancing multiple children's needs",
      solution: "Create individual schedules, use older children to help younger ones, and don't try to do everything perfectly. Ask for help from teachers and family members when needed.",
      icon: "⚖️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z"
                  fill="url(#heroWave1)" opacity="0.4"/>
            <defs>
              <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="50%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-teal-200 shadow-lg mb-6">
            <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
            <span className="text-teal-700 font-bold text-sm">For Parents & Guardians</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Parent&apos;s Guide to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 mt-2">
              Supporting Your Child
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Practical tips, strategies, and guidance to help you support your child&apos;s learning journey with BrainlyBees.
          </p>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Getting Started
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mt-2">
                Step by Step
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these steps to ensure your child gets the most out of their BrainlyBees experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guideSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full border-4 border-teal-200 flex items-center justify-center">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>

                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-teal-200">
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Tips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Age-Specific
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mt-2">
                Parenting Tips
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored advice for supporting your child based on their developmental stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tipsByAge.map((ageGroup, index) => (
              <div key={index} className={`bg-gradient-to-br ${ageGroup.bgColor} rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-teal-200`}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{ageGroup.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
                    {ageGroup.ageGroup}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">
                    {ageGroup.title}
                  </p>
                </div>

                <div className="space-y-3">
                  {ageGroup.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Common Challenges &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mt-2">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every parent faces challenges. Here are practical solutions to common situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonChallenges.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-teal-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 font-poppins">
                    &ldquo;{item.challenge}&rdquo;
                  </h3>
                </div>

                <div className="bg-teal-50 rounded-2xl p-6 border-2 border-teal-200">
                  <h4 className="font-semibold text-teal-700 mb-3 font-poppins">Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-teal-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Need Additional Support?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team is here to support you every step of the way. Don&apos;t hesitate to reach out with questions or concerns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Direct Support</h3>
                <p className="text-gray-600 mb-3">WhatsApp support</p>
                <div className="text-blue-600 font-semibold">+91 8979245215</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Email Support</h3>
                <p className="text-gray-600 mb-3">Detailed inquiries</p>
                <div className="text-green-600 font-semibold text-sm">brainlybeesglobal@gmail.com</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Resources</h3>
                <p className="text-gray-600 mb-3">Guides & FAQs</p>
                <div className="text-purple-600 font-semibold">Help Center</div>
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
