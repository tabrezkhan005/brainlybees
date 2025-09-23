export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What our{' '}
            <span className="relative text-red-500">
              happy parents
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
            <br />
            have to say
          </h2>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center shadow-lg">
              <div className="text-center">
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play video
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Matthew&apos;s Mom</div>
                <div className="text-sm text-gray-600">Los Angeles, California</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center shadow-lg">
              <div className="text-center">
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play video
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Akshat&apos;s Mom</div>
                <div className="text-sm text-gray-600">McKinney, Texas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center space-x-4">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
