'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { useState } from 'react';
import Image from 'next/image';

export default function SpecialNeedsPage() {
  const [selectedApproach, setSelectedApproach] = useState('individual');

  const supportApproaches = {
    individual: {
      title: 'Individualized Learning Plans',
      subtitle: 'Every Child is Unique',
      description: 'Customized education plans designed specifically for your child\'s learning style, strengths, and areas for growth.',
      image: '/assets/teacher-helping-girl-kid-doubt.png',
      features: [
        'Personal learning goals and milestones',
        'Adaptive teaching methods and materials',
        'Regular progress assessments and adjustments',
        'One-on-one attention and support',
        'Family involvement in planning process',
        'Flexible pacing based on child\'s needs'
      ],
      duration: 'Customized timing',
      approach: 'Personalized methodology'
    },
    behavioral: {
      title: 'Behavioral Support Services',
      subtitle: 'Building Positive Behaviors',
      description: 'Evidence-based behavioral interventions to help children develop self-regulation, social skills, and positive learning behaviors.',
      image: '/assets/teacher-solving-boy-kid-doubt.png',
      features: [
        'Applied Behavior Analysis (ABA) techniques',
        'Positive reinforcement strategies',
        'Social skills development activities',
        'Emotional regulation training',
        'Peer interaction support',
        'Family behavioral coaching'
      ],
      duration: 'Ongoing support',
      approach: 'Evidence-based methods'
    },
    communication: {
      title: 'Communication Development',
      subtitle: 'Finding Their Voice',
      description: 'Comprehensive communication support including speech, language, and alternative communication methods.',
      image: '/assets/lady-teacher-telling-story.png',
      features: [
        'Speech and language therapy integration',
        'Alternative communication systems',
        'Visual communication aids',
        'Social communication skills',
        'Technology-assisted communication',
        'Family communication strategies'
      ],
      duration: 'Progressive development',
      approach: 'Multi-modal communication'
    },
    sensory: {
      title: 'Sensory Integration Support',
      subtitle: 'Understanding Sensory Needs',
      description: 'Specialized support for children with sensory processing differences to create comfortable learning environments.',
      image: '/assets/teacher-teaching-kids-about-plants.png',
      features: [
        'Sensory assessment and planning',
        'Adaptive learning environments',
        'Sensory regulation techniques',
        'Calming strategies and tools',
        'Sensory-friendly activities',
        'Environmental modifications'
      ],
      duration: 'Continuous adaptation',
      approach: 'Sensory-responsive methods'
    }
  };

  const learningDifficulties = [
    {
      title: 'Autism Spectrum Conditions',
      description: 'Supporting children on the autism spectrum with individualized approaches for communication, social interaction, and learning.',
      icon: '🧩',
      supportAreas: ['Social communication', 'Sensory processing', 'Routine and structure', 'Special interests integration']
    },
    {
      title: 'ADHD & Attention Challenges',
      description: 'Helping children with attention differences develop focus, organization, and self-regulation skills.',
      icon: '⚡',
      supportAreas: ['Focus and attention', 'Executive function', 'Movement integration', 'Organizational skills']
    },
    {
      title: 'Learning Differences',
      description: 'Supporting various learning differences including dyslexia, dyscalculia, and processing challenges.',
      icon: '📚',
      supportAreas: ['Reading support', 'Math concepts', 'Writing skills', 'Processing strategies']
    },
    {
      title: 'Developmental Delays',
      description: 'Comprehensive support for children with developmental delays across multiple areas.',
      icon: '🌱',
      supportAreas: ['Cognitive development', 'Motor skills', 'Language development', 'Social skills']
    },
    {
      title: 'Emotional & Behavioral Needs',
      description: 'Supporting children with emotional regulation and behavioral challenges.',
      icon: '💝',
      supportAreas: ['Emotional regulation', 'Coping strategies', 'Social skills', 'Behavioral support']
    },
    {
      title: 'Intellectual Disabilities',
      description: 'Adaptive learning approaches for children with intellectual disabilities.',
      icon: '🌟',
      supportAreas: ['Life skills', 'Adaptive learning', 'Independence building', 'Community integration']
    }
  ];

  const whyChooseUs = [
    {
      title: 'We Understand Each Child',
      description: 'Our educators have deep training in child psychology and special needs education, creating connections that make learning joyful.',
      icon: '❤️',
      benefits: ['Individual attention', 'Emotional safety', 'Trust building', 'Interest-based learning']
    },
    {
      title: 'Expert You Can Trust',
      description: 'Certified special education teachers with years of experience working with children with diverse learning needs.',
      icon: '🎓',
      benefits: ['Specialized training', 'Continuous learning', 'Evidence-based methods', 'Family partnership']
    },
    {
      title: 'Learning at Their Pace',
      description: 'Every child learns differently. We adapt our methods to match how your child learns best.',
      icon: '🐢',
      benefits: ['Flexible pacing', 'Multiple learning styles', 'Adaptive materials', 'Progress celebration']
    },
    {
      title: 'Celebrating Every Achievement',
      description: 'We recognize and celebrate every milestone, no matter how small, building confidence and motivation.',
      icon: '🎉',
      benefits: ['Progress recognition', 'Confidence building', 'Motivation support', 'Success celebration']
    }
  ];

  const assessmentSteps = [
    {
      step: 1,
      title: 'Family Consultation',
      description: 'Understanding your child\'s unique needs, strengths, and family goals',
      includes: ['Family discussion', 'Needs assessment', 'Goal setting', 'Question answering']
    },
    {
      step: 2,
      title: 'Child Assessment',
      description: 'Gentle, play-based assessment to understand learning style and needs',
      includes: ['Learning style evaluation', 'Strength identification', 'Challenge assessment', 'Interest exploration']
    },
    {
      step: 3,
      title: 'Plan Development',
      description: 'Creating a personalized learning plan with your family input',
      includes: ['Goal setting', 'Method selection', 'Timeline planning', 'Family collaboration']
    },
    {
      step: 4,
      title: 'Learning Journey',
      description: 'Beginning the personalized learning experience with ongoing support',
      includes: ['Regular sessions', 'Progress monitoring', 'Plan adjustments', 'Family updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-25 via-orange-25 to-amber-25 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 overflow-hidden">
        {/* Organic Wave Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            {/* Wave layers for organic feel */}
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z"
                  fill="url(#heroWave1)" opacity="0.4"/>
            <path d="M0,300 C400,200 800,400 1200,250 L1200,0 L0,0 Z"
                  fill="url(#heroWave2)" opacity="0.3"/>
            <path d="M0,400 C200,300 600,500 1000,350 C1100,325 1200,400 1200,400 L1200,0 L0,0 Z"
                  fill="url(#heroWave3)" opacity="0.2"/>
            <defs>
              <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fefce8" />
                <stop offset="50%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fed7aa" />
              </linearGradient>
              <linearGradient id="heroWave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
              <linearGradient id="heroWave3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
          {/* Floating organic shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-amber-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 bg-orange-400 rounded-full blur-2xl opacity-40"></div>
        </div>

        {/* Flowing transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,20 600,100 900,40 C1050,10 1200,80 1200,80 L1200,120 L0,120 Z"
                  fill="url(#heroToApproaches)" />
            <defs>
              <linearGradient id="heroToApproaches" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Fun Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-orange-200 shadow-lg">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-orange-700 font-bold text-sm">Every Child Can Learn!</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins">
                  Special Needs
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-amber-600 mt-2">
                    Education & Support
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Caring, individualized education designed for children with special needs. We celebrate every child&apos;s unique way of learning!
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-orange-200">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 font-poppins">500+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Children Supported</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-amber-200">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600 font-poppins">95%</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Progress Success</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-yellow-200">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600 font-poppins">4.9★</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Family Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white border-3 border-yellow-400 text-orange-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-yellow-50">
                  Schedule Assessment
                </button>
                <a
                  href="https://wa.me/916397316375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-300 to-orange-300 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins text-center"
                >
                  Chat with Expert
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-yellow-200">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/teacher-with-all-kids.png"
                      alt="Special Needs Support"
                      width={400}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-yellow-200">
                    <span className="text-orange-600 text-lg font-bold font-poppins">Inclusive Learning!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Approaches */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from hero */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#approachFromHero)" />
            <defs>
              <linearGradient id="approachFromHero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Organic background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M400,0 C600,200 800,100 1200,300 L1200,0 Z"
                  fill="url(#approachShape1)" opacity="0.3"/>
            <path d="M600,0 C800,150 1000,250 1200,100 L1200,0 Z"
                  fill="url(#approachShape2)" opacity="0.4"/>
            <defs>
              <linearGradient id="approachShape1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
              <linearGradient id="approachShape2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>

          {/* Organic blob shapes */}
          <div className="absolute top-32 left-20 w-40 h-40 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-20 right-32 w-28 h-28 bg-orange-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-amber-300 rounded-full blur-2xl opacity-40"></div>
        </div>

        {/* Flowing transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C300,100 600,20 900,80 C1050,100 1200,40 1200,40 L1200,120 L0,120 Z"
                  fill="url(#approachToDifficulties)" />
            <defs>
              <linearGradient id="approachToDifficulties" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dcfce7" />
                <stop offset="50%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#86efac" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-amber-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-amber-700 font-bold text-sm">Personalized Support Methods!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Our Support
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 mt-2">
                Approaches
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Specialized methods designed to help every child learn and grow at their own pace.
            </p>
          </div>

          {/* Approach Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.keys(supportApproaches).map((approach) => (
              <button
                key={approach}
                onClick={() => setSelectedApproach(approach)}
                className={`px-8 py-4 rounded-full font-bold font-poppins transition-all duration-300 ${
                  selectedApproach === approach
                    ? 'bg-white border-3 border-yellow-400 text-orange-500 shadow-xl scale-105'
                    : 'bg-white border-2 border-amber-200 text-gray-700 shadow-lg hover:border-amber-300 hover:scale-105'
                }`}
              >
                {supportApproaches[approach as keyof typeof supportApproaches].title.split(' ')[0]} {approach === 'individual' ? 'Plans' : approach === 'behavioral' ? 'Support' : approach === 'communication' ? 'Development' : 'Integration'}
              </button>
            ))}
          </div>

          {/* Selected Approach Display */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-amber-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3 font-poppins">
                      {supportApproaches[selectedApproach as keyof typeof supportApproaches].title}
                    </h3>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-bold mb-6 font-poppins">
                      {supportApproaches[selectedApproach as keyof typeof supportApproaches].subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {supportApproaches[selectedApproach as keyof typeof supportApproaches].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg font-poppins">What We Include:</h4>
                    <div className="space-y-3">
                      {supportApproaches[selectedApproach as keyof typeof supportApproaches].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                    <div className="text-center bg-amber-50 rounded-2xl p-4 border-2 border-amber-200">
                      <span className="text-sm text-gray-500 block font-medium">Timeline:</span>
                      <div className="font-bold text-gray-800 text-lg font-poppins">
                        {supportApproaches[selectedApproach as keyof typeof supportApproaches].duration}
                      </div>
                    </div>
                    <div className="text-center bg-orange-50 rounded-2xl p-4 border-2 border-orange-200">
                      <span className="text-sm text-gray-500 block font-medium">Method:</span>
                      <div className="font-bold text-gray-800 text-lg font-poppins">
                        {supportApproaches[selectedApproach as keyof typeof supportApproaches].approach}
                      </div>
                    </div>
                  </div>

                  <a href="https://wa.me/916397316375" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white border-3 border-yellow-400 text-orange-500 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-yellow-50">
                      Learn More About This
                    </button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 h-full flex items-center justify-center">
                  <div className="relative w-full h-96 lg:h-full rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={supportApproaches[selectedApproach as keyof typeof supportApproaches].image}
                      alt="Support Approach"
                      width={400}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Difficulties We Support */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from approaches */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#difficultiesFromApproach)" />
            <defs>
              <linearGradient id="difficultiesFromApproach" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Diagonal organic shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,0 C200,300 400,100 800,400 C1000,500 1200,200 1200,0 Z"
                  fill="url(#difficultiesShape1)" opacity="0.3"/>
            <path d="M0,100 C300,400 600,200 1200,500 L1200,0 L0,0 Z"
                  fill="url(#difficultiesShape2)" opacity="0.4"/>
            <defs>
              <linearGradient id="difficultiesShape1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dcfce7" />
                <stop offset="50%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
              <linearGradient id="difficultiesShape2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
            </defs>
          </svg>

          {/* Organic floating shapes */}
          <div className="absolute top-20 right-20 w-36 h-36 bg-emerald-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-32 left-24 w-32 h-32 bg-teal-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-green-300 rounded-full blur-2xl opacity-40"></div>
        </div>

        {/* Flowing transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C300,100 600,20 900,80 C1050,100 1200,40 1200,40 L1200,120 L0,120 Z"
                  fill="url(#difficultiesToWhy)" />
            <defs>
              <linearGradient id="difficultiesToWhy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="50%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-emerald-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-emerald-700 font-bold text-sm">We Support Every Learning Style!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Learning Challenges
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 mt-2">
                We Support
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every child learns differently. We provide specialized support for various learning challenges and differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningDifficulties.map((difficulty, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-emerald-200 hover:border-emerald-300 hover:scale-105 group">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{difficulty.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                    {difficulty.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {difficulty.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-800 mb-3 font-poppins">Support Areas:</h4>
                  <div className="space-y-3">
                    {difficulty.supportAreas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from difficulties */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#whyFromDifficulties)" />
            <defs>
              <linearGradient id="whyFromDifficulties" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Organic background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,800 C400,600 800,700 1200,500 L1200,800 Z"
                  fill="url(#whyShape1)" opacity="0.3"/>
            <path d="M200,800 C600,650 1000,750 1200,600 L1200,800 Z"
                  fill="url(#whyShape2)" opacity="0.4"/>
            <defs>
              <linearGradient id="whyShape1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="50%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </linearGradient>
              <linearGradient id="whyShape2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating shapes */}
          <div className="absolute top-24 left-24 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-32 right-32 w-28 h-28 bg-indigo-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-300 rounded-full blur-2xl opacity-40"></div>
        </div>

        {/* Flowing transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C300,100 600,20 900,80 C1050,100 1200,40 1200,40 L1200,120 L0,120 Z"
                  fill="url(#whyToAssessment)" />
            <defs>
              <linearGradient id="whyToAssessment" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="50%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-indigo-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-indigo-700 font-bold text-sm">Trusted by Families!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mt-2">
                KidCube Global
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We understand that every child is special and deserves education that celebrates their unique way of learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-indigo-200 hover:border-indigo-300 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl border-2 border-indigo-200">
                      {reason.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">{reason.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{reason.description}</p>
                    <div className="space-y-3">
                      {reason.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-100 via-sky-100 to-blue-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from why choose us */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#assessmentFromWhy)" />
            <defs>
              <linearGradient id="assessmentFromWhy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="50%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Organic background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,0 C200,300 400,100 800,400 C1000,500 1200,200 1200,0 Z"
                  fill="url(#assessmentShape1)" opacity="0.3"/>
            <path d="M0,100 C300,400 600,200 1200,500 L1200,0 L0,0 Z"
                  fill="url(#assessmentShape2)" opacity="0.4"/>
            <defs>
              <linearGradient id="assessmentShape1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="50%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
              <linearGradient id="assessmentShape2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>

          {/* Organic floating shapes */}
          <div className="absolute top-32 right-20 w-36 h-36 bg-cyan-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-24 left-32 w-32 h-32 bg-sky-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-sky-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
              <span className="text-sky-700 font-bold text-sm">Simple Assessment Process!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              How We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 mt-2">
                Get Started
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our gentle, caring process helps us understand your child&apos;s unique needs and create the perfect learning plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-4 border-sky-200 hover:border-sky-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">{step.title}</h3>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{step.description}</p>
                <div className="space-y-2">
                  {step.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-xs text-gray-600 bg-sky-50 rounded-full px-3 py-1 border border-sky-200">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 overflow-hidden">
        {/* Organic background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,800 C400,600 800,700 1200,500 L1200,800 Z"
                  fill="url(#ctaShape1)" opacity="0.3"/>
            <path d="M200,800 C600,650 1000,750 1200,600 L1200,800 Z"
                  fill="url(#ctaShape2)" opacity="0.4"/>
            <defs>
              <linearGradient id="ctaShape1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e9d5ff" />
                <stop offset="50%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </linearGradient>
              <linearGradient id="ctaShape2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-300 rounded-full blur-2xl opacity-40"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-20 relative">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-purple-200">
            <div className="inline-flex items-center px-6 py-3 bg-purple-50 rounded-full border-2 border-purple-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              <span className="text-purple-700 font-bold text-sm">Ready to Start the Journey?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Every Child Deserves to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 mt-2">
                Learn and Grow
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let us help your child discover their unique strengths and reach their full potential. Every small step forward is a celebration!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <button className="bg-white border-3 border-purple-400 text-purple-600 px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-purple-50">
                  Book Consultation
                </button>
              </Link>
              <a
                href="https://wa.me/916397316375"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-400 to-blue-400 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins text-center"
              >
                Chat with Our Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
