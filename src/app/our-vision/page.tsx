'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function OurVisionPage() {
  const coreValues = [
    {
      title: 'Excellence in Education',
      description: 'We strive for the highest standards in educational quality and student outcomes',
      image: '/src/assets/kid-with-graduation-outfit.png',
      icon: '🎓'
    },
    {
      title: 'Inclusive Learning',
      description: 'Every child deserves access to quality education regardless of their background or abilities',
      image: '/src/assets/teacher-with-all-kids.png',
      icon: '🤝'
    },
    {
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge technology to enhance learning experiences',
      image: '/src/assets/teacher-teaching-kids-about-plants.png',
      icon: '💡'
    },
    {
      title: 'Personalized Approach',
      description: 'Tailoring education to meet each child\'s unique learning style and pace',
      image: '/src/assets/teacher-helping-girl-kid-doubt.png',
      icon: '🎯'
    }
  ];

  const missionPoints = [
    {
      title: 'Empowering Young Minds',
      description: 'To unleash the limitless potential in every child through innovative and personalized learning experiences.',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Building Future Leaders',
      description: 'To develop critical thinking, creativity, and leadership skills that prepare children for tomorrow\'s challenges.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Creating Global Citizens',
      description: 'To foster understanding, empathy, and cultural awareness that transcends geographical boundaries.',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Nurturing Lifelong Learners',
      description: 'To instill a love for learning that continues throughout life, adapting to an ever-changing world.',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'BrainlyBees was founded with a vision to revolutionize online education for children',
      achievement: 'Launched with 50 students'
    },
    {
      year: '2021',
      title: 'Expansion',
      description: 'Expanded programs to include special needs education and multiple age groups',
      achievement: 'Reached 500+ students across 5 countries'
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Introduced AI-powered personalized learning and virtual reality experiences',
      achievement: 'Won "Best Educational Innovation" award'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Extended services to 15+ countries with localized curriculum adaptations',
      achievement: '2,000+ students and 50+ expert teachers'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Achieved highest satisfaction ratings and launched comprehensive online school',
      achievement: '5,000+ students with 98% satisfaction rate'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Expanding to reach 25,000+ students globally with cutting-edge technologies',
      achievement: 'Leading the future of education'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Education Officer',
      image: '/src/assets/lady-teacher-telling-story.png',
      background: 'Ph.D. in Educational Psychology, 15+ years in curriculum development',
      expertise: 'Special Needs Education, Curriculum Design'
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Head of Innovation',
      image: '/src/assets/teacher-reading-for-kids.png',
      background: 'Former MIT professor, Expert in Educational Technology',
      expertise: 'AI in Education, Learning Analytics'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Director of Student Success',
      image: '/src/assets/teacher-with-all-kids.png',
      background: 'Child Psychology specialist, Published researcher',
      expertise: 'Student Engagement, Learning Outcomes'
    }
  ];

  const globalImpact = [
    { metric: '25,000+', label: 'Students Worldwide', icon: '👨‍🎓' },
    { metric: '20+', label: 'Countries Served', icon: '🌍' },
    { metric: '98%', label: 'Student Success Rate', icon: '📈' },
    { metric: '500+', label: 'Expert Educators', icon: '👩‍🏫' }
  ];

  const futureGoals = [
    {
      title: 'Technology Integration',
      description: 'Implementing AI, VR, and AR technologies for immersive learning experiences',
      target: '2025-2026',
      image: '/src/assets/kid-enjoying.png'
    },
    {
      title: 'Global Accessibility',
      description: 'Making quality education accessible to underserved communities worldwide',
      target: '2025-2027',
      image: '/src/assets/kids-doing-painting.png'
    },
    {
      title: 'Research & Development',
      description: 'Advancing educational research and developing new learning methodologies',
      target: '2026-2028',
      image: '/src/assets/kid-keeping-book-on-head-and-thinking.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> Vision</span>
            <br />for the Future
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            To create a world where every child has access to exceptional education that nurtures their unique potential, 
            fosters creativity, and prepares them to become confident, capable leaders of tomorrow.
          </p>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="/src/assets/teacher-with-kids-doing-ring-activity.png"
                alt="Our Vision"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Empowering Every Child</h3>
                  <p className="text-gray-600">Building the foundation for lifelong success and happiness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core pillars that drive everything we do in our quest to transform education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our decisions and shape our educational approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global educational leader - our story of growth and impact.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="text-sm font-medium text-purple-600">{item.achievement}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
            Making a difference in children's lives across the globe through quality education.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalImpact.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders committed to transforming education and empowering young minds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{leader.background}</p>
                  <div className="text-sm text-gray-500">
                    <strong>Expertise:</strong> {leader.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Looking Ahead
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ambitious plans for the future of education and the innovations we're bringing to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={goal.image}
                    alt={goal.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {goal.target}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of our mission to create a world where every child has access to exceptional education. 
              Together, we can unlock unlimited potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Partner With Us
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-purple-500 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}