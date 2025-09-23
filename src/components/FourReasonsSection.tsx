export default function FourReasonsSection() {
  const reasons = [
    {
      number: "01",
      title: "100% success rate in competitive exams",
      subtitle: "( cogAT, Naplan, 11+ )",
      icon: (
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">100%</span>
        </div>
      )
    },
    {
      number: "02", 
      title: "No Apps or pre-recorded lessons. 100% interactive class",
      subtitle: "",
      icon: (
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
      )
    },
    {
      number: "03",
      title: "25+ years in psychology based teaching", 
      subtitle: "",
      icon: (
        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      )
    },
    {
      number: "04",
      title: "Making kids self-learners",
      subtitle: "",
      icon: (
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="bg-orange-50 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10">
        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute top-20 right-20">
        <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="relative text-purple-600">
              4 Reasons
              <div className="absolute -bottom-2 left-0 w-full">
                <svg viewBox="0 0 200 20" className="w-full h-4">
                  <path 
                    d="M5 15 Q50 5 100 15 T195 15" 
                    stroke="#9333ea" 
                    strokeWidth="4" 
                    fill="none"
                  />
                </svg>
              </div>
            </span>{' '}
            to Choose Us
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="text-6xl font-bold text-red-500 opacity-20">
                  {reason.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                {/* Icon */}
                <div>
                  {reason.icon}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {reason.title}
                  </h3>
                  {reason.subtitle && (
                    <p className="text-gray-600 mt-2">{reason.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative illustration */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-32 h-32 bg-yellow-300 rounded-full"></div>
      </div>
    </section>
  );
}