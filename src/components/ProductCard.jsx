import React from 'react';

export default function ProductCard({ image, title, price, category, onAddToCart, isNew }) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 p-64">
      {/* Image Container */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-99 font-bold text-2xl">
          {image}
        </div>

        {/* Badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 font-bold text-xs px-3 py-1 rounded-full">
            NEW
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={onAddToCart}
            className="bg-yellow-400 text-gray-900 px-6 py-2 font-bold rounded-lg transform scale-75 group-hover:scale-100 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{category}</p>
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
