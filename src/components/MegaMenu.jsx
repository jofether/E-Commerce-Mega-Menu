import React, { useState } from 'react';
import { MEGA_MENU_DATA } from '../constants';

export default function MegaMenu() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div 
      className="group inline-flex items-center h-full cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition px-4"
      onMouseEnter={() => setHoveredCategory('mens')}
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <span className="font-medium">Men's Collection</span>
      
      {/* MEGA MENU DROPDOWN */}
      <div className="absolute top-16 left-0 w-full bg-white text-gray-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto p-10 grid grid-cols-5 gap-10">
          
          {/* Apparel Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 uppercase text-xs tracking-widest border-b-2 border-yellow-400 pb-2">
              Apparel
            </h4>
            <ul className="space-y-3">
              {MEGA_MENU_DATA.apparel.map((item, idx) => (
                <li 
                  key={idx}
                  className="text-sm text-gray-600 hover:text-black hover:font-semibold cursor-pointer transition duration-200 transform hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Shoes Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 uppercase text-xs tracking-widest border-b-2 border-yellow-400 pb-2">
              Shoes
            </h4>
            <ul className="space-y-3">
              {MEGA_MENU_DATA.shoes.map((item, idx) => (
                <li 
                  key={idx}
                  className="text-sm text-gray-600 hover:text-black hover:font-semibold cursor-pointer transition duration-200 transform hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Accessories Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5 uppercase text-xs tracking-widest border-b-2 border-yellow-400 pb-2">
              Accessories
            </h4>
            <ul className="space-y-3">
              {MEGA_MENU_DATA.accessories.map((item, idx) => (
                <li 
                  key={idx}
                  className="text-sm text-gray-600 hover:text-black hover:font-semibold cursor-pointer transition duration-200 transform hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Content Column 1 */}
          <div className="col-span-2">
            <div className="space-y-4">
              {/* Feature Item 1 */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <span className="inline-block bg-yellow-400 text-gray-900 font-bold text-xs px-3 py-1 rounded-full mb-3">
                  TRENDING
                </span>
                <h5 className="text-lg font-bold text-gray-900 mb-2">Summer Collection</h5>
                <p className="text-sm text-gray-600">New arrivals updated daily</p>
              </div>

              {/* Feature Item 2 */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 hover:shadow-lg transition">
                <span className="inline-block bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full mb-3">
                  SALE
                </span>
                <h5 className="text-lg font-bold text-gray-900 mb-2">Up to 50% OFF</h5>
                <p className="text-sm text-gray-600">Limited time offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
