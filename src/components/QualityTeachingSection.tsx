export default function QualityTeachingSection() {
  const qualityFeatures = [
    {
      title: "In-house training",
      description: "Extensive in-house training of teachers",
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
      )
    },
    {
      title: "Monitoring",
      description: "Constant monitoring of quality of teaching in the sessions",
      icon: (
        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
      )
    },
    {
      title: "Personalizing",
      description: "Personalizing sessions based on psychology /needs of each child",
      icon: (
        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            How we provide unmatched{' '}
            <span className="relative text-red-500">
              Quality
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
            </span>{' '}
            in teaching?
          </h2>

          {/* Green Arrow */}
          <div className="flex justify-center mt-8">
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-green-500">
              <defs>
                <marker id="greenArrowhead" markerWidth="10" markerHeight="7" 
                  refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
              <path 
                d="M 10 20 Q 60 10 110 40" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none"
                markerEnd="url(#greenArrowhead)"
              />
            </svg>
          </div>
        </div>

        {/* Quality Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="bg-pink-50 rounded-2xl p-8 border-2 border-pink-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-red-500">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative wave elements */}
        <div className="absolute top-10 right-10">
          <svg className="w-16 h-8 text-red-300" fill="currentColor" viewBox="0 0 100 20">
            <path d="M0,10 Q25,0 50,10 T100,10 L100,20 L0,20 Z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}