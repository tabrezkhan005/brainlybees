'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { useState } from 'react';

export default function SpecialNeedsPage() {
  const [selectedProgram, setSelectedProgram] = useState('autism');

  const specialPrograms = [
    {
      id: 'autism',
      name: 'Autism Spectrum Support',
      description: 'Tailored programs for children with autism spectrum disorders',
      image: '/src/assets/teacher-helping-girl-kid-doubt.png',
      approaches: ['Applied Behavior Analysis (ABA)', 'Social Skills Training', 'Communication Development', 'Sensory Integration'],
      outcomes: ['Improved Communication', 'Enhanced Social Skills', 'Better Focus', 'Increased Independence']
    },
    {
      id: 'adhd',
      name: 'ADHD & Attention Support',
      description: 'Specialized support for children with ADHD and attention challenges',
      image: '/src/assets/teacher-solving-boy-kid-doubt.png',
      approaches: ['Executive Function Training', 'Attention Building Exercises', 'Behavioral Strategies', 'Mindfulness Techniques'],
      outcomes: ['Better Focus & Attention', 'Improved Organization', 'Enhanced Self-Control', 'Academic Success']
    },
    {
      id: 'learning',
      name: 'Learning Disabilities Support',
      description: 'Comprehensive support for various learning disabilities',
      image: '/src/assets/teacher-solving-girl-kid-doubt.png',
      approaches: ['Multisensory Learning', 'Individualized Instruction', 'Assistive Technology', 'Progress Monitoring'],
      outcomes: ['Academic Improvement', 'Increased Confidence', 'Better Learning Strategies', 'Skill Development']
    },
    {
      id: 'speech',
      name: 'Speech & Language Support',
      description: 'Speech and language development programs',
      image: '/src/assets/teacher-telling-story.png',
      approaches: ['Speech Therapy Integration', 'Language Development', 'Communication Skills', 'Social Communication'],
      outcomes: ['Clearer Speech', 'Better Communication', 'Increased Vocabulary', 'Social Interaction']
    }
  ];

  const supportFeatures = [
    {
      title: 'Individualized Education Plans (IEP)',
      description: 'Customized learning plans tailored to each child\'s unique needs',
      image: '/src/assets/teacher-reading-for-kids.png',
      benefits: ['Personalized Goals', 'Regular Assessment', 'Family Collaboration', 'Progress Tracking']
    },
    {
      title: 'Certified Special Education Teachers',
      description: 'Expert educators trained in special needs teaching methodologies',
      image: '/src/assets/lady-teacher-telling-story.png',
      benefits: ['Specialized Training', 'Patience & Understanding', 'Adaptive Teaching', 'Continuous Learning']
    },
    {
      title: 'Assistive Technology',
      description: 'Cutting-edge tools and technology to support learning',
      image: '/src/assets/teacher-with-all-kids.png',
      benefits: ['Text-to-Speech', 'Visual Aids', 'Interactive Tools', 'Adaptive Software']
    },
    {
      title: 'Family Support & Training',
      description: 'Comprehensive support and training for families',
      image: '/src/assets/teacher-asking-question-students-saying-answer.png',
      benefits: ['Parent Training', 'Home Strategies', 'Regular Communication', 'Resource Access']
    }
  ];

  const therapeuticApproaches = [
    {
      name: 'Applied Behavior Analysis (ABA)',
      description: 'Evidence-based therapy focusing on behavior modification and skill development',
      techniques: ['Discrete Trial Training', 'Natural Environment Teaching', 'Positive Reinforcement', 'Data Collection'],
      suitable: ['Autism Spectrum', 'Developmental Delays', 'Behavioral Challenges']
    },
    {
      name: 'Speech & Language Therapy',
      description: 'Comprehensive therapy to improve communication skills',
      techniques: ['Articulation Therapy', 'Language Development', 'Social Communication', 'Fluency Training'],
      suitable: ['Speech Delays', 'Language Disorders', 'Autism Spectrum', 'Hearing Impairments']
    },
    {
      name: 'Occupational Therapy',
      description: 'Therapy focusing on daily living skills and sensory integration',
      techniques: ['Sensory Integration', 'Fine Motor Skills', 'Self-Care Skills', 'Cognitive Strategies'],
      suitable: ['Sensory Processing', 'Motor Delays', 'Autism Spectrum', 'ADHD']
    },
    {
      name: 'Cognitive Behavioral Therapy',
      description: 'Therapy addressing thoughts, feelings, and behaviors',
      techniques: ['Thought Restructuring', 'Coping Strategies', 'Problem Solving', 'Emotional Regulation'],
      suitable: ['Anxiety Disorders', 'ADHD', 'Emotional Challenges', 'Social Difficulties']
    }
  ];

  const successStories = [
    {
      name: 'Emma',
      age: 8,
      condition: 'Autism Spectrum',
      image: '/src/assets/girl-saying-hi.png',
      story: 'Emma has made remarkable progress in communication and social skills. She now participates actively in group activities and has developed meaningful friendships.',
      improvements: ['Verbal Communication', 'Social Interaction', 'Academic Performance', 'Independence']
    },
    {
      name: 'Alex',
      age: 10,
      condition: 'ADHD',
      image: '/src/assets/boy-saying-hi.png',
      story: 'Alex has learned to manage his attention challenges and now excels in his studies. His confidence has grown tremendously.',
      improvements: ['Focus & Attention', 'Academic Success', 'Self-Confidence', 'Behavioral Management']
    }
  ];

  const assessmentProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Comprehensive discussion with family about child\'s needs and goals',
      duration: '60 minutes',
      includes: ['Family Interview', 'Medical History Review', 'Goal Setting', 'Program Overview']
    },
    {
      step: 2,
      title: 'Comprehensive Assessment',
      description: 'Detailed evaluation by our specialized team',
      duration: '2-3 sessions',
      includes: ['Cognitive Assessment', 'Behavioral Observation', 'Skill Evaluation', 'Learning Style Analysis']
    },
    {
      step: 3,
      title: 'IEP Development',
      description: 'Creation of individualized education plan',
      duration: '1 week',
      includes: ['Goal Setting', 'Strategy Planning', 'Progress Metrics', 'Family Review']
    },
    {
      step: 4,
      title: 'Program Implementation',
      description: 'Begin personalized learning program',
      duration: 'Ongoing',
      includes: ['Regular Sessions', 'Progress Monitoring', 'Strategy Adjustment', 'Family Updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Special Needs
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"> Education</span>
                <br />& Support
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive, individualized education programs designed to help children with special needs 
                reach their full potential through evidence-based approaches and dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Schedule Assessment
                </button>
                <button className="border-2 border-green-500 text-green-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/src/assets/teacher-with-all-kids.png"
                  alt="Special Needs Support"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">Inclusive Learning</h3>
                        <p className="text-sm text-gray-600">Every child deserves quality education</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Children Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Goal Achievement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Specialized Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-lg opacity-90">Family Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Support Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed for specific needs with evidence-based approaches and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{program.name}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Our Approaches:</h4>
                    <div className="space-y-2">
                      {program.approaches.map((approach, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Expected Outcomes:</h4>
                    <div className="space-y-2">
                      {program.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Support System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete ecosystem of support designed to ensure success for every child and family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supportFeatures.map((feature, index) => (
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
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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

      {/* Therapeutic Approaches */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Evidence-Based Therapeutic Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodologies backed by research and years of successful implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapeuticApproaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.name}</h3>
                <p className="text-gray-600 mb-6">{approach.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Techniques:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {approach.techniques.map((technique, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{technique}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Suitable For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {approach.suitable.map((condition, condIndex) => (
                      <span key={condIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A thorough, compassionate approach to understanding your child's unique needs and strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <div className="text-sm text-blue-600 font-medium mb-4">{step.duration}</div>
                <div className="space-y-1">
                  {step.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-xs text-gray-500">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Inspiring Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real progress stories from children and families in our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600">Age {story.age} • {story.condition}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">"{story.story}"</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Improvements:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {story.improvements.map((improvement, impIndex) => (
                        <div key={impIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every child deserves the opportunity to reach their full potential. Let us help your child thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Free Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-green-500 transition-all duration-300">
                Contact Our Team
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