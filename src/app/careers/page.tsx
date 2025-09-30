'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { useState } from 'react';
import Image from 'next/image';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Special Needs Education Specialist',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Work with children with special needs to create personalized learning experiences',
      requirements: ['Masters in Special Education', 'Experience with IEP development', 'Strong communication skills'],
      image: '/src/assets/teacher-helping-girl-kid-doubt.png'
    },
    {
      id: 2,
      title: 'Senior Mathematics Teacher',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Teach advanced mathematics concepts to students aged 8-15 years',
      requirements: ['Masters in Mathematics/Education', 'Online teaching experience', 'Curriculum development skills'],
      image: '/src/assets/teacher-solving-boy-kid-doubt.png'
    },
    {
      id: 3,
      title: 'Educational Technology Developer',
      department: 'Technology',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop innovative educational software and learning platforms',
      requirements: ['Computer Science degree', 'Experience with React/Node.js', 'Understanding of educational technology'],
      image: '/src/assets/kid-enjoying.png'
    },
    {
      id: 4,
      title: 'Student Success Coordinator',
      department: 'Student Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Support student engagement and academic success across all programs',
      requirements: ['Education/Psychology background', 'Student counseling experience', 'Data analysis skills'],
      image: '/src/assets/teacher-with-all-kids.png'
    },
    {
      id: 5,
      title: 'Curriculum Designer',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Design and develop age-appropriate curriculum for various subjects',
      requirements: ['Educational Design degree', 'Curriculum development experience', 'Research skills'],
      image: '/src/assets/teacher-reading-for-kids.png'
    },
    {
      id: 6,
      title: 'UX/UI Designer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Create intuitive and engaging user experiences for our learning platforms',
      requirements: ['Design degree/portfolio', 'Experience with educational platforms', 'Figma/Adobe Creative Suite'],
      image: '/src/assets/kids-doing-painting.png'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobOpenings.length },
    { id: 'Education', name: 'Education', count: jobOpenings.filter(job => job.department === 'Education').length },
    { id: 'Technology', name: 'Technology', count: jobOpenings.filter(job => job.department === 'Technology').length },
    { id: 'Student Services', name: 'Student Services', count: jobOpenings.filter(job => job.department === 'Student Services').length }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance bonuses and equity options',
      icon: '💰',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Flexible Work Arrangements',
      description: 'Work from anywhere with flexible hours and excellent work-life balance',
      icon: '🏠',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities, conferences, and skill development programs',
      icon: '📚',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs',
      icon: '🏥',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Innovation Culture',
      description: 'Work with cutting-edge technology and contribute to educational innovation',
      icon: '💡',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Global Impact',
      description: 'Make a meaningful difference in children\'s lives across the globe',
      icon: '🌍',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const teamCulture = [
    {
      title: 'Collaborative Environment',
      description: 'Work alongside passionate educators and technologists who share your vision',
      image: '/src/assets/teacher-with-all-kids.png'
    },
    {
      title: 'Innovation Focus',
      description: 'Encouraged to think creatively and implement new ideas in education',
      image: '/src/assets/kid-keeping-book-on-head-and-thinking.png'
    },
    {
      title: 'Student-Centric Approach',
      description: 'Every decision is made with student success and well-being in mind',
      image: '/src/assets/teacher-teaching-kids-about-plants.png'
    },
    {
      title: 'Continuous Learning',
      description: 'Regular training sessions, workshops, and knowledge sharing opportunities',
      image: '/src/assets/teacher-reading-for-kids.png'
    }
  ];

  const hiringProcess = [
    {
      step: 1,
      title: 'Application Review',
      description: 'Our team reviews your application and portfolio',
      duration: '3-5 days'
    },
    {
      step: 2,
      title: 'Initial Screening',
      description: 'Brief phone/video call to discuss your background',
      duration: '30 minutes'
    },
    {
      step: 3,
      title: 'Technical/Teaching Assessment',
      description: 'Demonstrate your skills through practical exercises',
      duration: '1-2 hours'
    },
    {
      step: 4,
      title: 'Final Interview',
      description: 'Meet with the team and discuss your fit with our culture',
      duration: '1 hour'
    },
    {
      step: 5,
      title: 'Offer & Onboarding',
      description: 'Join our team and begin your journey with us',
      duration: '1-2 weeks'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Senior Mathematics Teacher',
      image: '/src/assets/lady-teacher-telling-story.png',
      quote: 'Working at BrainlyBees has been incredibly fulfilling. The support for professional growth and the impact we make on students\' lives is extraordinary.'
    },
    {
      name: 'James Chen',
      position: 'Educational Technology Developer',
      image: '/src/assets/teacher-solving-boy-kid-doubt.png',
      quote: 'The innovation culture here is amazing. We\'re constantly exploring new ways to enhance learning experiences using cutting-edge technology.'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' ? jobOpenings : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Join Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Mission</span>
                <br />to Transform Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Be part of a passionate team dedicated to revolutionizing education and making a positive impact
                on children&apos;s lives around the world. Grow your career while making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  View Open Positions
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Learn About Culture
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/src/assets/teacher-with-kids-doing-ring-activity.png"
                  alt="Our Team"
                  width={800}
                  height={320}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">Collaborative Team</h3>
                        <p className="text-sm text-gray-600">Working together for student success</p>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-400 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-white">+50</span>
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

      {/* Current Openings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help shape the future of education. Find the perfect role that matches your skills and passion.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {job.department}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{job.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Location:</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{job.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Requirements:</h4>
                    <div className="space-y-1">
                      {job.requirements.slice(0, 2).map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits and an inspiring work environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a workplace culture that values collaboration, innovation, and making a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamCulture.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent and efficient process designed to help us get to know each other better.
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {hiringProcess.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center relative z-10 border-4 border-white shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    <div className="text-orange-600 font-medium text-sm">{step.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about their experiences working at BrainlyBees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-orange-600 font-medium">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our passionate team and help us transform education for children around the world.
              Your expertise can make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Browse All Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300">
                Submit Your Resume
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
