'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { useState } from 'react';

export default function OnlineSchoolPage() {
  const [selectedGrade, setSelectedGrade] = useState('elementary');

  const grades = [
    {
      id: 'elementary',
      name: 'Elementary (K-5)',
      description: 'Foundation building with interactive learning',
      image: '/src/assets/cute-kid-doing-work.png',
      subjects: ['Mathematics', 'English Language Arts', 'Science', 'Social Studies', 'Art'],
      features: ['Interactive Lessons', 'Virtual Field Trips', 'Creative Projects', 'Peer Collaboration']
    },
    {
      id: 'middle',
      name: 'Middle School (6-8)',
      description: 'Comprehensive curriculum with advanced concepts',
      image: '/src/assets/Boy-kid-doing-work.png',
      subjects: ['Advanced Math', 'Literature', 'Physical Science', 'World History', 'Foreign Languages'],
      features: ['Laboratory Experiments', 'Research Projects', 'Critical Thinking', 'Digital Citizenship']
    },
    {
      id: 'high',
      name: 'High School (9-12)',
      description: 'College-preparatory education with specialization',
      image: '/src/assets/kid-with-graduation-outfit.png',
      subjects: ['Calculus', 'Advanced Literature', 'Chemistry & Physics', 'AP Courses', 'Career Prep'],
      features: ['College Counseling', 'Internships', 'Advanced Placement', 'Leadership Programs']
    }
  ];

  const schoolFeatures = [
    {
      title: 'Accredited Curriculum',
      description: 'Fully accredited program recognized globally',
      image: '/src/assets/teacher-reading-for-kids.png',
      benefits: ['International Recognition', 'College Preparation', 'Standardized Testing', 'Transcript Services']
    },
    {
      title: 'Expert Faculty',
      description: 'Certified teachers with years of experience',
      image: '/src/assets/teacher-with-all-kids.png',
      benefits: ['Advanced Degrees', 'Specialized Training', 'Continuous Development', 'Student-Focused Approach']
    },
    {
      title: 'Flexible Learning',
      description: 'Learn at your own pace with personalized schedules',
      image: '/src/assets/kid-enjoying.png',
      benefits: ['Self-Paced Learning', 'Flexible Schedules', 'Global Accessibility', '24/7 Support']
    },
    {
      title: 'Technology Integration',
      description: 'Cutting-edge learning platforms and tools',
      image: '/src/assets/teacher-teaching-kids-about-plants.png',
      benefits: ['Interactive Platforms', 'Virtual Labs', 'Digital Resources', 'AI-Powered Learning']
    }
  ];

  const dailySchedule = [
    { time: '9:00 AM', activity: 'Morning Assembly & Announcements', type: 'community' },
    { time: '9:30 AM', activity: 'Core Subject - Mathematics', type: 'academic' },
    { time: '10:30 AM', activity: 'Interactive Break & Discussion', type: 'social' },
    { time: '11:00 AM', activity: 'Language Arts & Literature', type: 'academic' },
    { time: '12:00 PM', activity: 'Lunch Break & Free Time', type: 'break' },
    { time: '1:00 PM', activity: 'Science Laboratory Session', type: 'practical' },
    { time: '2:00 PM', activity: 'Social Studies & History', type: 'academic' },
    { time: '3:00 PM', activity: 'Creative Arts & Projects', type: 'creative' },
    { time: '4:00 PM', activity: 'Study Hall & Homework Support', type: 'support' }
  ];

  const achievements = [
    { metric: '95%', label: 'College Acceptance Rate', icon: '🎓' },
    { metric: '4.8/5', label: 'Parent Satisfaction', icon: '⭐' },
    { metric: '1000+', label: 'Graduated Students', icon: '👨‍🎓' },
    { metric: '98%', label: 'Course Completion Rate', icon: '✅' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Complete 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> Online School</span>
                <br />Experience
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A fully accredited online school providing comprehensive K-12 education with personalized learning paths, 
                expert teachers, and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Enroll Today
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                  Schedule Tour
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/src/assets/teacher-with-kids-doing-ring-activity.png"
                  alt="Online School"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">Interactive Classroom</h3>
                        <p className="text-sm text-gray-600">Live collaboration with peers</p>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-white">+12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-2">{achievement.metric}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete K-12 Education Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate curriculum designed to challenge and inspire students at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grades.map((grade) => (
              <div key={grade.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={grade.image}
                    alt={grade.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{grade.name}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{grade.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Core Subjects:</h4>
                    <div className="space-y-2">
                      {grade.subjects.map((subject, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {grade.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose BrainlyBees Online School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to provide the best online educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {schoolFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sample Daily Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-structured day designed to maximize learning while maintaining work-life balance.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
              <h3 className="text-2xl font-bold text-white text-center">Monday - Friday Schedule</h3>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-sm font-semibold text-gray-900">{item.time}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${
                      item.type === 'academic' ? 'bg-blue-500' :
                      item.type === 'practical' ? 'bg-green-500' :
                      item.type === 'creative' ? 'bg-purple-500' :
                      item.type === 'social' ? 'bg-orange-500' :
                      item.type === 'break' ? 'bg-gray-400' :
                      item.type === 'support' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}></div>
                    <div className="flex-grow">
                      <span className="text-gray-900 font-medium">{item.activity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Enrollment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with our easy three-step enrollment process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application & Assessment</h3>
              <p className="text-gray-600">
                Complete the online application and take our placement assessment to determine the right grade level.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Orientation & Setup</h3>
              <p className="text-gray-600">
                Attend our comprehensive orientation session and set up your personalized learning environment.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Learning</h3>
              <p className="text-gray-600">
                Begin your educational journey with full support from our dedicated academic advisors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Child's Education?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our thriving online school community and give your child the education they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Start Application
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-500 transition-all duration-300">
                Download Brochure
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