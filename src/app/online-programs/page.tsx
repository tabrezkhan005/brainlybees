'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function OnlineProgramsPage() {
  const [selectedAge, setSelectedAge] = useState('4-6');

  // Age-based programs
  const agePrograms = {
    '4-6': {
      title: 'Early Learners (Ages 4-6)',
      subtitle: 'Building Strong Foundations',
      description: 'Interactive programs designed to develop fundamental skills through play-based learning and engaging activities.',
      image: '/assets/teacher-with-kids-doing-ring-activity.png',
      features: [
        'Phonics and Early Reading',
        'Number Recognition and Basic Math',
        'Creative Arts and Crafts',
        'Social Skills Development',
        'Motor Skills Enhancement'
      ],
      duration: '30 minutes',
      price: '$25/session'
    },
    '7-9': {
      title: 'Primary Learners (Ages 7-9)',
      subtitle: 'Accelerating Academic Growth',
      description: 'Comprehensive curriculum focusing on core subjects while maintaining fun and interactive learning experiences.',
      image: '/assets/teacher-helping-girl-kid-doubt.png',
      features: [
        'Advanced Reading Comprehension',
        'Mathematical Problem Solving',
        'Science Exploration',
        'Writing Skills Development',
        'Critical Thinking Activities'
      ],
      duration: '45 minutes',
      price: '$30/session'
    },
    '10-12': {
      title: 'Middle School (Ages 10-12)',
      subtitle: 'Mastering Advanced Concepts',
      description: 'Challenging programs that prepare students for academic success with advanced concepts and study skills.',
      image: '/assets/teacher-solving-boy-kid-doubt.png',
      features: [
        'Advanced Mathematics',
        'Scientific Research Methods',
        'Essay Writing and Literature',
        'Problem-Based Learning',
        'Study Skills Mastery'
      ],
      duration: '60 minutes',
      price: '$35/session'
    },
    '13+': {
      title: 'High School (Ages 13+)',
      subtitle: 'Preparing for Future Success',
      description: 'Intensive programs focusing on exam preparation, advanced academics, and future career readiness.',
      image: '/assets/teacher-asking-question-students-saying-answer.png',
      features: [
        'Exam Preparation (SAT, AP, etc.)',
        'Advanced STEM Subjects',
        'Research and Analysis',
        'College Readiness',
        'Career Guidance'
      ],
      duration: '75 minutes',
      price: '$40/session'
    }
  };

  // Subject programs
  const subjectPrograms = [
    {
      title: 'Mathematics',
      description: 'From basic arithmetic to advanced calculus, our math programs build strong problem-solving skills.',
      image: '/assets/boy-kid-explaining.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Number Theory', 'Algebra', 'Geometry', 'Statistics', 'Calculus']
    },
    {
      title: 'Science',
      description: 'Explore the wonders of science through hands-on experiments and interactive demonstrations.',
      image: '/assets/girl-kid-explaining.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Physics', 'Chemistry', 'Biology', 'Earth Science', 'Environmental Science']
    },
    {
      title: 'English Language Arts',
      description: 'Develop strong communication skills through reading, writing, speaking, and listening activities.',
      image: '/assets/teacher-reading-for-kids.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Reading Comprehension', 'Creative Writing', 'Grammar', 'Literature', 'Public Speaking']
    },
    {
      title: 'Computer Science',
      description: 'Learn programming, computational thinking, and digital literacy skills for the modern world.',
      image: '/assets/kid-with-graduation-outfit.png',
      levels: ['Beginner', 'Intermediate', 'Advanced'],
      topics: ['Coding Basics', 'Web Development', 'Game Design', 'Robotics', 'AI Fundamentals']
    }
  ];

  // Learning benefits
  const learningBenefits = [
    {
      title: 'Personalized Learning Experience',
      description: 'Every lesson is tailored to your child\'s unique learning style, pace, and interests for maximum effectiveness.',
      image: '/assets/teacher-teaching-kids-about-plants.png'
    },
    {
      title: 'Expert Qualified Teachers',
      description: 'Our certified educators bring years of experience and passion for teaching to every session.',
      image: '/assets/lady-teacher-telling-story.png'
    },
    {
      title: 'Interactive Learning Tools',
      description: 'State-of-the-art technology and engaging activities make learning fun and memorable.',
      image: '/assets/tower-type-activity.png'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose class times that work best for your family with easy rescheduling options.',
      image: '/assets/kid-doing-homework.png'
    },
    {
      title: 'Progress Tracking',
      description: 'Regular assessments and detailed reports help monitor your child\'s academic growth.',
      image: '/assets/kid-with-books.png'
    },
    {
      title: 'Safe Learning Environment',
      description: 'Secure, monitored online classrooms provide a safe space for children to learn and grow.',
      image: '/assets/kids-doing-painting.png'
    }
  ];

  // Success stories
  const successStories = [
    {
      name: 'Emma Thompson',
      age: 8,
      program: 'Primary Mathematics',
      achievement: 'Improved test scores by 40%',
      quote: 'Emma went from struggling with basic math to solving complex problems with confidence.',
      image: '/assets/girl-saying-hi.png',
      location: 'California, USA'
    },
    {
      name: 'Alex Chen',
      age: 11,
      program: 'Science Explorer',
      achievement: 'Won school science fair',
      quote: 'Alex discovered a passion for science and now dreams of becoming an astronaut.',
      image: '/assets/boy-saying-hi.png',
      location: 'Singapore'
    },
    {
      name: 'Sofia Rodriguez',
      age: 6,
      program: 'Early Learning',
      achievement: 'Reading above grade level',
      quote: 'Sofia\'s confidence and love for learning have grown tremendously.',
      image: '/assets/cute-kid-doing-work.png',
      location: 'Madrid, Spain'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Online Learning
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                    Programs
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Personalized one-on-one tutoring that adapts to your child's unique learning style and pace. 
                  Expert teachers, interactive lessons, and proven results.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-purple-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50,000+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Taught</div>
                </div>
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-green-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-orange-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">4.9/5</div>
                  <div className="text-sm text-gray-600 font-medium">Parent Rating</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300">
                  Book Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/assets/teacher-with-all-kids.png"
                  alt="Online Learning"
                  className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-3xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full opacity-70"></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs by Age */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Programs Designed for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Every Age
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate curricula that grow with your child, ensuring optimal learning at every stage of development.
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
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-blue-100'
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
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold mb-6">
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
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-12 pt-8 border-t border-gray-200">
                    <div>
                      <span className="text-sm text-gray-500 block">Duration:</span>
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

                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg">
                    Start Learning Today
                  </button>
                </div>
              </div>
              
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={agePrograms[selectedAge as keyof typeof agePrograms].image}
                  alt="Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Programs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Subject-Focused
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Learning
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized programs in core subjects designed to build expertise and confidence in specific areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjectPrograms.map((subject, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/50 group">
                <div className="relative h-56">
                  <img 
                    src={subject.image}
                    alt={subject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                    {subject.title}
                  </h3>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {subject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Available Levels:</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.levels.map((level, levelIndex) => (
                        <span key={levelIndex} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-2xl text-sm font-semibold border border-green-200">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-800 mb-3">Key Topics:</h4>
                    <div className="space-y-2">
                      {subject.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-3">
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          <span className="text-gray-600 font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg">
                    Explore {subject.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                BrainlyBees?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of personalized, high-quality online education that delivers real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50">
                    <img 
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Student Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real students, real results. See how our programs have transformed learning journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-300 to-orange-300 shadow-lg">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">Age {story.age} • {story.location}</p>
                  <span className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-2xl text-sm font-semibold border border-green-200">
                    {story.achievement}
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{story.quote}"</p>
                  <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold">
                    Program: {story.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your Child's
            <span className="block">Learning Journey?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of families who have chosen BrainlyBees for personalized, effective online education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Start Free Trial
            </button>
            <button className="border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          
          <div className="text-white/80 text-lg font-medium">
            No credit card required • Free assessment • Personalized learning plan
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}