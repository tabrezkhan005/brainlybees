'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-blue-700 font-medium text-sm">Trusted by 25,000+ families</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Unlock Your Child's
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Learning Potential
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Personalized 1-on-1 online and offline classes that make learning engaging, effective, and enjoyable for children aged 3-15.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-100">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">25,000+</div>
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
                  Start Free Trial
                </button>
                <button className="bg-white/80 backdrop-blur-sm text-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-blue-200 shadow-lg">
                  Book Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50">
                <img 
                  src="/assets/teacher-with-all-kids.png"
                  alt="BrainlyBees Learning Experience"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Programs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Choose Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                Learning Style
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible learning options designed to meet every child's unique needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Online Programs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center min-h-64">
                  <img 
                    src="/assets/Boy-kid-doing-work-in-laptop.png"
                    alt="Online Learning"
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <h3 className="text-blue-800 text-xl font-bold bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                    Online Programs
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Interactive virtual classrooms with digital tools, online activities, and personalized virtual tutoring from anywhere.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {['Virtual Classrooms', 'Interactive Digital Tools', 'Flexible Scheduling', 'Recording Available'].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg">
                  Explore Online Programs
                </button>
              </div>
            </div>

            {/* Offline Programs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50">
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 flex items-center justify-center min-h-64">
                  <img 
                    src="/assets/teacher-helping-girl-kid-doubt.png"
                    alt="Offline Learning"
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <h3 className="text-amber-800 text-xl font-bold bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg">
                    Offline Programs
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Face-to-face learning with hands-on activities, direct teacher interaction, and collaborative group projects.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {['In-Person Teaching', 'Hands-On Activities', 'Group Projects', 'Real-World Skills'].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg">
                  Explore Offline Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-emerald-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Programs for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                Every Age
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate curricula designed to meet developmental milestones and learning objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                age: '4-6',
                title: 'Early Learners',
                description: 'Foundation skills through play-based learning',
                image: '/assets/teacher-with-kids-doing-ring-activity.png'
              },
              {
                age: '7-9', 
                title: 'Primary Students',
                description: 'Core academic skills development',
                image: '/assets/teacher-helping-girl-kid-doubt.png'
              },
              {
                age: '10-12',
                title: 'Middle School',
                description: 'Advanced concepts and critical thinking',
                image: '/assets/teacher-solving-boy-kid-doubt.png'
              },
              {
                age: '13+',
                title: 'High School',
                description: 'College prep and career readiness',
                image: '/assets/teacher-asking-question-students-saying-answer.png'
              }
            ].map((program, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/50">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                    Ages {program.age}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BrainlyBees */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                BrainlyBees?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of personalized, high-quality education that delivers real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Teachers',
                description: 'Qualified educators with proven track records in child development and learning.',
                image: '/assets/lady-teacher-telling-story.png'
              },
              {
                title: 'Personalized Learning',
                description: 'Customized curricula that adapt to your child\'s unique learning style and pace.',
                image: '/assets/kid-with-graduation-outfit.png'
              },
              {
                title: 'Proven Results',
                description: 'Track record of improving academic performance and building confidence.',
                image: '/assets/kid-enjoying.png'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <div className="relative mb-8">
                  <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-rose-50 to-pink-100">
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

      {/* Learning Roadmap */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Learning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Roadmap
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured path to academic excellence, designed to build skills progressively and boost confidence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-400 via-purple-400 to-violet-400 rounded-full hidden lg:block"></div>
            
            <div className="space-y-20">
              {[
                {
                  step: '01',
                  title: 'Assessment & Goal Setting',
                  description: 'Comprehensive evaluation of your child\'s current skills, learning style, and academic objectives to create a personalized foundation.',
                  features: ['Skill Assessment', 'Learning Style Analysis', 'Goal Planning', 'Parent Consultation'],
                  image: '/assets/teacher-helping-girl-kid-doubt.png',
                  side: 'left'
                },
                {
                  step: '02', 
                  title: 'Personalized Learning Plan',
                  description: 'Custom curriculum designed specifically for your child\'s needs, interests, and optimal learning pace.',
                  features: ['Custom Curriculum', 'Individual Pace', 'Subject Selection', 'Flexible Schedule'],
                  image: '/assets/lady-teacher-telling-story.png',
                  side: 'right'
                },
                {
                  step: '03',
                  title: 'Interactive Learning Sessions',
                  description: 'Engaging one-on-one classes with expert teachers using proven methodologies and interactive tools.',
                  features: ['Expert Teachers', '1-on-1 Sessions', 'Interactive Tools', 'Live Feedback'],
                  image: '/assets/Boy-kid-doing-work-in-laptop.png',
                  side: 'left'
                },
                {
                  step: '04',
                  title: 'Progress Tracking',
                  description: 'Regular assessments and detailed feedback to ensure continuous improvement and skill mastery.',
                  features: ['Regular Tests', 'Progress Reports', 'Parent Updates', 'Skill Tracking'],
                  image: '/assets/kid-with-graduation-outfit.png',
                  side: 'right'
                },
                {
                  step: '05',
                  title: 'Achievement & Growth',
                  description: 'Celebrate milestones and receive certifications as your child masters new skills and builds confidence.',
                  features: ['Milestone Tracking', 'Certificates', 'Skill Mastery', 'Confidence Building'],
                  image: '/assets/kid-enjoying.png',
                  side: 'left'
                }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className="w-full lg:w-5/12">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                      {/* Step Badge */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">{item.step}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node (Hidden on Mobile) */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full shadow-lg border-4 border-white"></div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-5/12">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl p-6 shadow-xl">
                        <div className="w-full h-64 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm">
                          <img 
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-60"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
