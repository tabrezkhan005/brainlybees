export default function InteractiveLearningSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Red Wave Background - Full Width */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 400" className="w-full h-40 text-red-500" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Experience{' '}
                <span className="text-red-500">Interactive Learning</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                that transforms{' '}
                <span 
                  className="relative text-red-500"
                  style={{
                    WebkitTextStroke: '2px #ef4444',
                    WebkitTextFillColor: 'transparent',
                    color: '#ef4444'
                  }}
                >
                  young minds
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
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-xl">
              Our cutting-edge interactive platform engages students through gamified learning, real-time feedback, and personalized content that adapts to each child's unique learning style.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Smart AI Tutoring</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Gamified Rewards</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Real-time Progress</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Adaptive Learning</span>
              </div>
            </div>

            {/* Curved Arrow - Updated design */}
            <div className="flex justify-center lg:justify-start">
              <svg width="250" height="120" viewBox="0 0 250 120" className="text-orange-400">
                <defs>
                  <marker id="arrowhead" markerWidth="12" markerHeight="10" 
                    refX="12" refY="5" orient="auto">
                    <polygon points="0 0, 12 5, 0 10" fill="currentColor" />
                  </marker>
                </defs>
                <path 
                  d="M 30 50 Q 80 20 130 40 Q 180 60 220 35" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl aspect-video flex items-center justify-center shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                }}>
                </div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">See It In Action</h3>
                <p className="text-white text-sm opacity-90 mb-4 max-w-xs mx-auto">
                  Watch how our interactive platform transforms learning into an exciting adventure
                </p>
                <div className="flex items-center justify-center space-x-4 text-white text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Live Demo</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>5 min watch</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">95% Engagement</div>
                  <div className="text-xs text-gray-600">Student interaction rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}