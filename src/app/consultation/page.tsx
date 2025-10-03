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
      // Send the data to your email service
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          age: '',
          contactNumber: '',
          email: '',
          description: ''
        });
      } else {
        console.error('Server responded with error:', responseData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-nunito">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Form Header - Google Forms Style */}
          <div className="bg-white rounded-t-xl border-t-8 border-purple-500 shadow-lg">
            <div className="p-8">
              <div className="text-center mb-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 font-poppins mb-2">
                  Book Consultation
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 text-lg">
                  General Inquiry Form
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Please fill out this form to schedule your consultation with our education experts.
                </p>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="bg-white shadow-lg">
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 font-poppins">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-700 placeholder-gray-400 font-nunito"
                />
              </div>

              {/* Age Field */}
              <div className="space-y-2">
                <label htmlFor="age" className="block text-lg font-semibold text-gray-700 font-poppins">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-700 placeholder-gray-400 font-nunito"
                />
              </div>

              {/* Contact Number Field */}
              <div className="space-y-2">
                <label htmlFor="contactNumber" className="block text-lg font-semibold text-gray-700 font-poppins">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-700 placeholder-gray-400 font-nunito"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 font-poppins">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-700 placeholder-gray-400 font-nunito"
                />
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <label htmlFor="description" className="block text-lg font-semibold text-gray-700 font-poppins">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please describe your inquiry, learning goals, or any specific requirements you have..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 text-gray-700 placeholder-gray-400 font-nunito resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 font-poppins ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-xl hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit Consultation Request'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Form Footer */}
          <div className="bg-white rounded-b-xl shadow-lg border-t border-gray-100">
            <div className="p-6 text-center text-sm text-gray-500">
              <p>Your information is secure and will only be used to contact you about your consultation.</p>
              <p className="mt-2">Powered by BrainlyBees Education Platform</p>
            </div>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 font-poppins mb-2">
                Thank You!
              </h3>
              <p className="text-green-700">
                Your consultation request has been submitted successfully. We'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-800 font-poppins mb-2">
                Submission Failed
              </h3>
              <p className="text-red-700">
                There was an error submitting your form. Please try again or contact us directly via WhatsApp.
              </p>
              <a href="https://wa.me/918979245215" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Contact via WhatsApp
                </button>
              </a>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
}