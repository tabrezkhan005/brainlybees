'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';
import Link from 'next/link';

export default function OnlineProgramsPage() {
  const [selectedAge, setSelectedAge] = useState('4-6');

  // Age-based programs
  const agePrograms = {
    '4-6': {
      title: 'Early Learners (Ages 4-6)',
      subtitle: 'Digital Learning Foundations',
      description: 'Interactive online programs designed to develop fundamental skills through engaging digital activities and virtual play-based learning.',
      image: '/assets/cute-kid-doing-work.png',
      features: [
        'Interactive Online Phonics',
        'Digital Number Games and Math',
        'Virtual Arts and Creative Tools',
        'Online Social Skills Activities',
        'Digital Motor Skills Games'
      ]
    },
    '7-9': {
      title: 'Primary Learners (Ages 7-9)',
      subtitle: 'Virtual Academic Growth',
      description: 'Comprehensive online curriculum focusing on core subjects through interactive digital platforms and virtual learning experiences.',
      image: '/assets/Girl-kid-doing-workin-laptop.png',
      features: [
        'Online Reading Comprehension',
        'Virtual Math Problem Solving',
        'Digital Science Exploration',
        'Online Writing Skills Development',
        'Virtual Critical Thinking Activities'
      ]
    },
    '10-12': {
      title: 'Middle School (Ages 10-12)',
      subtitle: 'Advanced Digital Learning',
      description: 'Challenging online programs that prepare students for academic success through advanced digital tools and virtual learning environments.',
      image: '/assets/girl-kid-explaining-in-laptop.png',
      features: [
        'Online Advanced Mathematics',
        'Virtual Scientific Research Methods',
        'Digital Essay Writing and Literature',
        'Online Problem-Based Learning',
        'Virtual Study Skills Mastery'
      ]
    },
    '13+': {
      title: 'High School (Ages 13+)',
      subtitle: 'Virtual Future Preparation',
      description: 'Intensive online programs focusing on exam preparation, advanced academics, and future career readiness through digital platforms.',
      image: '/assets/boy-kid-explaining-in-laptop.png',
      features: [
        'Online Exam Preparation (JEE, NEET, CBSE, etc.)',
        'Virtual Advanced STEM Subjects',
        'Digital Research and Analysis',
        'Online College Readiness',
        'Virtual Career Guidance'
      ]
    }
  };

  // Subject programs
  const subjectPrograms = [
    {
      title: 'Digital Mathematics',
      description: 'From basic arithmetic to advanced calculus, our online math programs build strong problem-solving skills through interactive digital tools.',
      image: '/assets/Boy-kid-doing-work-in-laptop.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Online Number Theory', 'Virtual Algebra', 'Digital Geometry', 'Interactive Statistics', 'Online Calculus']
    },
    {
      title: 'Virtual Science',
      description: 'Explore the wonders of science through virtual experiments, online simulations, and interactive digital demonstrations.',
      image: '/assets/girl-doing-work-in-laptop.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Virtual Physics', 'Online Chemistry', 'Digital Biology', 'Virtual Earth Science', 'Online Environmental Science']
    },
    {
      title: 'Online Language Arts',
      description: 'Develop strong communication skills through digital reading platforms, online writing tools, and virtual presentations.',
      image: '/assets/girl-saying-hi-in-laptop.png',
      levels: ['Elementary', 'Intermediate', 'Advanced'],
      topics: ['Digital Reading Comprehension', 'Online Creative Writing', 'Virtual Grammar', 'Digital Literature', 'Online Public Speaking']
    },
    {
      title: 'Computer Programming',
      description: 'Learn coding, computational thinking, and digital literacy skills through hands-on online programming environments.',
      image: '/assets/boy-kid-explaining-in-laptop.png',
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
  // const successStories = [
  //   {
  //     name: 'Emma Thompson',
  //     age: 8,
  //     program: 'Primary Mathematics',
  //     achievement: 'Improved test scores by 40%',
  //     quote: 'Emma went from struggling with basic math to solving complex problems with confidence.',
  //     image: '/assets/girl-saying-hi.png',
  //     location: 'California, USA'
  //   },
  //   {
  //     name: 'Alex Chen',
  //     age: 11,
  //     program: 'Science Explorer',
  //     achievement: 'Won school science fair',
  //     quote: 'Alex discovered a passion for science and now dreams of becoming an astronaut.',
  //     image: '/assets/boy-saying-hi.png',
  //     location: 'Singapore'
  //   },
  //   {
  //     name: 'Sofia Rodriguez',
  //     age: 6,
  //     program: 'Early Learning',
  //     achievement: 'Reading above grade level',
  //     quote: 'Sofia\'s confidence and love for learning have grown tremendously.',
  //     image: '/assets/cute-kid-doing-work.png',
  //     location: 'Madrid, Spain'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
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
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#f9a8d4" />
              </linearGradient>
              <linearGradient id="heroWave2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="heroWave3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          {/* Floating organic shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-purple-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-pink-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 bg-indigo-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        </div>

        {/* Flowing transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,20 600,100 900,40 C1050,10 1200,80 1200,80 L1200,120 L0,120 Z"
                  fill="url(#heroToPrograms)" />
            <defs>
              <linearGradient id="heroToPrograms" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="50%" stopColor="#a7f3d0" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Fun Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-blue-200 shadow-lg">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-blue-700 font-bold text-sm">50,000+ Kids Learning Online!</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins">
                  Amazing Online Learning
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-2">
                    Adventure!
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Learn from anywhere with super fun virtual classrooms! Interactive games, amazing teachers, and cool digital tools make learning feel like playing with friends online.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-blue-200">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 font-poppins">50K+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Online Students</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-green-200">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 font-poppins">98%</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-purple-200">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 font-poppins">4.9★</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Parent Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation">
                  <button className="bg-white border-3 border-blue-400 text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-blue-50">
                    Start Learning Online
                  </button>
                </Link>
                <a href="https://wa.me/919837998535" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-50 font-poppins">
                    Schedule Demo
                  </button>
                </a>
              </div>
            </div>

            <div className="relative z-20">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-200 p-2">
                <Image
                  src="/assets/Virtualschoolinindia.jpg"
                  alt="Online Learning Fun"
                  width={800}
                  height={400}
                  className="w-full h-80 md:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs by Age */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-teal-100 to-cyan-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing continuation from hero */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C300,80 600,0 900,60 C1050,90 1200,20 1200,20 L1200,0 L0,0 Z"
                  fill="url(#programsFromHero)" />
            <defs>
              <linearGradient id="programsFromHero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#a7f3d0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Flowing transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,80 C200,20 400,100 600,40 C800,0 1000,80 1200,20 L1200,120 L0,120 Z"
                  fill="url(#programsToSubjects)" />
            <defs>
              <linearGradient id="programsToSubjects" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e9d5ff" />
                <stop offset="50%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#fed7aa" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Organic floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-16 w-20 h-20 bg-green-300 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-teal-300 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-300 rounded-full blur-xl opacity-50 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-green-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-700 font-bold text-sm">Perfect for Every Age!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Online Programs for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 mt-2">
                Every Age Group
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate online curricula that grow with your child, ensuring optimal learning at every stage!
            </p>
          </div>

          {/* Age Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.keys(agePrograms).map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-8 py-4 rounded-full font-bold font-poppins transition-all duration-300 shadow-lg hover:shadow-xl ${
                  selectedAge === age
                    ? 'bg-white border-3 border-green-400 text-green-600 scale-105'
                    : 'bg-white text-gray-700 border-2 border-green-200 hover:border-green-300 hover:scale-105'
                }`}
              >
                Ages {age}
              </button>
            ))}
          </div>

          {/* Selected Program Display */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-green-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-10 lg:p-16">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3 font-poppins">
                      {agePrograms[selectedAge as keyof typeof agePrograms].title}
                    </h3>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-600 font-bold mb-6 font-poppins">
                      {agePrograms[selectedAge as keyof typeof agePrograms].subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg font-nunito">
                      {agePrograms[selectedAge as keyof typeof agePrograms].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-4 text-lg font-poppins">Super Cool Online Features:</h4>
                    <ul className="space-y-3">
                      {agePrograms[selectedAge as keyof typeof agePrograms].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-4">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium font-nunito">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="https://wa.me/919837998535" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white border-3 border-green-400 text-green-600 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-green-50">
                      Start Online Learning
                    </button>
                  </a>
                </div>
              </div>

              <div className="relative p-4">
                <div className="bg-gradient-to-br from-green-50 to-cyan-100 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={agePrograms[selectedAge as keyof typeof agePrograms].image}
                    alt="Online Learning Program"
                    width={400}
                    height={384}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Programs */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from age programs */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C200,80 400,0 600,60 C800,100 1000,20 1200,80 L1200,0 L0,0 Z"
                  fill="url(#subjectsFromPrograms)" />
            <defs>
              <linearGradient id="subjectsFromPrograms" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="50%" stopColor="#e9d5ff" />
                <stop offset="100%" stopColor="#fbcfe8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Organic shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <circle cx="200" cy="150" r="120" fill="url(#subjectCircle1)" opacity="0.3"/>
            <circle cx="1000" cy="250" r="150" fill="url(#subjectCircle2)" opacity="0.3"/>
            <circle cx="600" cy="600" r="130" fill="url(#subjectCircle3)" opacity="0.3"/>
            <defs>
              <radialGradient id="subjectCircle1">
                <stop offset="0%" stopColor="#e9d5ff" />
                <stop offset="100%" stopColor="#fbcfe8" />
              </radialGradient>
              <radialGradient id="subjectCircle2">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#fed7aa" />
              </radialGradient>
              <radialGradient id="subjectCircle3">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fecaca" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Flowing transition to benefits */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C300,100 600,20 900,80 C1050,100 1200,40 1200,40 L1200,120 L0,120 Z"
                  fill="url(#subjectsToBenefits)" />
            <defs>
              <linearGradient id="subjectsToBenefits" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5f3fc" />
                <stop offset="50%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#c7d2fe" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-purple-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              <span className="text-purple-700 font-bold text-sm">Fun Online Subjects!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Digital Subject
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mt-2">
                Learning Adventure
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Specialized online programs that make every subject super exciting through interactive digital games and activities!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjectPrograms.map((subject, index) => {
              const borderColors = ['border-purple-300', 'border-pink-300', 'border-orange-300', 'border-red-300'];
              const bgColors = ['from-purple-50 to-pink-50', 'from-pink-50 to-orange-50', 'from-orange-50 to-red-50', 'from-red-50 to-purple-50'];
              const textColors = ['text-purple-700', 'text-pink-700', 'text-orange-700', 'text-red-700'];

              return (
                <div key={index} className={`bg-white rounded-3xl shadow-xl overflow-hidden border-4 ${borderColors[index]} hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full`}>
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${bgColors[index]} p-6 flex items-center justify-center min-h-64`}>
                      <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={subject.image}
                          alt={subject.title}
                          width={400}
                          height={224}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className={`bg-white px-4 py-2 rounded-full shadow-lg border-2 ${borderColors[index]}`}>
                        <h3 className={`${textColors[index]} text-lg font-bold font-poppins`}>
                          {subject.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg font-nunito">
                      {subject.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 font-poppins">Available Levels:</h4>
                      <div className="flex flex-wrap gap-2">
                        {subject.levels.map((level, levelIndex) => (
                          <span key={levelIndex} className={`bg-white border-2 ${borderColors[index]} ${textColors[index]} px-4 py-2 rounded-full text-sm font-bold shadow-md`}>
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8 flex-grow">
                      <h4 className="font-bold text-gray-800 mb-3 font-poppins">Cool Digital Topics:</h4>
                      <div className="space-y-2">
                        {subject.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-3">
                            <div className={`w-6 h-6 bg-white border-2 ${borderColors[index]} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <span className={`${textColors[index]} text-sm font-bold`}>✓</span>
                            </div>
                            <span className="text-gray-700 font-medium font-nunito">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a href="https://wa.me/919837998535" target="_blank" rel="noopener noreferrer">
                        <button className={`w-full bg-white border-3 ${borderColors[index]} ${textColors[index]} py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins hover:bg-gray-50`}>
                          Start {subject.title}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from subjects */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,80 C300,20 600,100 900,40 C1050,60 1200,80 1200,80 L1200,0 L0,0 Z"
                  fill="url(#benefitsFromSubjects)" />
            <defs>
              <linearGradient id="benefitsFromSubjects" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#a5f3fc" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Leafy organic shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M150,200 Q250,100 350,200 Q450,300 350,400 Q250,300 150,200 Z"
                  fill="url(#benefitLeaf1)" opacity="0.3"/>
            <path d="M850,150 Q1000,100 1150,200 Q1100,300 950,250 Q900,200 850,150 Z"
                  fill="url(#benefitLeaf2)" opacity="0.3"/>
            <path d="M300,600 Q450,550 600,600 Q550,700 400,650 Q350,600 300,600 Z"
                  fill="url(#benefitLeaf3)" opacity="0.3"/>
            <defs>
              <radialGradient id="benefitLeaf1">
                <stop offset="0%" stopColor="#a5f3fc" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </radialGradient>
              <radialGradient id="benefitLeaf2">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#c7d2fe" />
              </radialGradient>
              <radialGradient id="benefitLeaf3">
                <stop offset="0%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#a5f3fc" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Flowing transition to CTA */}
        <div className="absolute inset-x-0 bottom-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C200,100 400,20 600,80 C800,120 1000,40 1200,100 L1200,120 L0,120 Z"
                  fill="url(#benefitsToCta)" />
            <defs>
              <linearGradient id="benefitsToCta" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#fecaca" />
                <stop offset="100%" stopColor="#f9a8d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto z-20 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-cyan-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
              <span className="text-cyan-700 font-bold text-sm">Why Kids Love Online Learning!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Why Choose Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mt-2">
                Online Learning?
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of personalized, high-quality digital education that makes learning super fun and effective!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningBenefits.map((benefit, index) => {
              const borderColors = ['border-cyan-300', 'border-blue-300', 'border-indigo-300', 'border-purple-300', 'border-pink-300', 'border-red-300'];
              const bgColors = ['from-cyan-50 to-blue-50', 'from-blue-50 to-indigo-50', 'from-indigo-50 to-purple-50', 'from-purple-50 to-pink-50', 'from-pink-50 to-red-50', 'from-red-50 to-cyan-50'];

              return (
                <div key={index} className={`text-center bg-white rounded-3xl p-8 shadow-xl border-4 ${borderColors[index]} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                  <div className="relative mb-8">
                    <div className={`w-48 h-48 mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br ${bgColors[index]}`}>
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-nunito">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 overflow-hidden -mt-32 pt-40">
        {/* Flowing transition from benefits */}
        <div className="absolute inset-x-0 top-0 h-32">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,100 C200,40 400,120 600,80 C800,40 1000,100 1200,60 L1200,0 L0,0 Z"
                  fill="url(#ctaFromBenefits)" />
            <defs>
              <linearGradient id="ctaFromBenefits" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fecaca" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Celebration burst shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M200,150 L220,200 L270,200 L230,240 L250,290 L200,260 L150,290 L170,240 L130,200 L180,200 Z"
                  fill="url(#ctaStar1)" opacity="0.4"/>
            <path d="M900,100 L920,150 L970,150 L930,190 L950,240 L900,210 L850,240 L870,190 L830,150 L880,150 Z"
                  fill="url(#ctaStar2)" opacity="0.4"/>
            <path d="M100,500 L120,550 L170,550 L130,590 L150,640 L100,610 L50,640 L70,590 L30,550 L80,550 Z"
                  fill="url(#ctaStar3)" opacity="0.4"/>
            <path d="M1000,450 L1020,500 L1070,500 L1030,540 L1050,590 L1000,560 L950,590 L970,540 L930,500 L980,500 Z"
                  fill="url(#ctaStar4)" opacity="0.4"/>
            <defs>
              <radialGradient id="ctaStar1">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fbbf24" />
              </radialGradient>
              <radialGradient id="ctaStar2">
                <stop offset="0%" stopColor="#fecaca" />
                <stop offset="100%" stopColor="#f87171" />
              </radialGradient>
              <radialGradient id="ctaStar3">
                <stop offset="0%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#ec4899" />
              </radialGradient>
              <radialGradient id="ctaStar4">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </radialGradient>
            </defs>
          </svg>

          {/* Floating celebration elements */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-300 rounded-full blur-lg opacity-60 animate-bounce"></div>
          <div className="absolute bottom-32 right-32 w-20 h-20 bg-red-300 rounded-full blur-lg opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-pink-300 rounded-full blur-lg opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-20 relative">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-orange-200">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-50 to-pink-50 rounded-full border-2 border-orange-200 shadow-lg mb-8">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-orange-700 font-bold text-sm font-nunito">Start Your Online Journey!</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
                Ready to Start Your Child&apos;s
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mt-2">
                  Online Learning Journey?
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 font-nunito">
                Join thousands of families who have chosen KidCube Global for amazing online education.
                Start your digital learning adventure today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/consultation">
                <button className="bg-white border-4 border-orange-400 text-orange-600 px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-poppins hover:bg-orange-50">
                  Book Consultation
                </button>
              </Link>
              <a href="https://wa.me/919837998535" target="_blank" rel="noopener noreferrer">
                <button className="bg-white border-4 border-green-400 text-green-600 px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-poppins hover:bg-green-50">
                  WhatsApp Us
                </button>
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-600 font-nunito">
              <p className="font-bold">Special Offer: First online session completely FREE!</p>
              <p>No credit card required • Personalized learning plan • Trusted by Indian parents</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
