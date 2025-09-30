'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 font-nunito">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 overflow-hidden">
        {/* Friendly Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-orange-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 right-40 w-28 h-28 bg-red-300 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Fun Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-yellow-200 shadow-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-orange-700 font-bold text-sm">25,000+ Happy Kids Learning!</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins">
                  Let's Make Learning
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mt-2">
                    Super Fun!
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Amazing 1-on-1 classes where kids love to learn! We make math, science, and reading feel like playing games with friends.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-yellow-200">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 font-poppins">25K+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Happy Kids</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-green-200">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 font-poppins">98%</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Love Learning</div>
                </div>
                <div className="text-center bg-white rounded-3xl p-4 shadow-lg border-2 border-pink-200">
                  <div className="text-2xl md:text-3xl font-bold text-pink-600 font-poppins">4.9★</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Parent Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-poppins">
                  Start Free Trial
                </button>
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 font-poppins">
                  Meet Our Teachers
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-200 p-2">
                <img 
                  src="/assets/teacher-with-all-kids.png"
                  alt="Kids Learning with BrainlyBees"
                  className="w-full h-80 md:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-green-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-700 font-bold text-sm">Choose Your Adventure!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              How Do You Like to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 mt-2">
                Learn Best?
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Pick the way that makes you most excited to learn new things!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Online Programs */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/assets/Boy-kid-doing-work-in-laptop.png"
                      alt="Online Learning Fun"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-blue-200">
                    <h3 className="text-blue-700 text-lg font-bold font-poppins">Online Classes</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Learn from anywhere! Use cool computers and tablets to play learning games with awesome teachers.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg font-poppins">What's Super Cool:</h4>
                  <div className="space-y-3">
                    {['Fun computer games while learning', 'Cool digital drawing and writing tools', 'Learn anytime from home', 'Watch classes again if you want'].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins">
                  Try Online Classes
                </button>
              </div>
            </div>

            {/* Offline Programs */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 flex items-center justify-center">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/assets/teacher-helping-girl-kid-doubt.png"
                      alt="In-Person Learning Fun"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-orange-200">
                    <h3 className="text-orange-700 text-lg font-bold font-poppins">In-Person Classes</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Meet your teacher in person! Do fun experiments, crafts, and activities with your hands.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg font-poppins">What's Super Cool:</h4>
                  <div className="space-y-3">
                    {['Real science experiments you can touch', 'Fun arts and crafts projects', 'Play learning games with friends', 'Build and create real things'].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins">
                  Try In-Person Classes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-purple-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
              <span className="text-purple-700 font-bold text-sm">Perfect for Every Age!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              Fun Learning for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mt-2">
                Every Age Group
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We have the perfect learning adventure for kids of all ages!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                age: '4-6',
                title: 'Little Explorers',
                description: 'Learning through play, songs, and fun activities',
                image: '/assets/teacher-with-kids-doing-ring-activity.png',
                bgColor: 'from-pink-200 to-red-200',
                borderColor: 'border-pink-300',
                badgeColor: 'from-pink-400 to-red-400'
              },
              {
                age: '7-9', 
                title: 'Young Learners',
                description: 'Reading, writing, and math made super fun',
                image: '/assets/teacher-helping-girl-kid-doubt.png',
                bgColor: 'from-blue-200 to-purple-200',
                borderColor: 'border-blue-300',
                badgeColor: 'from-blue-400 to-purple-400'
              },
              {
                age: '10-12',
                title: 'Smart Kids',
                description: 'Cool science and advanced problem solving',
                image: '/assets/teacher-solving-boy-kid-doubt.png',
                bgColor: 'from-green-200 to-teal-200',
                borderColor: 'border-green-300',
                badgeColor: 'from-green-400 to-teal-400'
              },
              {
                age: '13+',
                title: 'Teen Scholars',
                description: 'Getting ready for high school and beyond',
                image: '/assets/teacher-asking-question-students-saying-answer.png',
                bgColor: 'from-orange-200 to-yellow-200',
                borderColor: 'border-orange-300',
                badgeColor: 'from-orange-400 to-yellow-400'
              }
            ].map((program, index) => (
              <div key={index} className={`bg-white rounded-3xl shadow-xl border-4 ${program.borderColor} overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                <div className={`bg-gradient-to-br ${program.bgColor} p-4`}>
                  <div className="w-full h-40 rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <div className={`inline-block bg-gradient-to-r ${program.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg`}>
                    Ages {program.age}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <button className={`w-full bg-gradient-to-r ${program.badgeColor} text-white py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins`}>
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BrainlyBees */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-cyan-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
              <span className="text-cyan-700 font-bold text-sm">Why Kids Love Us!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              What Makes Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mt-2">
                Super Special?
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Here's why thousands of kids and parents choose BrainlyBees for amazing learning adventures!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Amazing Teachers',
                description: 'Our teachers are like superheroes! They make every lesson fun and help you become a learning champion.',
                image: '/assets/lady-teacher-telling-story.png',
                bgColor: 'from-pink-200 to-purple-200',
                borderColor: 'border-pink-300',
                badgeColor: 'from-pink-400 to-purple-400'
              },
              {
                title: 'Just for You',
                description: 'Every kid is special! We create lessons that match exactly how you like to learn and what makes you excited.',
                image: '/assets/kid-with-graduation-outfit.png',
                bgColor: 'from-green-200 to-teal-200',
                borderColor: 'border-green-300',
                badgeColor: 'from-green-400 to-teal-400'
              },
              {
                title: 'You\'ll Get Better',
                description: 'Watch yourself become smarter every day! We help you learn new things and feel proud of what you can do.',
                image: '/assets/kid-enjoying.png',
                bgColor: 'from-yellow-200 to-orange-200',
                borderColor: 'border-yellow-300',
                badgeColor: 'from-yellow-400 to-orange-400'
              }
            ].map((benefit, index) => (
              <div key={index} className={`text-center bg-white rounded-3xl p-8 shadow-xl border-4 ${benefit.borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                <div className={`bg-gradient-to-br ${benefit.bgColor} rounded-3xl p-4 mb-6`}>
                  <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img 
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {benefit.description}
                </p>
                
                <button className={`bg-gradient-to-r ${benefit.badgeColor} text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Roadmap Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 via-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-red-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
              <span className="text-red-700 font-bold text-sm">Your Learning Adventure!</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              How Learning Works at
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 mt-2">
                BrainlyBees!
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Follow these fun steps and watch yourself become a super smart learner!
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-300 via-pink-300 to-purple-300 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Meet Your Teacher',
                  description: 'Say hello to your awesome teacher! They\'ll get to know you and what makes you special.',
                  icon: '👋',
                  color: 'from-red-400 to-pink-400',
                  bgColor: 'from-red-50 to-pink-50',
                  position: 'left'
                },
                {
                  step: '2',
                  title: 'Find Your Style',
                  description: 'Discover how you learn best! Some kids love pictures, others love games or stories.',
                  icon: '🎨',
                  color: 'from-pink-400 to-purple-400',
                  bgColor: 'from-pink-50 to-purple-50',
                  position: 'right'
                },
                {
                  step: '3',
                  title: 'Start Learning',
                  description: 'Jump into fun lessons made just for you! Every lesson is like a new adventure.',
                  icon: '🚀',
                  color: 'from-purple-400 to-indigo-400',
                  bgColor: 'from-purple-50 to-indigo-50',
                  position: 'left'
                },
                {
                  step: '4',
                  title: 'Celebrate Success',
                  description: 'High-five time! Watch yourself get smarter and celebrate every win with your family.',
                  icon: '🎉',
                  color: 'from-indigo-400 to-blue-400',
                  bgColor: 'from-indigo-50 to-blue-50',
                  position: 'right'
                }
              ].map((step, index) => (
                <div key={index} className={`relative flex items-center ${step.position === 'left' ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-pink-300 rounded-full z-10 hidden lg:block"></div>
                  
                  <div className={`bg-white rounded-3xl p-8 shadow-xl border-4 border-pink-200 max-w-md lg:max-w-lg ${step.position === 'left' ? 'lg:mr-8' : 'lg:ml-8'} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                    <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-6 mb-6`}>
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg`}>
                          {step.step}
                        </div>
                        <div className="text-4xl">{step.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-teal-100 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-green-200 shadow-lg mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-700 font-bold text-sm">Questions & Answers</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
              What Parents
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 mt-2">
                Want to Know!
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Here are answers to the most common questions from families just like yours!
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What ages do you teach?',
                answer: 'We teach kids from 3 to 15 years old! We have special programs for little ones, school kids, and teenagers.',
                bgColor: 'from-green-50 to-teal-50',
                borderColor: 'border-green-200'
              },
              {
                question: 'How do online classes work?',
                answer: 'It\'s super easy! Your child will have fun video calls with their teacher, play learning games, and do activities together.',
                bgColor: 'from-teal-50 to-blue-50',
                borderColor: 'border-teal-200'
              },
              {
                question: 'Will my child really learn?',
                answer: 'Absolutely! Our teachers are amazing and make learning so much fun that kids actually look forward to their lessons.',
                bgColor: 'from-blue-50 to-indigo-50',
                borderColor: 'border-blue-200'
              },
              {
                question: 'What if my child is shy?',
                answer: 'No worries! Our teachers are great with shy kids. They take time to make your child feel comfortable and confident.',
                bgColor: 'from-indigo-50 to-purple-50',
                borderColor: 'border-indigo-200'
              },
              {
                question: 'How much does it cost?',
                answer: 'We have different plans for different families. Contact us and we\'ll help you find the perfect fit for your budget!',
                bgColor: 'from-purple-50 to-pink-50',
                borderColor: 'border-purple-200'
              }
            ].map((faq, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 shadow-xl border-4 ${faq.borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                <div className={`bg-gradient-to-r ${faq.bgColor} rounded-2xl p-6`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 via-red-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-orange-200">
            <div className="mb-8">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-poppins">
                Ready to Start Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mt-2">
                  Learning Adventure?
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
                Join thousands of happy kids who love learning with BrainlyBees! 
                Your amazing learning journey starts with just one click.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-12 py-4 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-poppins">
                Start Free Trial! 🚀
              </button>
              <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-12 py-4 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-poppins">
                Talk to Teacher! 👋
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-600">
              <p className="font-bold">🎁 Special Offer: First lesson completely FREE!</p>
              <p>No credit card needed • Safe & secure • Parents love us!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our programs and teaching methodology.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What age groups do you teach?',
                answer: 'We provide personalized learning programs for children aged 3-15, with age-appropriate curricula designed for Early Learners (4-6), Primary Students (7-9), Middle School (10-12), and High School (13+) levels.'
              },
              {
                question: 'How do online classes work?',
                answer: 'Our online classes are conducted through interactive virtual classrooms with qualified teachers. Students receive personalized attention, access to digital learning tools, and can schedule flexible timings that suit their routine.'
              },
              {
                question: 'What subjects do you cover?',
                answer: 'We offer comprehensive programs covering Math, Science, English, Coding, and more. Our curriculum is designed to strengthen foundational skills while building advanced concepts progressively.'
              },
              {
                question: 'How do you track my child\'s progress?',
                answer: 'We provide regular assessments, detailed progress reports, and parent-teacher consultations. Our systematic approach ensures continuous monitoring and improvement of your child\'s academic performance.'
              },
              {
                question: 'What is the difference between online and offline programs?',
                answer: 'Online programs offer virtual learning with digital tools and flexible scheduling, while offline programs provide face-to-face interaction with hands-on activities and group projects. Both maintain the same high-quality teaching standards.'
              },
              {
                question: 'Can I try a class before enrolling?',
                answer: 'Yes! We offer a free trial class where your child can experience our teaching methodology. This helps you understand our approach and ensures it\'s the right fit for your child\'s learning needs.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-cyan-100">
                    <h3 className="text-lg font-semibold text-gray-800 pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-open:rotate-45 transition-transform">
                      +
                    </div>
                  </summary>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
              Contact Our Support Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Start Your Child's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Learning Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of families who have already discovered the BrainlyBees difference. 
            Book a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-12 py-5 rounded-2xl font-semibold text-lg shadow-xl">
              Book Free Trial
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-indigo-700 px-12 py-5 rounded-2xl font-semibold text-lg border border-indigo-200 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
