import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 text-gray-800 py-16 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-xl font-poppins">B</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 font-poppins">BrainlyBees</div>
                <div className="text-sm text-orange-600 font-nunito">Smart Learning for Kids</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 font-nunito">
              Empowering young minds through personalized online and offline learning experiences. Building confidence, knowledge, and skills for tomorrow&apos;s leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.198 14.895 3.708 13.744 3.708 12.447c0-1.297.49-2.448 1.413-3.328.924-.879 2.031-1.319 3.328-1.319 1.297 0 2.448.44 3.328 1.319.879.88 1.319 2.031 1.319 3.328 0 1.297-.44 2.448-1.319 3.244-.88.924-2.031 1.413-3.328 1.413zm7.598-9.62c-.542 0-.969-.427-.969-.969 0-.542.427-.969.969-.969.542 0 .969.427.969.969 0 .542-.427.969-.969.969z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800 font-poppins">Pages</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Home</Link>
              <Link href="/online-programs" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Online Programs</Link>
              <Link href="/offline-programs" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Offline Programs</Link>
              <Link href="/special-needs" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Special Needs</Link>
              <Link href="/our-vision" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Our Vision</Link>
              <Link href="/careers" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Careers</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800 font-poppins">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Help Center</a>
              <a href="#" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">FAQ</a>
              <a href="#" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Contact Us</a>
              <a href="#" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Parent Guide</a>
              <a href="#" className="block text-gray-600 hover:text-orange-600 transition-colors font-nunito">Teacher Resources</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800 font-poppins">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-nunito">WhatsApp</div>
                  <div className="text-gray-800 font-semibold font-poppins">+91 8979245215</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-nunito">Email</div>
                  <div className="text-gray-800 font-semibold font-poppins">BrainlyBeesGlobal@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-nunito">Location</div>
                  <div className="text-gray-800 font-semibold font-poppins">Serving Globally</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-500 hover:text-orange-600 text-sm transition-colors font-nunito">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-orange-600 text-sm transition-colors font-nunito">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-orange-600 text-sm transition-colors font-nunito">Cookie Policy</a>
              <a href="#" className="text-gray-500 hover:text-orange-600 text-sm transition-colors font-nunito">Refund Policy</a>
            </div>
            <div className="text-gray-500 text-sm font-nunito">
              © 2025 BrainlyBees. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
