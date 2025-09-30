export default function HeroSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full border border-red-100">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span className="text-red-700 font-medium text-sm">Trusted by 25,000+ families</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unlock Your Child&apos;s
                <br />
                <span className="text-red-500">Learning Potential</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mt-6 max-w-xl">
                Personalized 1-on-1 online classes that make learning engaging, effective, and enjoyable for children aged 3-15.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>

              <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold border border-gray-300 transition-colors duration-200">
                Watch Demo
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">1-on-1 Classes</div>
                  <div className="text-sm text-gray-600">Personal attention</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Expert Teachers</div>
                  <div className="text-sm text-gray-600">Qualified educators</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Proven Results</div>
                  <div className="text-sm text-gray-600">98% success rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Visual Portfolio */}
          <div className="flex items-center justify-center lg:pl-8 relative">
            <div className="relative w-full max-w-2xl">
              {/* Subtle Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl"></div>
              </div>

              {/* Main Learning Interface */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-700 group">
                {/* Top Section - Learning Platform Preview */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Student Progress Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="h-2 bg-gray-200 rounded-full mb-4">
                        <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">2,847</div>
                      <div className="text-sm text-gray-600">Problems Solved</div>
                    </div>

                    {/* Achievement Metrics */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="text-xs text-gray-500 font-medium">LIVE</div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">4.7</div>
                      <div className="text-sm text-gray-600">Average Rating</div>
                    </div>

                    {/* Success Metrics */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-1 bg-red-500 rounded-full"></div>
                        <div className="w-6 h-1 bg-orange-400 rounded-full"></div>
                        <div className="w-4 h-1 bg-red-300 rounded-full"></div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Middle Section - Learning Experience */}
                <div className="px-8 py-6 bg-white">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-lg"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">Interactive Learning Session</div>
                      <div className="text-gray-600">Personalized Mathematics Program</div>
                    </div>
                  </div>

                  {/* Learning Content Preview */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-sm font-medium text-gray-600 mb-3">Current Topic</div>
                        <div className="text-xl font-bold text-gray-900 mb-2">Advanced Problem Solving</div>
                        <div className="text-gray-600 text-sm leading-relaxed">
                          Developing critical thinking through structured mathematical reasoning and analytical approaches.
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-600 mb-3">Learning Path</div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="text-sm text-gray-700">Foundation Building</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="text-sm text-gray-700">Critical Thinking</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="text-sm text-gray-500">Advanced Mastery</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Professional Stats */}
                <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">25K+</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">15+</div>
                      <div className="text-xs text-gray-600">Countries</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">500+</div>
                      <div className="text-xs text-gray-600">Teachers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
