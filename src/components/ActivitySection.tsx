'use client';

export default function ActivitySection() {
  const activities = [
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Brain Challenge Games',
      description: 'Strategic puzzles and logic games that enhance critical thinking and problem-solving abilities',
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: 'Creative Writing Workshop',
      description: 'Guided storytelling sessions that boost imagination, vocabulary, and communication skills',
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Reading Adventures',
      description: 'Interactive reading sessions with comprehension activities that build literacy confidence',
      color: 'green'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Math Mastery Games',
      description: 'Fun, interactive mathematical challenges that make numbers exciting and accessible',
      color: 'orange'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Science Discovery Lab',
      description: 'Hands-on experiments and investigations that spark curiosity about the natural world',
      color: 'teal'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2V3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 7.5l2.8-2.8a3.5 3.5 0 015 5L21 12l-7 7-1.5-1.5L21 9.5l-5.5-2z" />
        </svg>
      ),
      title: 'Art & Design Studio',
      description: 'Creative projects that develop artistic skills and encourage self-expression through various mediums',
      color: 'pink'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Enrichment Activities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Engaging{' '}
            <span className="text-red-500">Special Activities</span>{' '}
            for Your Child
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond regular curriculum, we offer exciting activities that spark curiosity, 
            build confidence, and make learning an adventure your child will love.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-${activity.color}-50 rounded-lg flex items-center justify-center`}>
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-red-600 mb-2">6+</div>
            <div className="text-gray-700 font-medium">Activity Types</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">Weekly</div>
            <div className="text-gray-700 font-medium">New Challenges</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-700 font-medium">Engagement Rate</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-sm">
            Join Our Activities
          </button>
        </div>
      </div>
    </section>
  );
}