'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactNumber: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email content
      const subject = `Consultation Request - ${formData.name}`;
      const emailBody = `
Name: ${formData.name}
Age: ${formData.age}
Contact Number: ${formData.contactNumber}
Email: ${formData.email}

Description:
${formData.description}

---
This consultation request was submitted through the BrainlyBees website.
      `;

      // Create mailto link
      const mailtoLink = `mailto:BrainlyBeesGlobal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.open(mailtoLink, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        age: '',
        contactNumber: '',
        email: '',
        description: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-gray-200 shadow-lg mb-6">
            <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
            <span className="text-gray-700 font-bold text-sm">Book Your Session</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Schedule a Consultation
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Connect with our education experts to discuss your learning goals and discover the perfect program for you
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">

              {/* Name Field */}
              <div className="space-y-3">
                <label htmlFor="name" className="block text-lg font-bold text-gray-800 font-poppins">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 text-gray-700 placeholder-gray-400 font-nunito shadow-lg hover:shadow-xl"
                />
              </div>

              {/* Age Field */}
              <div className="space-y-3">
                <label htmlFor="age" className="block text-lg font-bold text-gray-800 font-poppins">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  min="1"
                  max="100"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 text-gray-700 placeholder-gray-400 font-nunito shadow-lg hover:shadow-xl"
                />
              </div>

              {/* Contact Number Field */}
              <div className="space-y-3">
                <label htmlFor="contactNumber" className="block text-lg font-bold text-gray-800 font-poppins">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number (e.g., +91 9876543210)"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 text-gray-700 placeholder-gray-400 font-nunito shadow-lg hover:shadow-xl"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label htmlFor="email" className="block text-lg font-bold text-gray-800 font-poppins">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 text-gray-700 placeholder-gray-400 font-nunito shadow-lg hover:shadow-xl"
                />
              </div>

              {/* Description Field */}
              <div className="space-y-3">
                <label htmlFor="description" className="block text-lg font-bold text-gray-800 font-poppins">
                  Tell Us About Your Learning Goals <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please describe your learning objectives, subjects of interest, current challenges, or any specific requirements..."
                  rows={6}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 text-gray-700 placeholder-gray-400 font-nunito resize-vertical shadow-lg hover:shadow-xl"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 px-8 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 font-poppins ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white hover:shadow-2xl hover:from-orange-500 hover:via-red-500 hover:to-pink-500'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Request...</span>
                    </div>
                  ) : (
                    'Schedule My Consultation'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mt-8 bg-white rounded-3xl shadow-xl border-2 border-green-200 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-4">
                Request Submitted Successfully
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Thank you for your interest in BrainlyBees! Your email client should have opened with a pre-filled consultation request. Please send the email to complete your submission. Our education experts will review your request and contact you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-8 bg-white rounded-3xl shadow-xl border-2 border-red-200 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-4">
                Submission Error
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We&apos;re sorry, but there was an issue submitting your consultation request. Please try again or contact us directly via WhatsApp.
              </p>
              <a href="https://wa.me/918979245215" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-poppins">
                  Contact via WhatsApp
                </button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl font-poppins">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-poppins">Review</h3>
                <p className="text-gray-600 font-nunito">Our team reviews your consultation request and learning requirements</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl font-poppins">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-poppins">Contact</h3>
                <p className="text-gray-600 font-nunito">We reach out within 24 hours to schedule your consultation session</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl font-poppins">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-poppins">Personalize</h3>
                <p className="text-gray-600 font-nunito">We create a customized learning plan that fits your goals and preferences</p>
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
