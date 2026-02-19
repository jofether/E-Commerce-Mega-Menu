import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-5">LUXE.</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium fashion for the modern lifestyle. We curate the finest collections from around the world.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition">Men's Collection</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Women's Collection</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Kids</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><a href="#" className="hover:text-yellow-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Returns</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* Newsletter */}
          <div className="mb-8 max-w-md">
            <h4 className="font-bold mb-4">Subscribe to Our Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none"
              />
              <button className="bg-yellow-400 text-gray-900 px-6 py-2 font-bold rounded-r hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">f</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">𝕏</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">ig</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-xl">in</a>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} LUXE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
