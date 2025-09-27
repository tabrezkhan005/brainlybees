'use client';

import { useState } from 'react';

export default function WorksheetsSection() {
  const [activeTab, setActiveTab] = useState('Maths');
  
  const tabs = ['Maths', 'English', 'Creative Thinking', 'Logical Reasoning'];

  const worksheetImages = {
    'Maths': [
      { title: 'Circles - Advanced Worksheet', color: 'bg-purple-500' },
      { title: 'Discounts', color: 'bg-purple-600' },
      { title: 'Comparison Word Problems', color: 'bg-orange-500' },
      { title: 'Properties of Square and Rectangle', color: 'bg-orange-600' }
    ],
    'English': [
      { title: 'The City of Nara, Japan', color: 'bg-blue-500' },
      { title: 'Reading Comprehension', color: 'bg-blue-600' },
      { title: 'Making Predictions Worksheet', color: 'bg-gray-500' },
      { title: 'Grammar Exercise', color: 'bg-gray-600' }
    ],
    'Creative Thinking': [
      { title: 'Point of View', color: 'bg-yellow-500' },
      { title: 'Holiday Fun', color: 'bg-red-500' },
      { title: 'Cause and Effect', color: 'bg-blue-500' },
      { title: 'Visual Elements', color: 'bg-purple-500' }
    ],
    'Logical Reasoning': [
      { title: 'Missing Numbers', color: 'bg-blue-500' },
      { title: 'Riddles and Codes', color: 'bg-blue-600' },
      { title: 'Angles Clock', color: 'bg-teal-500' },
      { title: 'Math Puzzle', color: 'bg-green-500' }
    ]
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Learning Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Premium{' '}
            <span className="text-red-500">Learning Worksheets</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Carefully crafted worksheets designed to reinforce learning, challenge thinking, 
            and make education engaging across all subjects and skill levels.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === tab 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Worksheet Grid */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {worksheetImages[activeTab as keyof typeof worksheetImages].map((worksheet, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className={`${worksheet.color} h-48 flex items-center justify-center text-white`}>
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 text-center">{worksheet.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Skill-Based</h4>
              <p className="text-sm text-gray-600">Targeted practice for specific abilities</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Progressive</h4>
              <p className="text-sm text-gray-600">Gradual difficulty increase</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Verified</h4>
              <p className="text-sm text-gray-600">Expert-reviewed content</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-sm">
            Access All Worksheets
          </button>
        </div>
      </div>
    </section>
  );
}