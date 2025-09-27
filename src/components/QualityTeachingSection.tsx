export default function QualityTeachingSection() {
  const qualityFeatures = [
    {
      title: "Expert Teacher Training",
      description: "Comprehensive certification program with ongoing professional development to ensure our educators master the latest teaching methodologies and child psychology principles.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Real-Time Quality Monitoring",
      description: "Advanced session monitoring and feedback systems ensure consistent delivery of high-quality education with immediate support when needed.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Personalized Learning Approach",
      description: "Each session is tailored to the individual child's learning style, pace, and psychological needs, ensuring optimal engagement and academic growth.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "purple"
    }
  ];

  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Teaching Excellence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Our Commitment to{' '}
            <span className="text-red-500">Exceptional Teaching</span>{' '}
            Quality
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards through comprehensive training, continuous monitoring, 
            and personalized approaches that ensure every child receives world-class education.
          </p>
        </div>

        {/* Quality Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-${feature.color}-50 rounded-lg flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-red-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium">Parent Satisfaction</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Certified Teachers</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}