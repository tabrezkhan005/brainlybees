export default function HeroSection() {
  return (
    <section className="bg-pink-50 relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Green Star */}
            <div className="flex items-start">
              <div className="w-12 h-12 mr-4">
                <svg viewBox="0 0 24 24" className="w-full h-full text-green-500" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unleash{' '}
                  <span 
                    className="relative"
                    style={{
                      WebkitTextStroke: '2px #ef4444',
                      WebkitTextFillColor: 'transparent',
                      color: '#ef4444'
                    }}
                  >
                    your child's
                    <div className="absolute -bottom-3 left-0 w-full">
                      <svg viewBox="0 0 300 20" className="w-full h-4">
                        <path 
                          d="M5 15 Q50 5 150 15 T295 15" 
                          stroke="#ef4444" 
                          strokeWidth="4" 
                          fill="none"
                        />
                      </svg>
                    </div>
                  </span>
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-4">
                  limitless potential
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-xl text-gray-700 mb-8">
              By boosting{' '}
              <span className="text-red-500 font-semibold">Brain Power</span>,{' '}
              <span className="text-red-500 font-semibold">Thinking</span> and{' '}
              <span className="text-red-500 font-semibold">Creativity</span>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </div>
                </div>
                <span className="text-lg text-gray-700">Live 1-to-1 online classes</span>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <div className="w-full h-full bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <span className="text-lg text-gray-700">For 3 to 15 years age kids</span>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 mr-4 mt-1">
                  <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-lg text-gray-700">
                  Dynamic curriculum aligned with syllabus across countries (USA, Singapore, Australia, UK etc)
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            {/* Orange Shape Background */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full transform translate-x-32 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300 rounded-full transform -translate-x-16 translate-y-16 opacity-60"></div>
              </div>
            </div>

            {/* Dashboard Image Placeholder */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 mx-auto max-w-md">
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600">Live Learning Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-30"></div>
    </section>
  );
}