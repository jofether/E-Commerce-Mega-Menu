import React from 'react';
import MegaMenu from './MegaMenu';

export default function Navbar({ cartCount, onCartClick, showCart, onSearchClick, showSearch }) {
  return (
    <nav className="relative bg-gray-900 text-white z-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex-col items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-black text-2xl tracking-wider">LUXE.</span>
            <span className="text-xs text-gray-400">Est. 2026</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 h-full">
            <MegaMenu />
            <div className="inline-flex items-center h-full cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition px-4 font-medium">
              Women
            </div>
            <div className="inline-flex items-center h-full cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition px-4 font-medium">
              Kids
            </div>
            <div className="inline-flex items-center h-full cursor-pointer border-b-2 border-transparent hover:border-yellow-400 transition px-4 font-medium">
              Sale
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex space-x-4 items-center">
            <button 
              onClick={onSearchClick}
              className="px-4 py-2 hover:bg-gray-700 rounded transition text-sm font-medium"
            >
              🔍 Search
            </button>
            <button 
              onClick={onCartClick}
              className="px-4 py-2 hover:bg-gray-700 rounded transition relative font-medium flex items-center gap-2"
            >
              🛒 Cart
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
