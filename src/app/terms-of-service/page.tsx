import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using KidCube Global educational platform and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        "If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
        "These terms apply to all users of the platform, including students, parents, guardians, teachers, and visitors.",
        "For users under 18, a parent or legal guardian must agree to these terms on behalf of the minor."
      ]
    },
    {
      title: "Description of Services",
      content: [
        "KidCube Global provides online and offline educational services including interactive learning programs, personalized tutoring, worksheets, and educational resources.",
        "Our services are designed to support students' academic growth through innovative teaching methods and technology-enhanced learning experiences.",
        "We offer various program options including individual and group sessions, different subject areas, and age-appropriate content.",
        "Service availability may vary by location and is subject to instructor availability and program capacity."
      ]
    },
    {
      title: "User Accounts and Registration",
      content: [
        "To access certain features, you must create an account providing accurate and complete information.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
        "You must notify us immediately of any unauthorized use of your account or any security breaches.",
        "We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.",
        "One account per family is sufficient to manage multiple students' enrollments and progress."
      ]
    },
    {
      title: "Payment Terms and Billing",
      content: [
        "Payment is required in advance for all programs and services as specified in your enrollment agreement.",
        "We accept various payment methods including online payments, bank transfers, and installment plans where available.",
        "All fees are in Indian Rupees (₹) unless otherwise specified, and prices are subject to change with notice.",
        "Late payment may result in suspension of services until payment is brought current.",
        "Refunds are governed by our separate Refund Policy, which forms part of these terms."
      ]
    },
    {
      title: "User Conduct and Responsibilities",
      content: [
        "You agree to use our services only for lawful educational purposes and in accordance with these terms.",
        "You will not share account credentials, attempt to access unauthorized areas, or interfere with platform security.",
        "Students are expected to participate actively, complete assignments, and treat instructors and peers with respect.",
        "Parents are responsible for supervising their children's use of the platform and ensuring compliance with these terms.",
        "Any abusive, disruptive, or inappropriate behavior may result in immediate termination of services."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content on our platform, including courses, materials, software, and designs, is protected by intellectual property laws.",
        "You are granted a limited, non-exclusive license to access and use our educational content for personal learning purposes only.",
        "You may not copy, distribute, modify, or create derivative works from our proprietary content without written permission.",
        "Student work and progress data remains the property of the student and family, while aggregated learning analytics may be used for service improvement.",
        "Any user-generated content shared on our platform may be used by us for educational and promotional purposes with appropriate attribution."
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: [
        "Your privacy is important to us, and our collection and use of personal information is governed by our Privacy Policy.",
        "We implement appropriate security measures to protect your personal and educational data.",
        "Student educational records are maintained in compliance with applicable educational privacy laws.",
        "We do not sell personal information to third parties and limit sharing to necessary service providers and legal requirements.",
        "You have rights to access, correct, and request deletion of your personal information as described in our Privacy Policy."
      ]
    },
    {
      title: "Service Availability and Modifications",
      content: [
        "We strive to maintain continuous service availability but cannot guarantee uninterrupted access due to technical issues or maintenance.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice.",
        "We may update our platform, features, and content to improve educational effectiveness and user experience.",
        "Scheduled maintenance and updates will be communicated in advance when possible.",
        "In case of extended service disruptions, we will provide appropriate compensation or make-up sessions."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for services in the 12 months preceding any claim.",
        "We are not liable for indirect, incidental, or consequential damages arising from use of our services.",
        "While we strive for educational excellence, we cannot guarantee specific academic outcomes or results.",
        "We are not responsible for technical issues beyond our control, including internet connectivity problems or device malfunctions.",
        "Our educational services supplement but do not replace formal schooling or professional educational guidance."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate services with appropriate notice as specified in the enrollment agreement.",
        "We may immediately terminate services for violation of these terms, non-payment, or inappropriate conduct.",
        "Upon termination, you will lose access to our platform and educational content, though student progress records will be retained.",
        "Termination does not relieve you of payment obligations for services already provided.",
        "We will provide reasonable assistance in transitioning educational records upon proper termination."
      ]
    },
    {
      title: "Dispute Resolution",
      content: [
        "We encourage resolution of disputes through direct communication with our customer service team.",
        "Any legal disputes will be governed by Indian law and subject to the jurisdiction of Indian courts.",
        "Before pursuing legal action, parties agree to attempt good faith negotiation and mediation.",
        "Class action lawsuits are waived, and disputes must be resolved individually.",
        "These terms will survive termination of services for dispute resolution purposes."
      ]
    },
    {
      title: "Changes to Terms",
      content: [
        "We may update these Terms of Service periodically to reflect changes in our services or legal requirements.",
        "Material changes will be communicated through email, platform notifications, or website announcements.",
        "Continued use of our services after changes indicates acceptance of the updated terms.",
        "If you do not agree to changes, you may terminate your account and discontinue use of our services.",
        "We encourage regular review of these terms to stay informed about your rights and obligations."
      ]
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
            <span className="text-gray-700 font-bold text-sm">Legal Agreement</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Terms of Service
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Legal terms and conditions for using our educational platform
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Important Legal Notice</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and KidCube Global regarding your use of our educational platform, services, and content.
              </p>
              <p className="mb-4">
                Please read these Terms carefully before using our services. By creating an account, enrolling in programs, or using our platform in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <p className="mb-4 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
                <strong className="text-yellow-800">Important:</strong> If you are under 18 years of age, a parent or legal guardian must review and agree to these Terms on your behalf before you can use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
                {index + 1}. {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agreement Confirmation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-2 border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
              Agreement and Contact
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              By using our services, you confirm that you have read, understood, and agree to these Terms of Service. If you have any questions or concerns about these terms, please contact us before using our platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Legal Inquiries</h3>
                <div className="text-gray-600 font-semibold">kidcubeglobal@gmail.com</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Support Team</h3>
                <div className="text-gray-600 font-semibold">+91 98379 98535</div>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-200">
              <p className="text-green-800 font-semibold mb-2">
                📋 These terms are effective immediately upon your first use of our services.
              </p>
              <p className="text-green-700">
                We recommend saving or printing a copy of these terms for your records.
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
