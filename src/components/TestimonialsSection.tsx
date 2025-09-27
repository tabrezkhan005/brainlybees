export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Matthew's Mom",
      location: "Los Angeles, California",
      avatar: "M",
      comment: "Brainly Bees has transformed my son's learning experience. The interactive approach keeps him engaged and excited about mathematics.",
      rating: 5
    },
    {
      name: "Akshat's Mom",
      location: "McKinney, Texas",
      avatar: "A",
      comment: "The structured learning roadmap and quality teaching have improved my child's problem-solving skills significantly.",
      rating: 5
    },
    {
      name: "Sophia's Dad",
      location: "Toronto, Canada",
      avatar: "S",
      comment: "Outstanding platform! The personalized attention and creative activities make learning enjoyable for kids.",
      rating: 5
    },
    {
      name: "Emma's Mom",
      location: "London, UK",
      avatar: "E",
      comment: "Excellent teaching methodology. My daughter's confidence in mathematics has grown tremendously.",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            Parent Testimonials
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Our Program
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Brainly Bees has made a positive impact on children's learning journey through the words of satisfied parents.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Parent Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
              <div className="text-gray-600">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
