export default function TargetDevelopmentSection() {
  const developmentAreas = [
    {
      title: "Maths",
      icon: (
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
      )
    },
    {
      title: "English", 
      icon: (
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        </div>
      )
    },
    {
      title: "Logical reasoning",
      icon: (
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      )
    },
    {
      title: "Creative thinking",
      icon: (
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v17c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V4H1V2h3.5c.28 0 .5.22.5.5S5.28 3 5.5 3H18.5c.28 0 .5-.22.5-.5S18.78 2 18.5 2z"/>
          </svg>
        </div>
      )
    },
    {
      title: "Brainpower",
      icon: (
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="bg-pink-50 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10">
        <div className="w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="relative">
              Target all major developmental areas
              <div className="absolute -bottom-2 left-0 w-full">
                <svg viewBox="0 0 400 20" className="w-full h-4">
                  <path 
                    d="M5 15 Q100 5 200 15 T395 15" 
                    stroke="#ef4444" 
                    strokeWidth="4" 
                    fill="none"
                  />
                </svg>
              </div>
            </span>{' '}
            vital for kids to thrive in today's world.
          </h2>
        </div>

        {/* Development Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {developmentAreas.map((area, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="flex justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{area.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <button className="bg-white border-2 border-red-500 text-red-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Right side illustration */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}