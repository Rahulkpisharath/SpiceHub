import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { CartProvider, useCart } from './context/CartContext';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import Appfooter from './shared/footer';
import Testimonials from './pages/Testimonials';

const Navigation = () => {
  const { cartItems, isCartOpen, setIsCartOpen, getCartCount, getCartTotal } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const cartCount = getCartCount();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
         <div className="marque_box">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="3"
              className="is-selected"
            >
              <span className="text-white">Test Content Goes Here!!!</span>
            </marquee>
          </div>
          <div className="bg-black">
            <span className="text-white offer_text">
              Get Extra 10% Off* on Your 1st Order | Use Code:{" "}
              <strong>WELCOME</strong>
            </span>
          </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🌶️</span>
              <span className="text-xl font-bold text-orange-600">SpiceHub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/admin"
                className={`font-medium transition-colors ${
                  isActive('/admin') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Admin
              </Link>
            </div>

            {/* Cart Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg ${
                  isActive('/') ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg ${
                  isActive('/admin') ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Admin Dashboard
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Cart ({cartCount})</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn-primary"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map(item => {
                      const discountedPrice = (item.price - (item.price * item.discount / 100)).toFixed(2);
                      return (
                        <div key={item.id} className="flex gap-3 pb-4 border-b">
                          <Link
                            to={`/product/${item.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
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
                              onClick={() => setIsCartOpen(false)}
                              className="font-medium hover:text-orange-600 line-clamp-2 mb-1"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-600 mb-2">
                              ${discountedPrice} × {item.quantity}
                            </p>
                            <p className="font-bold text-orange-600">
                              ${(discountedPrice * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold mb-4">
                      <span>Total</span>
                      <span className="text-orange-600">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <Link
                      to="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="btn-primary w-full block text-center"
                    >
                      View Cart & Checkout
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const AppFooter = () => { 
  return (
    <Appfooter/>
  )
}


function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          <Testimonials/>
          <AppFooter/>
            {/* <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
              <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🌶️</span>
                    <span className="text-xl font-bold">SpiceHub</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Your premium source for authentic spices and herbs from around the world.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Shop</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link to="/" className="hover:text-white">All Products</Link></li>
                    <li><a href="#" className="hover:text-white">Best Sellers</a></li>
                    <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-white">Sale</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Customer Service</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                    <li><a href="#" className="hover:text-white">Returns</a></li>
                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">Instagram</a></li>
                    <li><a href="#" className="hover:text-white">Facebook</a></li>
                    <li><a href="#" className="hover:text-white">Twitter</a></li>
                    <li><a href="#" className="hover:text-white">Pinterest</a></li>
                  </ul>
                </div>
              </div>

              <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                <p>© 2026 SpiceHub. All rights reserved.</p>
              </div>
            </footer> */}
          </div>
        </CartProvider>
      </ProductProvider>
    </Router>

            
  );
}

export default App;
