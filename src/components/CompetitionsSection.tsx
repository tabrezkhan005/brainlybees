export default function CompetitionsSection() {
  const competitionRegions = [
    {
      title: "North America",
      subtitle: "USA & Canada",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "bg-red-500",
      competitions: [
        { name: "STAAR Test", description: "State standardized assessment" },
        { name: "CogAT", description: "Cognitive abilities test for gifted programs" },
        { name: "Math Kangaroo", description: "International mathematics competition" },
        { name: "Math Olympiad", description: "Advanced mathematical problem solving" }
      ]
    },
    {
      title: "Europe", 
      subtitle: "UK & European Union",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "bg-orange-500",
      competitions: [
        { name: "11+ Exams", description: "Grammar school entrance tests" },
        { name: "GCSE Prep", description: "General Certificate preparation" },
        { name: "European Olympiads", description: "Subject-specific competitions" },
        { name: "Math Kangaroo", description: "Pan-European mathematics contest" }
      ]
    },
    {
      title: "Asia Pacific",
      subtitle: "Australia & New Zealand", 
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-blue-500", 
      competitions: [
        { name: "NAPLAN", description: "National Assessment Program" },
        { name: "ICAS", description: "International Competitions & Assessments" },
        { name: "AMC", description: "Australian Mathematics Competition" },
        { name: "Science Olympiad", description: "National science competitions" }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Global Excellence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Preparing Students for{' '}
            <span className="text-red-500">International Competitions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We prepare students for prestigious academic competitions worldwide, 
            helping them excel beyond traditional curriculum and develop advanced problem-solving skills.
          </p>
        </div>

        {/* Competition Regions */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {competitionRegions.map((region, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              {/* Header */}
              <div className={`${region.color} text-white p-6 rounded-t-lg`}>
                <div className="flex items-center justify-center mb-3">
                  {region.icon}
                </div>
                <h3 className="text-xl font-bold text-center">{region.title}</h3>
                <p className="text-sm text-center opacity-90 mt-1">{region.subtitle}</p>
              </div>

              {/* Competition List */}
              <div className="p-6">
                <div className="space-y-4">
                  {region.competitions.map((competition, cIndex) => (
                    <div key={cIndex} className="border-l-4 border-gray-200 pl-4">
                      <h4 className="font-semibold text-gray-900 text-sm">{competition.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{competition.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Students Qualified</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-700 font-medium">Competition Types</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-700 font-medium">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}