'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function OfflineProgramsPage() {
  const [selectedAge, setSelectedAge] = useState('4-6');

  // Age-based programs for offline learning
  const agePrograms = {
    '4-6': {
      title: 'Early Learning Foundation',
      subtitle: 'Building Basics Through Play',
      description: 'Interactive offline activities that introduce fundamental concepts through hands-on learning, creative play, and structured activities designed for young learners.',
      image: '/assets/boy-kid-explaining.png',
      features: [
        'Hands-on learning materials and manipulatives',
        'Interactive storytelling and creative activities',
        'Basic math concepts through physical games',
        'Language development through songs and rhymes',
        'Art and craft projects for creativity',
        'Social skills development in group settings'
      ],
      duration: '45 minutes',
      price: '$25/session'
    },
    '7-9': {
      title: 'Primary Skills Development',
      subtitle: 'Core Academic Foundation',
      description: 'Comprehensive offline programs focusing on essential academic skills with structured learning activities, practical exercises, and collaborative projects.',
      image: '/assets/girl-kid-explaining.png',
      features: [
        'Structured reading and writing workshops',
        'Math problem-solving with physical tools',
        'Science experiments and observations',
        'Group projects and teamwork activities',
        'Critical thinking through puzzles and games',
        'Presentation skills and confidence building'
      ],
      duration: '60 minutes',
      price: '$30/session'
    },
    '10-12': {
      title: 'Advanced Academic Skills',
      subtitle: 'Pre-Teen Excellence',
      description: 'Advanced offline learning programs that prepare students for higher education with challenging projects, research activities, and independent learning skills.',
      image: '/assets/world-map.png',
      features: [
        'Research projects and information literacy',
        'Advanced mathematical concepts and applications',
        'Scientific method and laboratory work',
        'Creative writing and literary analysis',
        'Leadership skills and project management',
        'Study skills and time management'
      ],
      duration: '75 minutes',
      price: '$35/session'
    },
    '13+': {
      title: 'Teen Academic Mastery',
      subtitle: 'High School Preparation',
      description: 'Comprehensive offline programs designed for teenagers, focusing on college preparation, life skills, and advanced academic concepts through intensive workshops.',
      image: '/assets/boy-kid-explaining.png',
      features: [
        'College preparation and academic planning',
        'Advanced STEM projects and competitions',
        'Essay writing and communication skills',
        'Critical analysis and debate techniques',
        'Career exploration and internship prep',
        'Life skills and financial literacy'
      ],
      duration: '90 minutes',
      price: '$40/session'
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-gray-800">Offline Learning</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
              Programs
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Hands-on educational experiences designed for face-to-face learning with personalized attention, 
            interactive activities, and real-world skill development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 shadow-xl">
              Explore Programs
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-sky-700 px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-sky-200">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>

      {/* Programs by Age */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Programs for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Every Age Group
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate offline learning experiences tailored to your child's developmental stage and learning needs.
            </p>
          </div>

          {/* Age Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.keys(agePrograms).map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedAge === age
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-violet-100'
                }`}
              >
                Ages {age}
              </button>
            ))}
          </div>

          {/* Selected Program Display */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      {agePrograms[selectedAge as keyof typeof agePrograms].title}
                    </h3>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 font-semibold mb-6">
                      {agePrograms[selectedAge as keyof typeof agePrograms].subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {agePrograms[selectedAge as keyof typeof agePrograms].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Program Features:</h4>
                    <ul className="space-y-3">
                      {agePrograms[selectedAge as keyof typeof agePrograms].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-12 pt-8 border-t border-gray-200">
                    <div>
                      <span className="text-sm text-gray-500 block">Session Duration:</span>
                      <div className="font-bold text-gray-800 text-lg">
                        {agePrograms[selectedAge as keyof typeof agePrograms].duration}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">Starting at:</span>
                      <div className="font-bold text-gray-800 text-lg">
                        {agePrograms[selectedAge as keyof typeof agePrograms].price}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
                    Enroll in Offline Program
                  </button>
                </div>
              </div>
              
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={agePrograms[selectedAge as keyof typeof agePrograms].image}
                  alt="Offline Learning Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Learning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Subject Areas
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive offline learning across all essential subjects with hands-on activities and real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectAreas.map((subject, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 group">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{subject.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {subject.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-gray-800 mb-3">Key Activities:</h4>
                  <div className="space-y-2">
                    {subject.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        <span className="text-gray-600 font-medium">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Offline Learning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Offline Learning?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Personal Attention',
                description: 'One-on-one guidance and immediate feedback from experienced instructors.',
                icon: '👨‍🏫'
              },
              {
                title: 'Hands-On Learning',
                description: 'Physical activities and manipulatives that enhance understanding and retention.',
                icon: '✋'
              },
              {
                title: 'Social Interaction',
                description: 'Face-to-face collaboration and communication with peers and teachers.',
                icon: '🤝'
              },
              {
                title: 'Real-World Skills',
                description: 'Practical applications and life skills development through direct experience.',
                icon: '🌟'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-white/50">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}