'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';

export default function OfflineProgramsPage() {
  const [selectedAge, setSelectedAge] = useState('4-6');

  // Age-based programs for offline learning
  const agePrograms = {
    '4-6': {
      title: 'Early Learning Foundation',
      subtitle: 'Building Basics Through Play',
      description: 'Interactive offline activities that introduce fundamental concepts through hands-on learning, creative play, and structured activities with direct teacher interaction.',
      image: '/assets/teacher-with-kids-doing-ring-activity.png',
      features: [
        'Hands-on learning materials and manipulatives',
        'Interactive storytelling and creative activities',
        'Basic math concepts through physical games',
        'Language development through songs and rhymes',
        'Art and craft projects for creativity',
        'Social skills development in group settings'
      ]
    },
    '7-9': {
      title: 'Primary Skills Development',
      subtitle: 'Core Academic Foundation',
      description: 'Comprehensive offline programs focusing on essential academic skills with structured learning activities, practical exercises, and face-to-face collaborative projects.',
      image: '/assets/teacher-helping-girl-kid-doubt.png',
      features: [
        'Structured reading and writing workshops',
        'Math problem-solving with physical tools',
        'Science experiments and observations',
        'Group projects and teamwork activities',
        'Critical thinking through puzzles and games',
        'Presentation skills and confidence building'
      ]
    },
    '10-12': {
      title: 'Advanced Academic Skills',
      subtitle: 'Pre-Teen Excellence',
      description: 'Advanced offline learning programs that prepare students for higher education with challenging projects, research activities, and direct mentorship from experienced teachers.',
      image: '/assets/teacher-solving-boy-kid-doubt.png',
      features: [
        'Research projects and information literacy',
        'Advanced mathematical concepts and applications',
        'Scientific method and laboratory work',
        'Creative writing and literary analysis',
        'Leadership skills and project management',
        'Study skills and time management'
      ]
    },
    '13+': {
      title: 'Teen Academic Mastery',
      subtitle: 'High School Preparation',
      description: 'Comprehensive offline programs designed for teenagers, focusing on college preparation, life skills, and advanced academic concepts through intensive classroom workshops.',
      image: '/assets/teacher-asking-question-students-saying-answer.png',
      features: [
        'College preparation and academic planning',
        'Advanced STEM projects and competitions',
        'Essay writing and communication skills',
        'Critical analysis and debate techniques',
        'Career exploration and internship prep',
        'Life skills and financial literacy'
      ]
    }
  };

  // Subject areas for offline learning
  const subjectAreas = [
    {
      title: 'Mathematics & Logic',
      description: 'Hands-on math learning with physical manipulatives, problem-solving games, and real-world applications.',
      icon: '🧮',
      activities: ['Mathematical games', 'Logic puzzles', 'Measurement activities', 'Pattern recognition']
    },
    {
      title: 'Science & Discovery',
      description: 'Experimental learning through laboratory work, nature studies, and hands-on scientific investigations.',
      icon: '🔬',
      activities: ['Lab experiments', 'Nature exploration', 'Scientific observations', 'Model building']
    },
    {
      title: 'Language & Literature',
      description: 'Reading, writing, and communication skills through storytelling, drama, and creative writing workshops.',
      icon: '📚',
      activities: ['Creative writing', 'Reading circles', 'Drama activities', 'Public speaking']
    },
    {
      title: 'Arts & Creativity',
      description: 'Artistic expression through painting, crafts, music, and creative projects that inspire imagination.',
      icon: '🎨',
      activities: ['Art projects', 'Craft making', 'Music sessions', 'Creative expression']
    },
    {
      title: 'Social Skills & Leadership',
      description: 'Building confidence, teamwork, and leadership through group activities and collaborative projects.',
      icon: '🤝',
      activities: ['Team building', 'Group projects', 'Leadership activities', 'Communication skills']
    },
    {
      title: 'Physical & Wellness',
      description: 'Physical development and wellness through sports, yoga, mindfulness, and healthy living activities.',
      icon: '⚽',
      activities: ['Sports activities', 'Yoga sessions', 'Mindfulness practice', 'Health education']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 via-rose-100 to-fuchsia-100 overflow-hidden">
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
                <stop offset="0%" stopColor="#fce7f3" />
                <stop offset="50%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#f9a8d4" />
              </linearGradient>
              <linearGradient id="heroWave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="heroWave3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>
          </svg>
          {/* Floating organic shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-rose-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-fuchsia-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 bg-pink-400 rounded-full blur-2xl opacity-40"></div>
        </div>

        {/* Flowing transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,20 600,100 900,40 C1050,10 1200,80 1200,80 L1200,120 L0,120 Z"
                  fill="url(#heroToPrograms)" />
            <defs>
              <linearGradient id="heroToPrograms" x1="0%" y1="0%" x2="100%" y2="100%">
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
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-pink-200 shadow-lg">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  <span className="text-pink-700 font-bold text-sm">Real Hands-On Learning!</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins">
                  Hands-On Learning
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 mt-2">
                    Adventures!
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Amazing in-person classes where kids touch, build, and create! Real experiments, crafts, and activities with friends and teachers.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-pink-200">
                  <div className="text-2xl md:text-3xl font-bold text-pink-600 font-poppins">15K+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Kids Engaged</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-rose-200">
                  <div className="text-2xl md:text-3xl font-bold text-rose-600 font-poppins">95%</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Love Hands-On</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-fuchsia-200">
                  <div className="text-2xl md:text-3xl font-bold text-fuchsia-600 font-poppins">4.8★</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Parent Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation">
                  <button className="bg-white border-3 border-pink-400 text-pink-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-pink-50">
                    Schedule Visit
                  </button>
                </Link>
                <a
                  href="https://wa.me/919837998535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins text-center"
                >
                  Ask Questions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-pink-200">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/assets/teacher-with-all-kids.png"
                      alt="Offline Learning Classroom"
                      width={400}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-pink-200">
                    <span className="text-pink-700 text-lg font-bold font-poppins">Real Classroom Fun!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs by Age */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from hero */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#ageFromHero)" />
            <defs>
              <linearGradient id="ageFromHero" x1="0%" y1="0%" x2="100%" y2="100%">
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
                  fill="url(#ageGroupShape1)" opacity="0.3"/>
            <path d="M600,0 C800,150 1000,250 1200,100 L1200,0 Z"
                  fill="url(#ageGroupShape2)" opacity="0.4"/>
            <defs>
              <linearGradient id="ageGroupShape1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
              <linearGradient id="ageGroupShape2" x1="0%" y1="0%" x2="100%" y2="100%">
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
                  fill="url(#ageToSubjects)" />
            <defs>
              <linearGradient id="ageToSubjects" x1="0%" y1="0%" x2="100%" y2="100%">
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
              <span className="text-amber-700 font-bold text-sm">Perfect for Every Age!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Fun Learning for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 mt-2">
                Every Age Group
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate hands-on learning experiences designed just for your child&apos;s stage!
            </p>
          </div>

          {/* Age Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.keys(agePrograms).map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-8 py-4 rounded-full font-bold font-poppins transition-all duration-300 ${
                  selectedAge === age
                    ? 'bg-white border-3 border-orange-400 text-orange-600 shadow-xl scale-105'
                    : 'bg-white border-2 border-amber-200 text-gray-700 shadow-lg hover:border-amber-300 hover:scale-105'
                }`}
              >
                Ages {age}
              </button>
            ))}
          </div>

          {/* Selected Program Display */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-amber-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3 font-poppins">
                      {agePrograms[selectedAge as keyof typeof agePrograms].title}
                    </h3>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-bold mb-6 font-poppins">
                      {agePrograms[selectedAge as keyof typeof agePrograms].subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {agePrograms[selectedAge as keyof typeof agePrograms].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg font-poppins">What&apos;s Super Cool:</h4>
                    <div className="space-y-3">
                      {agePrograms[selectedAge as keyof typeof agePrograms].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="https://wa.me/919837998535" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white border-3 border-orange-400 text-orange-600 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-orange-50">
                      Join This Program
                    </button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 h-full flex items-center justify-center">
                  <div className="relative w-full h-96 lg:h-full rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={agePrograms[selectedAge as keyof typeof agePrograms].image}
                      alt="Offline Learning Program"
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

      {/* Subject Areas */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from age programs */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#subjectsFromAge)" />
            <defs>
              <linearGradient id="subjectsFromAge" x1="0%" y1="0%" x2="100%" y2="100%">
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
                  fill="url(#subjectShape1)" opacity="0.3"/>
            <path d="M0,100 C300,400 600,200 1200,500 L1200,0 L0,0 Z"
                  fill="url(#subjectShape2)" opacity="0.4"/>
            <defs>
              <linearGradient id="subjectShape1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dcfce7" />
                <stop offset="50%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
              <linearGradient id="subjectShape2" x1="0%" y1="0%" x2="100%" y2="100%">
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
                  fill="url(#subjectsToWhy)" />
            <defs>
              <linearGradient id="subjectsToWhy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-emerald-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-emerald-700 font-bold text-sm">All Subjects Covered!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Learning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 mt-2">
                Subject Areas
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Fun hands-on learning across all subjects with real experiments and creative activities!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectAreas.map((subject, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-4 border-emerald-200 hover:border-emerald-300 hover:scale-105 group">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{subject.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                    {subject.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {subject.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-800 mb-3 font-poppins">Cool Activities:</h4>
                  <div className="space-y-3">
                    {subject.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="https://wa.me/919837998535" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-white border-3 border-emerald-400 text-emerald-600 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-emerald-50">
                    Try This Subject
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Offline Learning */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from subjects */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#whyFromSubjects)" />
            <defs>
              <linearGradient id="whyFromSubjects" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fed7aa" />
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
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
              <linearGradient id="whyShape2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating shapes */}
          <div className="absolute top-24 left-24 w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute bottom-32 right-32 w-28 h-28 bg-orange-300 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-amber-300 rounded-full blur-2xl opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-amber-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-amber-700 font-bold text-sm">Hands-On is the Best!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 mt-2">
                Offline Learning?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Personal Attention',
                description: 'One-on-one help and encouragement from amazing teachers who really care!',
                icon: '👨‍🏫'
              },
              {
                title: 'Hands-On Fun',
                description: 'Touch, build, and create real things that help you understand better!',
                icon: '✋'
              },
              {
                title: 'Friend Time',
                description: 'Learn and play with friends while working on cool projects together!',
                icon: '🤝'
              },
              {
                title: 'Real Skills',
                description: 'Learn things you can actually use in real life through fun activities!',
                icon: '🌟'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-4 border-amber-200 hover:border-amber-300 hover:scale-105">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{benefit.description}</p>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-amber-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
                Ready for Amazing Hands-On Learning?
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Join thousands of happy kids who love learning through real experiments, creative projects, and fun activities!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <button className="bg-white border-3 border-amber-400 text-amber-600 px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-amber-50">
                    Schedule Visit
                  </button>
                </Link>
                <a
                  href="https://wa.me/919837998535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins text-center"
                >
                  Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
