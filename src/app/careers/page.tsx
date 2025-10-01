'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('teaching')

  const jobOpenings = {
    teaching: [
      {
        title: "Online Math Teacher",
        location: "Remote / Work from Home",
        type: "Full-time",
        experience: "2+ years",
        description: "Passionate math educator to teach students aged 6-16 through interactive online sessions",
        requirements: ["Bachelor's in Mathematics/Education", "Online teaching experience", "Strong communication skills", "Tech-savvy with digital tools"],
        image: "/assets/teacher-solving-girl-kid-doubt.png"
      },
      {
        title: "Science Teacher",
        location: "Remote / Flexible",
        type: "Part-time / Full-time",
        experience: "1+ years",
        description: "Creative science educator to make learning fun and engaging for young minds",
        requirements: ["Science degree", "Patience with children", "Creative teaching methods", "Available for evening classes"],
        image: "/assets/teacher-teaching-kids-about-plants.png"
      },
      {
        title: "English Language Instructor",
        location: "Remote",
        type: "Full-time",
        experience: "2+ years",
        description: "Help children develop strong communication and language skills through interactive sessions",
        requirements: ["English Literature/Education degree", "TESOL/TEFL certification preferred", "Experience with young learners", "Excellent pronunciation"],
        image: "/assets/lady-teacher-telling-story.png"
      }
    ],
    technology: [
      {
        title: "Frontend Developer",
        location: "Remote / Hybrid",
        type: "Full-time",
        experience: "3+ years",
        description: "Build engaging educational interfaces and interactive learning experiences",
        requirements: ["React/Next.js expertise", "Educational platform experience", "UI/UX understanding", "Responsive design skills"],
        image: "/assets/kid-with-graduation-outfit.png"
      },
      {
        title: "Educational Technology Specialist",
        location: "Remote",
        type: "Full-time",
        experience: "2+ years",
        description: "Design and implement technology solutions to enhance online learning experiences",
        requirements: ["EdTech background", "Learning Management Systems", "Digital content creation", "Student engagement tools"],
        image: "/assets/kids-doing-painting.png"
      }
    ],
    support: [
      {
        title: "Student Success Coordinator",
        location: "Remote",
        type: "Full-time",
        experience: "1+ years",
        description: "Support student journey and ensure positive learning outcomes",
        requirements: ["Customer service experience", "Educational background preferred", "Communication skills", "Problem-solving abilities"],
        image: "/assets/kid-enjoying.png"
      },
      {
        title: "Parent Relations Specialist",
        location: "Remote",
        type: "Full-time",
        experience: "2+ years",
        description: "Build strong relationships with parents and address their concerns effectively",
        requirements: ["Relationship management", "Educational counseling", "Communication excellence", "Empathy and patience"],
        image: "/assets/teacher-with-all-kids.png"
      }
    ]
  }

  const benefits = [
    {
      title: "Flexible Working",
      description: "Work from anywhere with flexible schedules that fit your lifestyle",
      icon: "🏠",
      image: "/assets/girl-doing-work-in-laptop.png"
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement programs",
      icon: "📈",
      image: "/assets/kid-with-books.png"
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages with performance-based incentives",
      icon: "💰",
      image: "/assets/kid-keeping-book-on-head.png"
    },
    {
      title: "Impact Young Lives",
      description: "Make a meaningful difference in children's educational journey",
      icon: "❤️",
      image: "/assets/teacher-reading-for-kids.png"
    }
  ]

  const departments = {
    teaching: { name: "Teaching & Education", color: "from-blue-500 to-indigo-500" },
    technology: { name: "Technology & Development", color: "from-green-500 to-teal-500" },
    support: { name: "Student Support & Success", color: "from-purple-500 to-pink-500" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 font-nunito">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background SVG Waves */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fdba74" />
              </linearGradient>
            </defs>
            <path fill="url(#wave1)" d="M0,200 C320,150 420,250 800,200 C1120,150 1200,250 1440,200 L1440,800 L0,800 Z" opacity="0.6"/>
          </svg>
          
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <path fill="url(#wave2)" d="M0,300 C360,250 480,350 720,300 C960,250 1080,350 1440,300 L1440,800 L0,800 Z" opacity="0.4"/>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-full px-6 py-2 mb-6">
                <span className="text-orange-600 font-poppins font-semibold">Join Our Mission</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold font-poppins bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent mb-6">
                Shape the Future of Education
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join BrainlyBees and be part of a revolutionary educational journey. Help us create innovative learning experiences that inspire young minds and build tomorrow's leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white border-2 border-orange-400 text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
                  View Open Positions
                </button>
                <a href="https://wa.me/your-number" className="bg-gradient-to-r from-orange-400 to-amber-400 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105">
                  Contact HR Team
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/60 backdrop-blur-sm border-2 border-orange-200 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border-2 border-amber-200 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border-2 border-yellow-200 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">5000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/60 backdrop-blur-sm border-4 border-orange-200 rounded-3xl p-6 shadow-2xl">
                <img 
                  src="/assets/teacher-with-all-kids.png" 
                  alt="Our Amazing Team" 
                  className="w-full h-96 object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="relative py-20 -mt-16 pt-24 bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 overflow-hidden">
        {/* Top Wave Transition */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <defs>
              <linearGradient id="topWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="50%" stopColor="#fdba74" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            <path fill="url(#topWave1)" d="M0,80 C360,20 600,60 1440,40 L1440,0 L0,0 Z"/>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-14 h-14 bg-gradient-to-r from-green-200 to-teal-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-60 right-24 w-10 h-10 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-70 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-32 left-32 w-18 h-18 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-50 animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-full px-6 py-2 mb-6">
              <span className="text-green-600 font-poppins font-semibold">Why Choose BrainlyBees</span>
            </div>
            <h2 className="text-5xl font-bold font-poppins bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 bg-clip-text text-transparent mb-6">
              Amazing Benefits & Culture
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe in creating an environment where passionate educators and professionals can thrive while making a meaningful impact on children's lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-3xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-full border-4 border-green-200 flex items-center justify-center">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold font-poppins text-green-700 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="relative py-20 -mt-16 pt-24 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 overflow-hidden">
        {/* Top Wave Transition */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <defs>
              <linearGradient id="topWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="50%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <path fill="url(#topWave2)" d="M0,80 C480,20 720,60 1440,30 L1440,0 L0,0 Z"/>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-12 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-48 left-20 w-12 h-12 bg-gradient-to-r from-pink-200 to-red-200 rounded-full opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-32 w-20 h-20 bg-gradient-to-r from-red-200 to-purple-200 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-full px-6 py-2 mb-6">
              <span className="text-purple-600 font-poppins font-semibold">Current Opportunities</span>
            </div>
            <h2 className="text-5xl font-bold font-poppins bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 bg-clip-text text-transparent mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore exciting career opportunities across different departments and find your perfect role in our mission to transform education.
            </p>
          </div>

          {/* Department Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(departments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setSelectedDepartment(key)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedDepartment === key
                    ? `bg-gradient-to-r ${dept.color} text-white shadow-lg`
                    : 'bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings[selectedDepartment as keyof typeof jobOpenings]?.map((job, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-3xl p-6 hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="w-full h-48 mb-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-4 border-purple-200 flex items-center justify-center">
                  <img 
                    src={job.image} 
                    alt={job.title}
                    className="w-40 h-40 object-contain"
                  />
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">{job.type}</span>
                    <span className="text-gray-500 text-sm">{job.experience}</span>
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-purple-700">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-purple-700 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-white border-2 border-purple-400 text-purple-600 py-3 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="relative py-20 -mt-16 pt-24 bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 overflow-hidden">
        {/* Top Wave Transition */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <defs>
              <linearGradient id="topWave3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ddd6fe" />
                <stop offset="50%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path fill="url(#topWave3)" d="M0,80 C360,30 600,50 1440,20 L1440,0 L0,0 Z"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-full px-6 py-2 mb-6">
              <span className="text-indigo-600 font-poppins font-semibold">Simple Process</span>
            </div>
            <h2 className="text-5xl font-bold font-poppins bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our straightforward application process ensures we find the best talent while providing a smooth experience for candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Send us your resume and cover letter through our online portal",
                image: "/assets/girl-saying-hi-in-laptop.png"
              },
              {
                step: "02", 
                title: "Initial Screening",
                description: "Our HR team will review your application and contact qualified candidates",
                image: "/assets/boy-saying-hi-in-laptop.png"
              },
              {
                step: "03",
                title: "Interview Process",
                description: "Participate in video interviews with our education and technical teams",
                image: "/assets/teacher-asking-question-students-saying-answer.png"
              },
              {
                step: "04",
                title: "Welcome Aboard",
                description: "Join our team and start your journey in transforming education",
                image: "/assets/kid-with-graduation-outfit.png"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full border-4 border-indigo-200 flex items-center justify-center">
                  <img 
                    src={process.image} 
                    alt={process.title}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold font-poppins text-indigo-700 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 -mt-16 pt-24 bg-gradient-to-br from-orange-100 via-yellow-100 to-amber-100 overflow-hidden">
        {/* Top Wave Transition */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <defs>
              <linearGradient id="topWave4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c7d2fe" />
                <stop offset="50%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <path fill="url(#topWave4)" d="M0,80 C480,25 720,55 1440,35 L1440,0 L0,0 Z"/>
          </svg>
        </div>

        {/* Star burst shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-r from-orange-300 to-amber-300" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute top-40 right-16 w-6 h-6 bg-gradient-to-r from-yellow-300 to-orange-300" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
          <div className="absolute bottom-32 left-16 w-10 h-10 bg-gradient-to-r from-amber-300 to-orange-300" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm border-4 border-orange-200 rounded-3xl p-12">
              <div className="inline-block bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300 rounded-full px-6 py-2 mb-6">
                <span className="text-orange-600 font-poppins font-semibold">Ready to Join Us?</span>
              </div>
              
              <h2 className="text-5xl font-bold font-poppins bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent mb-6">
                Start Your Journey with BrainlyBees
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Be part of our mission to revolutionize education and help shape the minds of tomorrow. Together, we can create learning experiences that inspire, engage, and empower every child.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white border-2 border-orange-400 text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
                  Browse All Positions
                </button>
                <a href="https://wa.me/your-number" className="bg-gradient-to-r from-orange-400 to-amber-400 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105">
                  Contact Recruitment Team
                </a>
              </div>
              
              <div className="mt-8 text-sm text-gray-600">
                <p>Questions about careers? Email us at careers@brainlybees.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  )
}