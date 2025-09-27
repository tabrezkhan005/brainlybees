import Image from 'next/image';

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
              <Image
                src="/world-map.svg"
                alt="World map showing countries where parents trust our service"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}