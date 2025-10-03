'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          id: "general-1",
          question: "What age groups does Brainly Bees cater to?",
          answer: "Brainly Bees provides programs for children aged 4-14 years, with age-appropriate curriculum designed to match developmental stages and learning capabilities."
        },
        {
          id: "general-2",
          question: "How does the interactive learning platform work?",
          answer: "Our platform combines live teacher interactions, gamified activities, visual learning tools, and hands-on exercises to create an engaging learning experience that adapts to each child's pace."
        },
        {
          id: "general-3",
          question: "Are classes conducted online or offline?",
          answer: "We offer both online and offline programs. Our online classes feature live interactive sessions, while offline programs include hands-on activities and local learning centers."
        }
      ]
    },
    {
      category: "Programs & Curriculum",
      questions: [
        {
          id: "programs-1",
          question: "What subjects do you cover?",
          answer: "We focus on Mathematics, Language Arts, Logical Reasoning, Creative Expression, and Cognitive Development with specialized programs for each area."
        },
        {
          id: "programs-2",
          question: "How do you prepare students for competitions?",
          answer: "Our competition preparation includes specialized training modules, practice tests, problem-solving techniques, and personalized coaching to help students excel in national and international competitions."
        },
        {
          id: "programs-3",
          question: "What makes your teaching methodology unique?",
          answer: "We use a blend of visual learning, interactive activities, personalized attention, and real-world applications to make learning engaging and effective for every child."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          id: "support-1",
          question: "What technical requirements are needed for online classes?",
          answer: "You need a stable internet connection, a computer/tablet with camera and microphone, and our learning app. We provide technical support for setup and troubleshooting."
        },
        {
          id: "support-2",
          question: "How do you track my child's progress?",
          answer: "We provide detailed progress reports, regular assessments, parent-teacher conferences, and real-time updates on your child's learning journey and achievements."
        },
        {
          id: "support-3",
          question: "What if my child needs additional support?",
          answer: "We offer personalized tutoring sessions, extra practice materials, one-on-one mentoring, and special support programs for children who need additional help."
        }
      ]
    },
    {
      category: "Enrollment & Pricing",
      questions: [
        {
          id: "pricing-1",
          question: "How can I enroll my child?",
          answer: "You can enroll through our website, WhatsApp, or by calling us directly. We offer a free trial class to help you and your child experience our teaching methodology."
        },
        {
          id: "pricing-2",
          question: "What are your pricing options?",
          answer: "We offer flexible pricing plans including monthly, quarterly, and annual packages. Contact us for detailed pricing information and available discounts."
        },
        {
          id: "pricing-3",
          question: "Do you offer refunds?",
          answer: "Yes, we have a transparent refund policy. If you're not satisfied with our services within the first month, we offer a full refund as per our cancellation policy."
        }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            Frequently Asked Questions
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about Brainly Bees programs, enrollment process, and learning methodology.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                </div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-5 text-left bg-gradient-to-r from-gray-50 to-white hover:from-red-50 hover:to-orange-50 transition-all duration-300 flex items-center justify-between group"
                    >
                      <span className="font-semibold text-gray-900 pr-4 group-hover:text-red-600 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full bg-red-100 flex items-center justify-center transform transition-all duration-300 group-hover:bg-red-200 group-hover:scale-110 ${
                          openItems.includes(faq.id) ? 'rotate-180' : 'rotate-0'
                        }`}>
                          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${
                      openItems.includes(faq.id) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-6 py-5 bg-white border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed animate-fadeInUp">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-xl p-8 shadow-lg mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect learning program for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918979245215" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a 
              href="mailto:BrainlyBeesGlobal@gmail.com" 
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
