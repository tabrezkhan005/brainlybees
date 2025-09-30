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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Online Learning Programs
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Personalized one-on-one tutoring that adapts to your child's unique learning style and pace. 
                  Expert teachers, interactive lessons, and proven results.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50,000+</div>
                  <div className="text-sm text-gray-600">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Parent Rating</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all">
                  Book Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/assets/teacher-with-all-kids.png"
                  alt="Online Learning"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs by Age */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programs Designed for Every Age
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate curricula that grow with your child, ensuring optimal learning at every stage of development.
            </p>
          </div>

          {/* Age Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(agePrograms).map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedAge === age
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Ages {age}
              </button>
            ))}
          </div>

          {/* Selected Program Display */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {agePrograms[selectedAge as keyof typeof agePrograms].title}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">
                      {agePrograms[selectedAge as keyof typeof agePrograms].subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {agePrograms[selectedAge as keyof typeof agePrograms].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                    <ul className="space-y-2">
                      {agePrograms[selectedAge as keyof typeof agePrograms].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-8 pt-6 border-t">
                    <div>
                      <span className="text-sm text-gray-500">Duration:</span>
                      <div className="font-semibold text-gray-900">
                        {agePrograms[selectedAge as keyof typeof agePrograms].duration}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Starting at:</span>
                      <div className="font-semibold text-gray-900">
                        {agePrograms[selectedAge as keyof typeof agePrograms].price}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Start Learning Today
                  </button>
                </div>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={agePrograms[selectedAge as keyof typeof agePrograms].image}
                  alt="Program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subject-Focused Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs in core subjects designed to build expertise and confidence in specific areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjectPrograms.map((subject, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={subject.image}
                    alt={subject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    {subject.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {subject.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Levels:</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.levels.map((level, levelIndex) => (
                        <span key={levelIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                    <div className="space-y-1">
                      {subject.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Explore {subject.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BrainlyBees Online Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of personalized, high-quality online education that delivers real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningBenefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-200 transition-colors">
                    <img 
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real students, real results. See how our programs have transformed learning journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-200">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">Age {story.age} • {story.location}</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {story.achievement}
                  </span>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                  <div className="text-sm text-blue-600 font-semibold">
                    Program: {story.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Child's Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who have chosen BrainlyBees for personalized, effective online education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
              Schedule Consultation
            </button>
          </div>
          
          <div className="text-blue-100 text-sm">
            No credit card required • Free assessment • Personalized learning plan
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}