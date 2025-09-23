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
    <section className="bg-red-500 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Glimpse of our worksheets
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-t-lg font-semibold transition-colors ${
                  activeTab === tab 
                    ? 'bg-white text-red-500' 
                    : 'bg-red-600 text-white hover:bg-red-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Worksheet Grid */}
        <div className="bg-white p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {worksheetImages[activeTab as keyof typeof worksheetImages].map((worksheet, index) => (
              <div key={index} className="relative group">
                <div className={`${worksheet.color} h-64 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold">{worksheet.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}