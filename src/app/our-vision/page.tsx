'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function OurVisionPage() {
  const [selectedCurriculum, setSelectedCurriculum] = useState('cognitive');

  const curriculumBasis = {
    cognitive: {
      title: 'Cognitive Abilities',
      subtitle: 'Think Beyond Boundaries',
      description: 'Explore problem-solving alternatives and cultivate thinking abilities through interactive learning experiences.',
      image: '/assets/kid-keeping-book-on-head-and-thinking.png',
      features: [
        'Critical thinking development',
        'Problem-solving strategies',
        'Analytical reasoning skills',
        'Creative thinking exercises',
        'Memory enhancement techniques',
        'Logic and pattern recognition'
      ],
      color: 'from-blue-400 to-purple-500',
      bgColor: 'from-blue-50 to-purple-50'
    },
    visualization: {
      title: 'Visual Learning Excellence',
      subtitle: 'Learn Through Discovery',
      description: 'Transform abstract concepts into tangible understanding through innovative visual techniques and interactive exploration.',
      image: '/assets/kids-doing-painting.png',
      features: [
        'Visual learning techniques',
        'Real-world connections',
        'Interactive demonstrations',
        'Concept mapping',
        'Story-based learning',
        'Hands-on activities'
      ],
      color: 'from-green-400 to-blue-500',
      bgColor: 'from-green-50 to-blue-50'
    },
    conceptual: {
      title: 'Foundational Mastery',
      subtitle: 'Build Strong Foundations',
      description: 'Develop deep understanding of core concepts through structured learning that builds confidence and competence.',
      image: '/assets/teacher-helping-girl-kid-doubt.png',
      features: [
        'Foundation building',
        'Step-by-step learning',
        'Concept reinforcement',
        'Practical applications',
        'Simplified explanations',
        'Progressive difficulty'
      ],
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    behavioral: {
      title: 'Character Excellence',
      subtitle: 'Values-Based Growth',
      description: 'Cultivate positive character traits and emotional intelligence through supportive relationships and meaningful experiences.',
      image: '/assets/teacher-with-all-kids.png',
      features: [
        'Empathy building',
        'Trust development',
        'Social skills training',
        'Emotional intelligence',
        'Positive reinforcement',
        'Value-based learning'
      ],
      color: 'from-pink-400 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50'
    },
    personality: {
      title: 'Whole Child Development',
      subtitle: 'Complete Growth',
      description: 'Nurture confident, creative, and compassionate individuals through comprehensive developmental activities and experiences.',
      image: '/assets/teacher-with-kids-doing-ring-activity.png',
      features: [
        'Confidence building',
        'Communication skills',
        'Leadership qualities',
        'Team collaboration',
        'Self-expression',
        'Cultural awareness'
      ],
      color: 'from-teal-400 to-green-500',
      bgColor: 'from-teal-50 to-green-50'
    },
    curriculum: {
      title: 'Academic Integration',
      subtitle: 'Seamless Learning',
      description: 'Create meaningful connections between learning experiences and academic achievement through innovative integration methods.',
      image: '/assets/teacher-teaching-kids-about-plants.png',
      features: [
        'Curriculum alignment',
        'Academic standards',
        'Grade-appropriate content',
        'Assessment preparation',
        'Progress tracking',
        'Performance analytics'
      ],
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    }
  };

  const journeySteps = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Started with a dream to transform how children learn and grow',
      achievement: '50+ Happy Students',
      icon: '🌱'
    },
    {
      year: '2021',
      title: 'Growth',
      description: 'Expanded our reach with innovative teaching methodologies',
      achievement: '500+ Students Worldwide',
      icon: '🌿'
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Introduced personalized learning and special needs programs',
      achievement: '1000+ Success Stories',
      icon: '🌳'
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Received awards for educational excellence and innovation',
      achievement: '2000+ Global Students',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Achieved highest satisfaction rates with comprehensive programs',
      achievement: '5000+ Transformed Lives',
      icon: '⭐'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the next generation of educational transformation',
      achievement: '10000+ Global Impact',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 font-nunito">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 overflow-hidden">
        {/* Organic Wave Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z" 
                  fill="url(#heroWave1)" opacity="0.4"/>
            <path d="M0,300 C400,200 800,400 1200,250 L1200,0 L0,0 Z" 
                  fill="url(#heroWave2)" opacity="0.3"/>
            <path d="M0,400 C200,300 600,500 1000,350 C1100,325 1200,400 1200,400 L1200,0 L0,0 Z" 
                  fill="url(#heroWave3)" opacity="0.2"/>
            <defs>
              <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
              <linearGradient id="heroWave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <linearGradient id="heroWave3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-orange-200 relative z-10">
                <div className="inline-flex items-center px-6 py-3 bg-orange-50 rounded-full border-2 border-orange-200 shadow-lg mb-6">
                  <span className="text-orange-600 font-bold font-poppins text-lg">✨ Our Vision</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins leading-tight">
                  Transforming Tomorrow
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 mt-2">
                    Through Innovative Learning
                  </span>
                  <span className="block text-gray-700 mt-2">for Every Child!</span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  At BrainlyBees, we believe every child is unique and deserves an education that celebrates their individuality. 
                  We create transformative learning experiences that ignite curiosity, build confidence, and nurture the innovators 
                  and problem-solvers of tomorrow.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white border-4 border-orange-400 text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-orange-50">
                    Explore Our Vision
                  </button>
                  <a 
                    href="https://wa.me/919305454447" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins text-center"
                  >
                    Start Journey
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-orange-200">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/assets/teacher-with-all-kids.png"
                      alt="Nurturing Young Minds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-orange-200">
                    <span className="text-orange-600 text-lg font-bold font-poppins">Future Leaders!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white -mt-16 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl border-4 border-blue-200">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 font-poppins">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Our Vision Statement
              </span>
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              "To create an inspiring educational ecosystem where every child discovers their passion, develops their talents, 
              and gains the confidence to pursue their dreams while making a positive impact on the world."
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 overflow-hidden -mt-16 pt-24">
        {/* Flowing background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,600 C300,500 600,700 900,550 C1050,475 1200,600 1200,600 L1200,800 L0,800 Z" 
                  fill="url(#missionWave)" opacity="0.3"/>
            <defs>
              <linearGradient id="missionWave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="50%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
                Our Mission
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At BrainlyBees, we're committed to revolutionizing education by putting each child at the center of their learning journey. 
              We combine cutting-edge technology with proven pedagogical methods to create engaging, meaningful, and joyful educational 
              experiences that prepare children for success in life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-green-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Personalized Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Tailoring education to meet each child's unique learning style, pace, and interests for optimal growth.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-teal-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Holistic Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering cognitive, emotional, social, and creative development for well-rounded personalities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Future Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Preparing children with 21st-century skills and mindset to thrive in tomorrow's world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 overflow-hidden -mt-16 pt-24">
        {/* Flowing background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,600 C300,500 600,700 900,550 C1050,475 1200,600 1200,600 L1200,800 L0,800 Z" 
                  fill="url(#journeyWave)" opacity="0.3"/>
            <defs>
              <linearGradient id="journeyWave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3e8ff" />
                <stop offset="50%" stopColor="#e879f9" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings to educational excellence - the story of how we've grown alongside thousands of children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2 font-poppins">{step.year}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-center">
                  {step.description}
                </p>
                <div className="bg-purple-50 rounded-2xl p-4 text-center border-2 border-purple-200">
                  <span className="text-purple-700 font-bold text-lg">{step.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Right Learning Path */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white -mt-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Building Right Learning Path 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 mt-2">
                for Kids
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every child's learning journey is unique. We create personalized pathways that respect individual pace, 
              learning styles, and interests to ensure optimal growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 shadow-lg border-4 border-indigo-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Assessment & Analysis</h3>
                <p className="text-gray-600">
                  Understanding each child's strengths, challenges, and learning preferences through comprehensive assessment.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 shadow-lg border-4 border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Customized Curriculum</h3>
                <p className="text-gray-600">
                  Tailoring educational content and methodology to match individual learning styles and pace.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-200">
                <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/assets/teacher-helping-girl-kid-doubt.png"
                      alt="Personalized Learning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-6 shadow-lg border-4 border-cyan-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Progress Monitoring</h3>
                <p className="text-gray-600">
                  Continuous tracking and adjustment of learning paths based on real-time progress and feedback.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-6 shadow-lg border-4 border-teal-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Skill Development</h3>
                <p className="text-gray-600">
                  Building essential 21st-century skills including critical thinking, creativity, and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Curriculum Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden -mt-16 pt-24">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Basis of Our Dynamic and 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-2">
                Global Curriculum
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our curriculum is built on six fundamental pillars that ensure comprehensive development of every child.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(curriculumBasis).map((approach) => (
              <button
                key={approach}
                onClick={() => setSelectedCurriculum(approach)}
                className={`px-6 py-3 rounded-full font-bold font-poppins transition-all duration-300 ${
                  selectedCurriculum === approach
                    ? 'bg-white border-4 border-indigo-400 text-indigo-600 shadow-xl scale-105'
                    : 'bg-white border-2 border-purple-200 text-gray-700 shadow-lg hover:border-purple-300 hover:scale-105'
                }`}
              >
                {approach === 'cognitive' ? 'Cognitive Development' : 
                 approach === 'visualization' ? 'Visual Learning' : 
                 approach === 'conceptual' ? 'Foundational Mastery' : 
                 approach === 'behavioral' ? 'Character Excellence' : 
                 approach === 'personality' ? 'Personality Growth' : 
                 'Academic Integration'}
              </button>
            ))}
          </div>

          {/* Selected Curriculum Display */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-800 mb-3 font-poppins">
                    {curriculumBasis[selectedCurriculum as keyof typeof curriculumBasis].title}
                  </h3>
                  <p className="text-xl text-gray-600 font-medium mb-4">
                    {curriculumBasis[selectedCurriculum as keyof typeof curriculumBasis].subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {curriculumBasis[selectedCurriculum as keyof typeof curriculumBasis].description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-800 font-poppins">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {curriculumBasis[selectedCurriculum as keyof typeof curriculumBasis].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-white border-4 border-indigo-400 text-indigo-600 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-indigo-50">
                    Learn More About This Approach
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 h-full flex items-center justify-center">
                  <div className="relative w-full h-96 lg:h-full rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={curriculumBasis[selectedCurriculum as keyof typeof curriculumBasis].image}
                      alt="Curriculum Approach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden -mt-16 pt-24">
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-amber-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
                  Our Philosophy
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Educational Philosophy —
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 border-4 border-amber-200">
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 text-center leading-relaxed font-poppins">
                "Learning is not about filling empty vessels, but about igniting the spark of curiosity 
                and wonder that already exists within every child."
              </blockquote>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
              At BrainlyBees, we understand that every child learns differently and has unique strengths waiting to be discovered. 
              Our approach focuses on creating adaptive learning environments where children feel safe to explore, experiment, 
              and express themselves while building strong foundational skills and confidence.
            </p>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white border-4 border-amber-400 text-amber-600 px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-amber-50">
                  Discover Our Approach
                </button>
                <a 
                  href="https://wa.me/919305454447" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins text-center"
                >
                  Start Your Child's Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden -mt-16 pt-24">
        {/* Flowing background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,600 C300,500 600,700 900,550 C1050,475 1200,600 1200,600 L1200,800 L0,800 Z" 
                  fill="url(#impactWave)" opacity="0.3"/>
            <defs>
              <linearGradient id="impactWave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="50%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
                Our Global Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming lives across the globe through innovative education and personalized learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-teal-200 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🌍</div>
              <div className="text-4xl font-bold text-teal-600 mb-2 font-poppins">15+</div>
              <div className="text-lg text-gray-600 font-medium">Countries Served</div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-cyan-200 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">👨‍🎓</div>
              <div className="text-4xl font-bold text-cyan-600 mb-2 font-poppins">5,000+</div>
              <div className="text-lg text-gray-600 font-medium">Students Worldwide</div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📈</div>
              <div className="text-4xl font-bold text-blue-600 mb-2 font-poppins">98%</div>
              <div className="text-lg text-gray-600 font-medium">Success Rate</div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-indigo-200 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">👩‍🏫</div>
              <div className="text-4xl font-bold text-indigo-600 mb-2 font-poppins">200+</div>
              <div className="text-lg text-gray-600 font-medium">Expert Educators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Values */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white -mt-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Our Core Values &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mt-2">
                Leadership Principles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The fundamental beliefs and principles that guide every decision we make and every program we design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl border-4 border-rose-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Love & Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Building genuine relationships with children through empathy, understanding, and unconditional support 
                that creates a safe learning environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-xl border-4 border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Excellence in Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintaining the highest standards in curriculum design, teaching methodologies, and student outcomes 
                to ensure every child reaches their full potential.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl border-4 border-indigo-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Inclusive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring every child, regardless of background, abilities, or learning style, has access to quality 
                education that celebrates their uniqueness.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border-4 border-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Innovation & Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously evolving our methods and embracing new technologies to enhance learning experiences 
                and prepare children for the future.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 shadow-xl border-4 border-cyan-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Character Building</h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering strong moral values, empathy, and leadership qualities that help children become 
                responsible global citizens.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-8 shadow-xl border-4 border-teal-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Future Readiness</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipping children with critical thinking, creativity, and adaptability skills needed to thrive 
                in an ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden -mt-16 pt-24">
        {/* Flowing background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z" 
                  fill="url(#ctaWave1)" opacity="0.4"/>
            <path d="M0,400 C400,300 800,500 1200,350 L1200,0 L0,0 Z" 
                  fill="url(#ctaWave2)" opacity="0.3"/>
            <defs>
              <linearGradient id="ctaWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e879f9" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="ctaWave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-purple-200">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Join Us in 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 mt-2">
                Shaping Tomorrow
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Be part of our mission to create a world where every child discovers their unique potential and becomes 
              a confident leader of tomorrow. Together, we can transform education and transform lives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-gray-800 mb-2 font-poppins">Start Learning</h3>
                <p className="text-gray-600 text-sm">Begin your child's transformative educational journey</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border-2 border-pink-200">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-gray-800 mb-2 font-poppins">Partner with Us</h3>
                <p className="text-gray-600 text-sm">Collaborate to expand our global educational impact</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-6 border-2 border-rose-200">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-bold text-gray-800 mb-2 font-poppins">Join Our Team</h3>
                <p className="text-gray-600 text-sm">Become part of our passionate education community</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919305454447" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins text-center"
              >
                Start Your Journey Today
              </a>
              <button className="bg-white border-4 border-purple-400 text-purple-600 px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-purple-50">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
