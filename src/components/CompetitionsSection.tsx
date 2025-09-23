export default function CompetitionsSection() {
  const competitionRegions = [
    {
      title: "USA/Canada",
      color: "bg-red-500",
      competitions: ["STAAR", "NAPLAN", "CogAT/Gifted child program", "Kangaroo Math", "Kangaroo", "Olympiad"]
    },
    {
      title: "UK/Europe", 
      color: "bg-orange-500",
      competitions: ["11+ GCSE", "Olympiads", "Kangaroo Math", "Grammar School"]
    },
    {
      title: "Australia/NZ",
      color: "bg-red-500", 
      competitions: ["STAAR", "NAPLAN", "CogAT/Gifted child program", "Kangaroo Math", "Kangaroo", "Olympiad"]
    }
  ];

  return (
    <section className="bg-pink-50 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10">
        <svg className="w-16 h-4 text-orange-400" fill="currentColor" viewBox="0 0 100 20">
          <path d="M0,0 L20,0 L20,20 L0,20 Z M30,0 L50,0 L50,20 L30,20 Z M60,0 L80,0 L80,20 L60,20 Z"/>
        </svg>
      </div>
      
      <div className="absolute top-1/2 right-10">
        <svg className="w-12 h-8 text-red-400" fill="currentColor" viewBox="0 0 100 40">
          <path d="M0,20 Q25,0 50,20 T100,20 L100,40 L0,40 Z"/>
          <path d="M0,20 Q25,40 50,20 T100,20"/>
          <path d="M0,20 Q25,0 50,20 T100,20"/>
        </svg>
      </div>

      <div className="absolute bottom-10 right-1/4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
        <div className="flex space-x-2 mt-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
        <div className="flex space-x-2 mt-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Cracking competitions{' '}
            <span className="relative text-red-500">
              globally
              <div className="absolute -bottom-2 left-0 w-full">
                <svg viewBox="0 0 200 20" className="w-full h-4">
                  <path 
                    d="M5 15 Q50 5 100 15 T195 15" 
                    stroke="#ef4444" 
                    strokeWidth="4" 
                    fill="none"
                  />
                </svg>
              </div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Various competitions are conducted across different nations to 
            help kids go beyond bookish curriculum and learn different skill sets 
            in the process.
          </p>
        </div>

        {/* Competition Regions */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {competitionRegions.map((region, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className={`${region.color} text-white p-6 text-center`}>
                <h3 className="text-xl font-bold">{region.title}</h3>
              </div>

              {/* Competition List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {region.competitions.map((competition, cIndex) => (
                    <li key={cIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      {competition}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className="text-red-500 font-semibold hover:text-red-600 transition-colors flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}