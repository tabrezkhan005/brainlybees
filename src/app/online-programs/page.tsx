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
      subtitle: 'Digital Learning Foundations',
      description: 'Interactive online programs designed to develop fundamental skills through engaging digital activities and virtual play-based learning.',
      image: '/assets/Boy-kid-doing-work.png',
      features: [
        'Interactive Online Phonics',
        'Digital Number Games and Math',
        'Virtual Arts and Creative Tools',
        'Online Social Skills Activities',
        'Digital Motor Skills Games'
      ],
      duration: '30 minutes',
      price: '$25/session'
    },
    '7-9': {
      title: 'Primary Learners (Ages 7-9)',
      subtitle: 'Virtual Academic Growth',
      description: 'Comprehensive online curriculum focusing on core subjects through interactive digital platforms and virtual learning experiences.',
      image: '/assets/girl-doing-work.png',
      features: [
        'Online Reading Comprehension',
        'Virtual Math Problem Solving',
        'Digital Science Exploration',
        'Online Writing Skills Development',
        'Virtual Critical Thinking Activities'
      ],
      duration: '45 minutes',
      price: '$30/session'
    },
    '10-12': {
      title: 'Middle School (Ages 10-12)',
      subtitle: 'Advanced Digital Learning',
      description: 'Challenging online programs that prepare students for academic success through advanced digital tools and virtual learning environments.',
      image: '/assets/kid-doing-homework.png',
      features: [
        'Online Advanced Mathematics',
        'Virtual Scientific Research Methods',
        'Digital Essay Writing and Literature',
        'Online Problem-Based Learning',
        'Virtual Study Skills Mastery'
      ],
      duration: '60 minutes',
      price: '$35/session'
    },
    '13+': {
      title: 'High School (Ages 13+)',
      subtitle: 'Virtual Future Preparation',
      description: 'Intensive online programs focusing on exam preparation, advanced academics, and future career readiness through digital platforms.',
      image: '/assets/Virtualschoolinindia.jpg',
      features: [
        'Online Exam Preparation (SAT, AP, etc.)',
        'Virtual Advanced STEM Subjects',
        'Digital Research and Analysis',
        'Online College Readiness',
        'Virtual Career Guidance'
      ],
      duration: '75 minutes',
      price: '$40/session'
    }
  };

  // Subject programs
  const subjectPrograms = [
    {
      title: 'Digital Mathematics',
      description: 'From basic arithmetic to advanced calculus, our online math programs build strong problem-solving skills through interactive digital tools.',
      image: '/assets/Boy-kid-doing-work.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Online Number Theory', 'Virtual Algebra', 'Digital Geometry', 'Interactive Statistics', 'Online Calculus']
    },
    {
      title: 'Virtual Science',
      description: 'Explore the wonders of science through virtual experiments, online simulations, and interactive digital demonstrations.',
      image: '/assets/girl-doing-work.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Virtual Physics', 'Online Chemistry', 'Digital Biology', 'Virtual Earth Science', 'Online Environmental Science']
    },
    {
      title: 'Online Language Arts',
      description: 'Develop strong communication skills through digital reading platforms, online writing tools, and virtual presentations.',
      image: '/assets/kid-doing-homework.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Digital Reading Comprehension', 'Online Creative Writing', 'Virtual Grammar', 'Digital Literature', 'Online Public Speaking']
    },
    {
      title: 'Computer Programming',
      description: 'Learn coding, computational thinking, and digital literacy skills through hands-on online programming environments.',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Online Learning
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Programs
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Digital learning through virtual classrooms, interactive online tools, and personalized virtual tutoring. 
                  Connect from anywhere with expert teachers through cutting-edge online platforms.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50,000+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Taught</div>
                </div>
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">4.9/5</div>
                  <div className="text-sm text-gray-600 font-medium">Parent Rating</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg">
                  Start Learning Online
                </button>
                <button className="bg-white/80 backdrop-blur-sm text-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-blue-200 shadow-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50">
                <img 
                  src="/assets/Virtualschoolinindia.jpg"
                  alt="Online Learning Platform"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
              </div>
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
                className={`px-8 py-4 rounded-2xl font-semibold ${
                  selectedAge === age
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 shadow-md border border-blue-100'
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Digital Subject
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Learning
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized online programs in core subjects designed to build expertise through interactive digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjectPrograms.map((subject, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50 group">
                <div className="relative h-56">
                  <img 
                    src={subject.image}
                    alt={subject.title}
                    className="w-full h-full object-cover"
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
                  
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg">
                    Start {subject.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Online Learning?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the benefits of personalized, high-quality digital education that adapts to your child's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-white to-gray-50">
                    <img 
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
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