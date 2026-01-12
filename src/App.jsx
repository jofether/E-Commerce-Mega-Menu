import React, { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuItems = {
    apparel: ['New Arrivals', 'T-Shirts & Polos', 'Jackets & Coats', 'Denim'],
    shoes: ['Sneakers', 'Boots', 'Formal', 'Sandals'],
    accessories: ['Watches', 'Bags', 'Sunglasses', 'Belts']
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
    alert(`${item} added to cart!`);
  };

  const handleRemoveFromCart = (index) => {
    const removedItem = cartItems[index];
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    setCartCount(cartCount - 1);
    alert(`${removedItem} removed from cart!`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
    alert(`You selected: ${category}`);
  };

  const handleShopNow = () => {
    alert('Redirecting to shop...');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* NAVIGATION BAR */}
      <nav className="relative bg-gray-900 text-white z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl tracking-wider">LUXE.</span>
            
            <div className="hidden md:flex space-x-8 h-full">
              {/* MENU ITEM 1 (Has Mega Menu) */}
              <div className="group inline-flex items-center h-full cursor-pointer border-b-2 border-transparent hover:border-white transition">
                <span className="font-medium">Men's Collection</span>
                
                {/* MEGA MENU DROPDOWN */}
                {/* FUTURE BUG: Remove 'absolute' -> The menu will insert itself into the flow, pushing the hero image down */}
                <div className="absolute top-16 left-0 w-full bg-white text-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border-t border-gray-100">
                  <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Apparel</h4>
                      <ul className="space-y-2 text-sm text-gray-500">
                        {menuItems.apparel.map((item, idx) => (
                          <li 
                            key={idx}
                            onClick={() => handleAddToCart(item)}
                            className="hover:text-black cursor-pointer hover:font-semibold transition"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Shoes</h4>
                      <ul className="space-y-2 text-sm text-gray-500">
                        {menuItems.shoes.map((item, idx) => (
                          <li 
                            key={idx}
                            onClick={() => handleAddToCart(item)}
                            className="hover:text-black cursor-pointer hover:font-semibold transition"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Accessories</h4>
                      <ul className="space-y-2 text-sm text-gray-500">
                        {menuItems.accessories.map((item, idx) => (
                          <li 
                            key={idx}
                            onClick={() => handleAddToCart(item)}
                            className="hover:text-black cursor-pointer hover:font-semibold transition"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Featured Image inside Menu */}
                    <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                       <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white font-bold opacity-50">SALE</div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="inline-flex items-center h-full cursor-pointer border-b-2 border-transparent hover:border-white transition">
                <span className="font-medium">Women</span>
              </div>
              <div className="inline-flex items-center h-full cursor-pointer border-b-2 border-transparent hover:border-white transition">
                <span className="font-medium">Kids</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="px-4 py-2 hover:bg-gray-700 rounded transition"
              >
                Search
              </button>
              <button 
                onClick={() => setShowCart(!showCart)}
                className="px-4 py-2 hover:bg-gray-700 rounded transition relative"
              >
                Cart ({cartCount})
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SEARCH PANEL */}
      {showSearch && (
        <div className="absolute top-16 right-0 z-40 w-80 bg-white shadow-lg p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Search Products</h3>
            <input
              type="text"
              placeholder="Enter product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-semibold"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setShowSearch(false)}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
            >
              Close
            </button>
          </form>
        </div>
      )}

      {/* CART PANEL */}
      {showCart && (
        <div className="absolute top-16 right-0 z-40 w-96 bg-white shadow-lg p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Shopping Cart</h3>
            
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <ul className="space-y-3 border-b pb-4">
                  {cartItems.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-gray-800">{item}</span>
                      <button
                        onClick={() => handleRemoveFromCart(idx)}
                        className="text-red-500 text-sm font-semibold hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="text-right text-lg font-bold text-gray-900">
                  Total Items: {cartCount}
                </div>
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-semibold">
                  Checkout
                </button>
              </>
            )}
            
            <button
              onClick={() => setShowCart(false)}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <header className="relative bg-gray-100 h-[600px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-black text-gray-900 mb-4">SUMMER 2026</h1>
          <p className="text-xl text-gray-500 mb-8">Minimalist styles for the modern era.</p>
          <button 
            onClick={handleShopNow}
            className="bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition"
          >
            Shop Now
          </button>
        </div>
      </header>

    </div>
  );
}

export default App;