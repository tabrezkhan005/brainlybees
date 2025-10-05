import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function RefundPolicyPage() {
  const refundTypes = [
    {
      title: "New Enrollment Refunds",
      period: "Within 7 days of enrollment",
      conditions: [
        "Student has attended no more than 2 sessions",
        "Request must be made in writing within 7 calendar days",
        "Valid for all program types except trial sessions",
        "Refund amount: 100% of fees paid minus processing charges"
      ],
      processing: "3-5 business days"
    },
    {
      title: "Mid-Program Refunds",
      period: "After 7 days, within first 25% of program",
      conditions: [
        "Student has completed less than 25% of enrolled sessions",
        "Valid reason required (illness, relocation, etc.)",
        "Subject to review by our academic team",
        "Refund amount: 75% of remaining session fees"
      ],
      processing: "5-7 business days"
    },
    {
      title: "Service Quality Refunds",
      period: "Any time during program",
      conditions: [
        "Documented quality issues with our service delivery",
        "Unsuccessful resolution through customer support",
        "Independent review by our quality assurance team",
        "Refund amount: Varies based on specific circumstances"
      ],
      processing: "7-10 business days"
    },
    {
      title: "Technical Issue Refunds",
      period: "When platform issues prevent learning",
      conditions: [
        "Extended platform downtime affecting multiple sessions",
        "Technical issues preventing student participation",
        "Our team unable to provide alternative solutions",
        "Refund amount: Prorated for affected sessions only"
      ],
      processing: "3-5 business days"
    }
  ];

  const nonRefundableItems = [
    {
      item: "Registration & Setup Fees",
      reason: "Administrative costs incurred for account setup and initial assessments"
    },
    {
      item: "Trial Sessions",
      reason: "Complimentary sessions provided for evaluation purposes"
    },
    {
      item: "Completed Sessions",
      reason: "Educational services already delivered cannot be returned"
    },
    {
      item: "Digital Materials Downloaded",
      reason: "Worksheets and resources accessed remain with the student"
    },
    {
      item: "Late Cancellation Requests",
      reason: "Requests made after program completion or specified deadlines"
    },
    {
      item: "Payment Processing Fees",
      reason: "Third-party transaction fees are non-recoverable"
    }
  ];

  const guarantees = [
    {
      title: "Satisfaction Guarantee",
      description: "If you're not satisfied with our service quality within the first 3 sessions, we'll work with you to address concerns or provide a full refund.",
      icon: "✅"
    },
    {
      title: "Progress Guarantee",
      description: "We guarantee measurable learning progress within 8 weeks of regular participation, or we'll provide additional sessions at no extra cost.",
      icon: "📈"
    },
    {
      title: "Platform Reliability",
      description: "If technical issues on our end prevent more than 2 sessions in a month, affected sessions will be refunded or rescheduled at your preference.",
      icon: "🔧"
    },
    {
      title: "Instructor Continuity",
      description: "If we need to change your instructor mid-program without your consent, you can receive a full refund for remaining sessions.",
      icon: "👨‍🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 font-nunito">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border-2 border-gray-200 shadow-lg mb-6">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
            <span className="text-gray-700 font-bold text-sm">Financial Policy</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Refund Policy
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Fair and transparent refund terms for our educational services
          </p>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <p className="text-blue-800 font-semibold">
              Last Updated: October 3, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Our Commitment to Fair Refunds</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                At BrainlyBees, we are committed to providing exceptional educational services and ensuring our families feel confident in their investment. This Refund Policy outlines our fair and transparent approach to refunds, designed to protect both our students&apos; interests and the sustainability of our educational programs.
              </p>
              <p className="mb-4">
                We understand that circumstances can change, and we strive to work with families to find solutions that support continued learning. Our refund policy is designed to be fair while acknowledging the resources invested in providing high-quality educational services.
              </p>
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-green-800 font-semibold">
                  💡 We encourage families to try our trial sessions before enrolling to ensure our programs meet your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center font-poppins">
            Refund Categories and Eligibility
          </h2>

          <div className="space-y-8">
            {refundTypes.map((refund, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
                      {refund.title}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {refund.period}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Processing Time</div>
                    <div className="text-sm font-semibold text-gray-700">{refund.processing}</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-800 mb-4 font-poppins">Eligibility Conditions:</h4>
                <div className="space-y-3">
                  {refund.conditions.map((condition, cIndex) => (
                    <div key={cIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-600">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Refundable Items */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center font-poppins">
            Non-Refundable Items
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonRefundableItems.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-6 border-2 border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-poppins">
                  {item.item}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Important Notes</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-600">Refund requests must be submitted in writing via email or through our platform</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-600">All refunds are processed to the original payment method used for enrollment</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-600">Refund amounts may be subject to payment processing fees charged by banks or payment providers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center font-poppins">
            Our Service Guarantees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200">
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 font-poppins text-center">
              How to Request a Refund
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Contact Us</h3>
                <p className="text-gray-600 text-sm">Email us or use WhatsApp to initiate your refund request</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Provide Details</h3>
                <p className="text-gray-600 text-sm">Share your enrollment details and reason for refund request</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Review Process</h3>
                <p className="text-gray-600 text-sm">Our team reviews your request and determines eligibility</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Processing</h3>
                <p className="text-gray-600 text-sm">Approved refunds are processed to your original payment method</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Email Request</h3>
                <div className="text-gray-600 font-semibold">BrainlyBeesGlobal@gmail.com</div>
                <p className="text-gray-500 text-sm mt-2">Include: Student name, enrollment ID, refund reason</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">WhatsApp Support</h3>
                <div className="text-gray-600 font-semibold">+91 8979245215</div>
                <p className="text-gray-500 text-sm mt-2">Quick response for urgent refund requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Solutions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
              Alternatives to Refunds
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Before requesting a refund, consider these alternative solutions that may better meet your needs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Program Transfer</h3>
                <p className="text-gray-600 text-sm">Switch to a different program that better fits your needs</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">⏸️</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Temporary Pause</h3>
                <p className="text-gray-600 text-sm">Pause your program temporarily due to personal circumstances</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Schedule Adjustment</h3>
                <p className="text-gray-600 text-sm">Modify session times or frequency to better suit your schedule</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <p className="text-blue-800 font-semibold text-center">
                Our customer success team is always ready to work with you to find solutions that support your child&apos;s learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
