'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { useState } from 'react';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "General Questions",
      icon: "❓",
      faqs: [
        {
          question: "What is BrainlyBees?",
          answer: "BrainlyBees is an innovative educational platform that offers personalized online and offline learning experiences for children. We focus on making learning engaging, fun, and effective through interactive methods and caring educators."
        },
        {
          question: "What age groups do you serve?",
          answer: "We serve children from ages 4 to 16+ across different programs. Our offerings include early learning (4-6 years), primary skills (7-9 years), advanced academics (10-12 years), and teen mastery (13+ years)."
        },
        {
          question: "How do I get started?",
          answer: "Getting started is easy! You can book a consultation through our website, contact us via WhatsApp at +91 8979245215, or email us at brainlybeesglobal@gmail.com. We'll help you choose the right program for your child."
        },
        {
          question: "Do you offer free trials?",
          answer: "Yes! We offer free consultation sessions where you can learn about our programs and see if they're a good fit for your child. Contact us to schedule your free consultation."
        }
      ]
    },
    {
      title: "Online Programs",
      icon: "💻",
      faqs: [
        {
          question: "What equipment do I need for online classes?",
          answer: "You'll need a computer, tablet, or smartphone with a stable internet connection, a camera, and a microphone. We recommend using a computer or tablet for the best experience."
        },
        {
          question: "How long are online sessions?",
          answer: "Session lengths vary by age group: 45 minutes for ages 4-6, 60 minutes for ages 7-9, 75 minutes for ages 10-12, and 90 minutes for ages 13+."
        },
        {
          question: "Can I reschedule online classes?",
          answer: "Yes, we offer flexible scheduling. You can reschedule classes with at least 24 hours notice. Contact your instructor or our support team to make changes."
        },
        {
          question: "Are online classes interactive?",
          answer: "Absolutely! Our online classes are highly interactive, featuring games, quizzes, virtual experiments, collaborative projects, and one-on-one attention from our educators."
        }
      ]
    },
    {
      title: "Offline Programs",
      icon: "🏫",
      faqs: [
        {
          question: "Where are your offline centers located?",
          answer: "We're expanding our offline presence globally. Contact us to find the nearest center to your location or to inquire about upcoming locations in your area."
        },
        {
          question: "What safety measures do you have in place?",
          answer: "We maintain strict safety protocols including health screenings, sanitized learning environments, trained staff, emergency procedures, and secure facilities to ensure every child's safety."
        },
        {
          question: "Can I visit before enrolling?",
          answer: "Yes! We encourage parents and children to visit our centers before enrolling. Schedule a visit through our consultation booking system or contact us directly."
        },
        {
          question: "What's included in offline programs?",
          answer: "Our offline programs include hands-on learning materials, interactive activities, small group sessions, progress tracking, parent updates, and access to our digital resources."
        }
      ]
    },
    {
      title: "Special Needs Support",
      icon: "🌟",
      faqs: [
        {
          question: "What special needs do you support?",
          answer: "We support children with autism spectrum conditions, ADHD, learning differences (dyslexia, dyscalculia), developmental delays, emotional/behavioral needs, and intellectual disabilities."
        },
        {
          question: "How do you assess my child's needs?",
          answer: "We conduct comprehensive assessments including family consultations, gentle child evaluations, learning style assessments, and collaborative planning with parents and professionals."
        },
        {
          question: "Are your teachers specially trained?",
          answer: "Yes, our educators have specialized training in special needs education, behavior analysis, communication techniques, and inclusive teaching methods."
        },
        {
          question: "Do you work with other professionals?",
          answer: "We collaborate with therapists, counselors, medical professionals, and school teams to ensure comprehensive support for your child's development."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: "💳",
      faqs: [
        {
          question: "How much do programs cost?",
          answer: "Pricing varies by program type and duration. Online programs start from ₹1,500/session, offline programs from ₹1,800/session. Contact us for detailed pricing and package options."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept online transfers, UPI payments, credit/debit cards, and bank transfers. International payments can be made through secure online payment gateways."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans including monthly, quarterly, and annual options. We also provide family discounts for multiple children."
        },
        {
          question: "What is your refund policy?",
          answer: "We offer a satisfaction guarantee. If you're not completely satisfied within the first two weeks, we'll work with you to find a solution or provide a refund."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      faqs: [
        {
          question: "I'm having trouble joining online classes",
          answer: "First, check your internet connection and ensure your browser is updated. If issues persist, contact our technical support team via WhatsApp or email for immediate assistance."
        },
        {
          question: "What browsers are supported?",
          answer: "We support Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of Chrome or Firefox."
        },
        {
          question: "Can I access materials offline?",
          answer: "Yes, many learning materials can be downloaded for offline access. Digital worksheets, videos, and resources are available through your student portal."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive reset instructions via email. If you need help, contact our support team."
        }
      ]
    }
  ];

  const toggleFaq = (categoryIndex: number, faqIndex: number) => {
    const uniqueIndex = categoryIndex * 1000 + faqIndex;
    setOpenFaq(openFaq === uniqueIndex ? null : uniqueIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,200 C300,100 600,300 900,150 C1050,75 1200,200 1200,200 L1200,0 L0,0 Z"
                  fill="url(#heroWave1)" opacity="0.4"/>
            <defs>
              <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3e8ff" />
                <stop offset="50%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#fb7185" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-purple-200 shadow-lg mb-6">
            <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
            <span className="text-purple-700 font-bold text-sm">Quick Answers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mt-2">
              Questions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Find instant answers to the most common questions about BrainlyBees programs and services.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-purple-200 shadow-lg mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <span className="text-purple-700 font-bold text-lg font-poppins">{category.title}</span>
                </div>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const uniqueIndex = categoryIndex * 1000 + faqIndex;
                  const isOpen = openFaq === uniqueIndex;

                  return (
                    <div key={faqIndex} className="bg-white rounded-2xl shadow-lg border-2 border-purple-100 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(categoryIndex, faqIndex)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 font-poppins pr-4">
                          {faq.question}
                        </h3>
                        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-purple-100">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-purple-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Can&apos;t find the answer you&apos;re looking for? Our friendly support team is ready to help you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Email Us</h3>
                <div className="text-blue-600 font-semibold text-sm">brainlybeesglobal@gmail.com</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">WhatsApp</h3>
                <div className="text-green-600 font-semibold text-sm">+91 8979245215</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="text-3xl mb-4">📅</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Book Consultation</h3>
                <div className="text-purple-600 font-semibold text-sm">Free 30-min session</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
