'use client';

import { useEffect, useState, useRef } from 'react';

export default function LearningRoadmapSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps one by one with delay
            roadmapSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roadmapSteps = [
    {
      step: "01",
      title: "Build Strong Foundations",
      description: "Establish deep understanding of core concepts across all subjects",
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Expand Critical Thinking", 
      description: "Develop multiple problem-solving approaches and analytical skills",
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Enhance Cognitive Development",
      description: "Stimulate brain growth through targeted mental exercises and challenges",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Sharpen Mental Agility",
      description: "Improve focus, concentration, memory, and quick thinking abilities",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: "05",
      title: "Foster Independent Learning",
      description: "Develop self-directed study habits and autonomous learning skills",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      step: "06",
      title: "Competition Preparation",
      description: "Master advanced concepts and strategies for academic competitions",
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      step: "07",
      title: "Advanced Mastery",
      description: "Achieve excellence and readiness for higher-level academic challenges",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-200/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-56 h-56 bg-orange-200/20 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-200/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-red-700 text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Learning Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your Child's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-gradient-x">
              Learning Roadmap
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700">with BrainlyBees</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A carefully crafted, step-by-step journey that transforms your child from foundation building 
            to advanced mastery, ensuring continuous growth and academic excellence.
          </p>
        </div>

        {/* Enhanced Roadmap Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full opacity-30"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-16">
            {roadmapSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative transform transition-all duration-700 ${
                  visibleSteps.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                    visibleSteps.includes(index) 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 scale-110' 
                      : 'bg-gray-300 scale-100'
                  }`}>
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* Content Card */}
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover-lift group relative">
                      {/* Corner Symbol Inside Box */}
                      <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-10 h-10 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300`}>
                        <div className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>

                      {/* Mobile Step Number */}
                      <div className="lg:hidden flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">{step.step}</span>
                        </div>
                        <div className="h-px bg-gradient-to-r from-red-500 to-orange-500 flex-1"></div>
                      </div>

                      <div className={`space-y-4 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} pt-4`}>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>

                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Begin This Amazing Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have transformed their children's learning experience with our proven roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center">
                  Start Your Journey Today
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="group bg-white/80 hover:bg-white text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-gray-200 hover:border-red-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Schedule Free Demo
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">7 Steps</div>
                <div className="text-sm text-gray-600">Structured Journey</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                <div className="text-sm text-gray-600">Personalized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">Proven</div>
                <div className="text-sm text-gray-600">Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}