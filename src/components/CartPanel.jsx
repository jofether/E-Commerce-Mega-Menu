import React from 'react';

export default function CartPanel({ isOpen, onClose, cartItems, onRemoveItem, cartCount }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.length * 99.99;

  return (
    <div className="absolute top-16 right-0 z-40 w-96 bg-white shadow-2xl p-6 max-h-96 overflow-y-auto border-l-4 border-yellow-400">
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Shopping Cart</h3>
          <p className="text-sm text-gray-500 mt-1">{cartCount} items in cart</p>
        </div>

        {/* Cart Items or Empty State */}
        {cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-3xl mb-2">🛍️</p>
            <p className="text-gray-500 font-semibold">Your cart is empty</p>
            <p className="text-xs text-gray-400 mt-2">Start shopping to add items</p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <ul className="space-y-3 border-b pb-4">
              {cartItems.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium">{item}</span>
                    <p className="text-xs text-gray-500">$99.99</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="text-red-500 text-lg hover:text-red-700 hover:bg-red-50 rounded-full w-8 h-8 flex items-center justify-center transition"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            {/* Summary */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-yellow-600">${totalPrice.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg hover:bg-yellow-500 transition font-bold uppercase tracking-wide mt-4">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition text-sm"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
