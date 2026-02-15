import React from 'react';

export default function Hero({ onShopNow }) {
  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[600px] flex items-center justify-center overflow-hidden -mb-40">
      {/* [BUG - SPACING] Added -mb-40 (negative margin-bottom) causing massive overlap with next section */}
      {/* [FIX] Remove -mb-40 from className */}
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <p className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-4">— New Collection —</p>
        <h1 className="text-7xl font-black text-white mb-6 leading-tight">
          SUMMER <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">2026</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 font-light">
          Minimalist styles for the modern era. Explore our curated collection of premium fashion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onShopNow}
            className="bg-yellow-400 text-gray-900 px-10 py-4 font-bold hover:bg-yellow-500 transition uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Shop Now
          </button>
          <button 
            className="bg-transparent text-white border-2 border-white px-10 py-4 font-bold hover:bg-white hover:text-gray-900 transition uppercase tracking-wider"
          >
            View Catalog
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">✓ Free Shipping  ✓ Easy Returns  ✓ Premium Quality</p>
        </div>
      </div>
    </header>
  );
}
