import React, { useState } from 'react';

export default function SearchPanel({ isOpen, onClose, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setSearchQuery('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-16 right-0 z-40 w-96 bg-white shadow-2xl p-8 border-l-4 border-yellow-400">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Search Products</h3>
          <p className="text-sm text-gray-500">Find exactly what you're looking for</p>
        </div>

        <input
          type="text"
          placeholder="Try 'summer jackets' or 'leather bags'..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 transition bg-white text-white"
        />
        {/* [BUG - COLOR & CONTRAST] White text (text-white) on white background (bg-white) makes input text invisible */}
        {/* [FIX] Change text-white to text-gray-900 or remove the text-white class */}

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg hover:bg-yellow-500 transition font-bold uppercase tracking-wide"
          >
            Search
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            Close
          </button>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-gray-500 mb-3 font-semibold">TRENDING SEARCHES</p>
          <div className="flex flex-wrap gap-2">
            {['Summer Sale', 'Leather Jackets', 'Sneakers', 'Watches'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setSearchQuery(term);
                  onSearch(term);
                  onClose();
                }}
                className="text-xs bg-gray-100 hover:bg-yellow-100 text-gray-700 px-3 py-1 rounded-full transition"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
