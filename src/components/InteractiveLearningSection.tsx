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
                Interactive Learning
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                like{' '}
                <span className="relative text-red-500">
                  never before
                  <div className="absolute -bottom-2 left-0 w-full">
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

            {/* Curved Arrow */}
            <div className="flex justify-center lg:justify-start">
              <svg width="200" height="100" viewBox="0 0 200 100" className="text-orange-400">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
                <path 
                  d="M 20 30 Q 100 10 180 50" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </div>

          {/* Right Content - Video Placeholder */}
          <div className="relative">
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                  Watch again on YouTube
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}