export default function LearningRoadmapSection() {
  const roadmapSteps = [
    {
      title: "Strengthen Foundation",
      description: "Deep understanding of Concepts"
    },
    {
      title: "Expand thinking", 
      description: "Explore Multiple ways to solve a problem"
    },
    {
      title: "Stimulate brain development",
      description: ""
    },
    {
      title: "Improve reflexes",
      description: "Focus, Concentration and Memory"
    },
    {
      title: "Nurture Self-learning",
      description: ""
    },
    {
      title: "Competitions Ready",
      description: ""
    },
    {
      title: "Enrichment to Next Level",
      description: ""
    }
  ];

  return (
    <section className="bg-gradient-to-b from-orange-100 to-orange-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="relative text-purple-600">
              Learning Road Map with BrainlyBees
              <div className="absolute -bottom-2 left-0 w-full">
                <svg viewBox="0 0 500 20" className="w-full h-4">
                  <path 
                    d="M5 15 Q125 5 250 15 T495 15" 
                    stroke="#9333ea" 
                    strokeWidth="4" 
                    fill="none"
                  />
                </svg>
              </div>
            </span>
          </h2>
        </div>

        {/* Roadmap Steps */}
        <div className="relative">
          {/* Connecting dashed lines */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              {/* Zigzag path connecting all boxes */}
              <path 
                d="M150,80 L350,120 M300,120 L150,200 M200,200 L400,240 M350,240 L200,320 M250,320 L450,360 M400,360 L250,440"
                stroke="#666" 
                strokeWidth="2" 
                strokeDasharray="8,8" 
                fill="none"
              />
            </svg>
          </div>

          {/* Steps positioned in zigzag pattern */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
            {roadmapSteps.map((step, index) => (
              <div 
                key={index}
                className={`bg-red-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0 ? 'md:justify-self-start' : 'md:justify-self-end'
                } ${
                  index === 0 ? 'mt-0' : 
                  index === 1 ? 'mt-8' :
                  index === 2 ? 'mt-16' :
                  index === 3 ? 'mt-24' :
                  index === 4 ? 'mt-32' :
                  index === 5 ? 'mt-40' : 'mt-48'
                }`}
                style={{ 
                  maxWidth: '280px',
                  zIndex: 10,
                  position: 'relative'
                }}
              >
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                {step.description && (
                  <p className="text-sm opacity-90">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-16">
          <button className="bg-white border-2 border-red-500 text-red-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Right side illustration */}
        <div className="absolute bottom-10 right-10">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center opacity-60">
            <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}