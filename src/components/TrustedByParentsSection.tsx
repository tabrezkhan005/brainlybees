export default function TrustedByParentsSection() {
  return (
    <section className="bg-gradient-to-b from-orange-100 to-orange-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Trusted by parents across{' '}
            <span className="relative text-purple-600">
              20+ countries
              <div className="absolute -bottom-2 left-0 w-full">
                <svg viewBox="0 0 300 20" className="w-full h-4">
                  <path 
                    d="M5 15 Q50 5 150 15 T295 15" 
                    stroke="#9333ea" 
                    strokeWidth="4" 
                    fill="none"
                  />
                </svg>
              </div>
            </span>
          </h2>
        </div>

        {/* World Map with Pins */}
        <div className="relative mb-16">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Simplified World Map */}
              <div className="relative w-full h-96">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  {/* Continents as simple shapes */}
                  <g fill="#4F46E5" opacity="0.8">
                    {/* North America */}
                    <path d="M50,100 L200,80 L250,120 L200,200 L100,180 Z"/>
                    {/* South America */}
                    <path d="M180,250 L220,240 L240,350 L200,380 L160,340 Z"/>
                    {/* Europe */}
                    <path d="M450,80 L520,70 L550,120 L500,140 L430,120 Z"/>
                    {/* Africa */}
                    <path d="M480,150 L550,140 L580,280 L520,320 L460,280 Z"/>
                    {/* Asia */}
                    <path d="M550,60 L750,50 L800,120 L780,200 L520,180 Z"/>
                    {/* Australia */}
                    <path d="M720,300 L800,290 L820,330 L780,350 L700,340 Z"/>
                  </g>
                  
                  {/* Location Pins */}
                  <g fill="#EF4444">
                    <circle cx="150" cy="120" r="8"/>
                    <circle cx="200" cy="150" r="8"/>
                    <circle cx="480" cy="100" r="8"/>
                    <circle cx="520" cy="180" r="8"/>
                    <circle cx="650" cy="90" r="8"/>
                    <circle cx="700" cy="140" r="8"/>
                    <circle cx="750" cy="320" r="8"/>
                    <circle cx="780" cy="280" r="8"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}