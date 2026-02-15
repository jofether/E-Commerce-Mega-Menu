import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchPanel from './components/SearchPanel';
import CartPanel from './components/CartPanel';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { PRODUCTS, TESTIMONIALS } from './constants';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
    setCartCount(cartCount - 1);
  };

  const handleSearch = (query) => {
    alert(`Searching for: ${query}`);
  };

  const handleShopNow = () => {
    alert('Welcome to our store! Browse our collections.');
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Navigation */}
      <Navbar 
        cartCount={cartCount}
        onCartClick={() => setShowCart(!showCart)}
        showCart={showCart}
        onSearchClick={() => setShowSearch(!showSearch)}
        showSearch={showSearch}
      />

      {/* Modals */}
      <SearchPanel 
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        onSearch={handleSearch}
      />
      
      <CartPanel 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        cartCount={cartCount}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Hero Section */}
      <Hero onShopNow={handleShopNow} />

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-2">— Featured —</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">New Arrivals</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our latest collection of premium fashion pieces curated for the modern lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
                isNew={product.isNew}
                onAddToCart={() => handleAddToCart(product.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <p className="text-4xl mb-4">🚚</p>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100 worldwide</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-4">↩️</p>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-4">🛡️</p>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">SSL encrypted transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-2">— Customer Love —</p>
            <h2 className="text-4xl font-black text-gray-900">What People Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.message}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Get Exclusive Offers</h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to our newsletter and get 20% off your first purchase. Plus, early access to new collections and exclusive events.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none text-gray-900"
            />
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 font-bold rounded-lg hover:bg-yellow-500 transition uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;