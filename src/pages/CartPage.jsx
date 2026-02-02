import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const calculateDiscountedPrice = (price, discount) => {
    return (price - (price * discount / 100)).toFixed(2);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Order placed successfully! This is a demo - no actual payment was processed.');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious spices to get started!</p>
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Shopping Cart</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="card p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  Cart Items ({cartItems.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map(item => {
                  const itemPrice = calculateDiscountedPrice(item.price, item.discount);
                  const itemTotal = (itemPrice * item.quantity).toFixed(2);

                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b last:border-b-0"
                    >
                      <Link
                        to={`/product/${item.id}`}
                        className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-lg overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </Link>

                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          className="font-semibold hover:text-orange-600 transition-colors block mb-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-orange-600 font-bold">
                            ${itemPrice}
                          </span>
                          {item.discount > 0 && (
                            <span className="text-gray-400 line-through text-sm">
                              ${item.price}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 font-bold text-sm"
                            >
                              -
                            </button>
                            <span className="w-12 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.stock}
                              className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="font-bold text-lg">${itemTotal}</p>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {item.quantity >= item.stock && (
                          <p className="text-xs text-red-600 mt-1">
                            Maximum stock reached
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link to="/" className="btn-secondary w-full sm:w-auto">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>

                {subtotal < 50 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="text-sm text-orange-800">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-orange-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="btn-primary w-full mb-4"
              >
                Proceed to Checkout
              </button>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free returns within 30 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Checkout</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    className="input-field"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Address</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="123 Main St"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Zip Code</label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="10001"
                    />
                  </div>
                </div>

                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Total Amount</span>
                    <span className="text-xl font-bold text-orange-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
