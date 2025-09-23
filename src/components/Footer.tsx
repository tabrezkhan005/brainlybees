export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mr-3 transform rotate-12">
                <div className="w-6 h-6 bg-white rounded-sm transform -rotate-12"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">BRAINLYBEES</div>
                <div className="text-xs text-gray-500 -mt-1">Think. Learn. Lead.</div>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">CONTACT US</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  <div>
                    <div className="text-green-500 font-semibold">WhatsApp</div>
                    <div className="text-gray-600">+919305454447</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div>
                    <div className="text-red-500 font-semibold">Email</div>
                    <div className="text-gray-600">admin@brainlybees.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">QUICK LINKS</h4>
            <div className="grid grid-cols-2 gap-y-3">
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Online Programs</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Careers</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Offline Programs</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Online School</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Terms and Conditions</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Our Vision</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Cancellation & Fee Refund Policy</a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Special Needs Education</a>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="lg:text-right">
            <div className="flex justify-center lg:justify-end space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.198 14.895 3.708 13.744 3.708 12.447c0-1.297.49-2.448 1.413-3.328.924-.879 2.031-1.319 3.328-1.319 1.297 0 2.448.44 3.328 1.319.879.88 1.319 2.031 1.319 3.328 0 1.297-.44 2.448-1.319 3.244-.88.924-2.031 1.413-3.328 1.413zm7.598-9.62c-.542 0-.969-.427-.969-.969 0-.542.427-.969.969-.969.542 0 .969.427.969.969 0 .542-.427.969-.969.969z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-600 text-sm">©2025 BRAINLYBEES. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}