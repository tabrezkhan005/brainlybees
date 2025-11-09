import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you create an account or use our services, we may collect personal information such as names, email addresses, phone numbers, and educational background.",
        "Student Information: We collect information about students including age, learning preferences, progress data, and educational assessments to provide personalized learning experiences.",
        "Technical Information: We automatically collect certain technical information when you use our platform, including IP addresses, browser type, device information, and usage patterns.",
        "Communication Data: We store communications between parents, students, teachers, and our support team to ensure quality service and resolve any issues."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Educational Services: To provide personalized learning experiences, track student progress, and deliver our educational programs effectively.",
        "Communication: To communicate with parents, students, and teachers about programs, schedules, progress updates, and important notifications.",
        "Platform Improvement: To analyze usage patterns and improve our platform's functionality, user experience, and educational effectiveness.",
        "Safety and Security: To protect the safety of our users, prevent fraud, and maintain the security of our platform.",
        "Legal Compliance: To comply with applicable laws, regulations, and legal processes."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
        "We may share information with trusted service providers who help us operate our platform, subject to strict confidentiality agreements.",
        "We may disclose information when required by law or to protect the safety and rights of our users and the public.",
        "In the event of a business transaction, personal information may be transferred as part of the assets, with continued protection under this policy."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures including encryption, secure servers, and access controls to protect your information.",
        "We regularly review and update our security practices to address new threats and vulnerabilities.",
        "We limit access to personal information to authorized personnel who need it to perform their job functions.",
        "We maintain backup systems and disaster recovery procedures to ensure data availability and integrity."
      ]
    },
    {
      title: "Children's Privacy (COPPA Compliance)",
      content: [
        "We take special care to protect the privacy of children under 13 in compliance with the Children's Online Privacy Protection Act (COPPA).",
        "We only collect personal information from children with verified parental consent.",
        "Parents have the right to review, modify, or delete their child's personal information at any time.",
        "We do not require children to disclose more information than is necessary to participate in our educational programs.",
        "We do not share children's personal information with third parties except as necessary to provide our educational services."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Access: You have the right to access and review the personal information we have about you or your child.",
        "Correction: You can request corrections to inaccurate or incomplete information.",
        "Deletion: You can request deletion of personal information, subject to certain legal and operational requirements.",
        "Portability: You can request a copy of your personal information in a commonly used format.",
        "Withdrawal of Consent: You can withdraw consent for certain uses of your information, though this may limit our ability to provide services."
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar technologies to enhance user experience, remember preferences, and analyze platform usage.",
        "Essential cookies are necessary for platform functionality and cannot be disabled.",
        "Analytics cookies help us understand how users interact with our platform to improve services.",
        "You can control cookie settings through your browser preferences, though this may affect platform functionality."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "As we serve students globally, your information may be transferred to and processed in countries other than your residence.",
        "We ensure appropriate safeguards are in place when transferring personal information internationally.",
        "We comply with applicable data protection laws regarding international transfers."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal information only as long as necessary to provide our services and comply with legal obligations.",
        "Student educational records are retained according to educational record retention requirements.",
        "When information is no longer needed, we securely delete or anonymize it.",
        "Some information may be retained longer if required by law or for legitimate business purposes."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws.",
        "We will notify users of material changes through email, platform notifications, or website announcements.",
        "Continued use of our services after policy changes indicates acceptance of the updated terms.",
        "We encourage users to review this policy regularly to stay informed about our privacy practices."
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
            <span className="text-gray-700 font-bold text-sm">Legal Information</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-poppins mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            How we collect, use, and protect your personal information
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Introduction</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                KidCube Global (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security of our users&apos; personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational platform and services.
              </p>
              <p className="mb-4">
                This policy applies to all users of our platform, including students, parents, guardians, teachers, and visitors to our website. By using our services, you consent to the practices described in this Privacy Policy.
              </p>
              <p>
                We are especially committed to protecting the privacy of children and comply with all applicable laws regarding the collection and use of information from minors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
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

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border-2 border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
              Questions About This Policy?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">Email Us</h3>
                <div className="text-gray-600 font-semibold">kidcubeglobal@gmail.com</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">WhatsApp</h3>
                <div className="text-gray-600 font-semibold">+91 98379 98535</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <p className="text-blue-800 font-semibold">
                We are committed to addressing your privacy concerns promptly and will respond to all inquiries within 5 business days.
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
