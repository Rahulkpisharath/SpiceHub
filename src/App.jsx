import React, { useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation, // Get current location/path
  useNavigate, // Navigate programmatically
  useParams, // Get route parameters
} from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider, useCart } from "./context/CartContext";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import Appfooter from "./shared/footer";
import Testimonials from "./pages/Testimonials";
import HappyCustomers from "./pages/HappyCustomer";
import WhyChooseUs from "./pages/WhyChooseUs";
import FormModal from "./shared/FormModal";
import Faq from "./pages/Faq";

const Navigation = () => {
  const { cartItems, isCartOpen, setIsCartOpen, getCartCount, getCartTotal } =
    useCart();
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
              <span className="text-xl font-bold text-orange-600">
                SpiceHub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive("/")
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Shop
              </Link>
              <Link
                to="/admin"
                className={`hidden font-medium transition-colors ${
                  isActive("/admin")
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
                  isActive("/")
                    ? "bg-orange-50 text-orange-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Shop
              </Link>
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg ${
                  isActive("/admin")
                    ? "bg-orange-50 text-orange-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
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
                    {cartItems.map((item) => {
                      const discountedPrice = (
                        item.price -
                        (item.price * item.discount) / 100
                      ).toFixed(2);
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
                      <span className="text-orange-600">
                        ${getCartTotal().toFixed(2)}
                      </span>
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
const AppWhyChooseUs = () => {
  return <WhyChooseUs />;
};

const AppHappyCustomer = () => {
  return <HappyCustomers />;
};
const AppFooter = () => {
  return <Appfooter />;
};


const AppFaq = () => {
  return <Faq />;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => {
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
  };
  return (
    <HashRouter>
      <ProductProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
           
            <Navigation />
            <Routes>
              
              <Route path="/" element={<Shop />} />
              {/* <Route path="/product/:id" element={<ProductPage />} /> */}
              {/* <Route path="/cart" element={<CartPage />} />
              <Route path="/admin" element={<AdminPage />} /> */}
            </Routes>
         
            <WhyChooseUs onOpenForm={handleOpenForm} />
            <AppHappyCustomer />
            <AppFaq />
            <Testimonials />
            <AppFooter />

            <a
              href="https://wa.me/919846232948?text=Hello%20I%20need%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="chat inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {/*WhatsApp Icon*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-6 w-6 fill-current"
              >
                <path d="M19.11 17.77c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.68 1.12 2.86c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.27.23-.61.23-1.14.16-1.27-.07-.14-.25-.2-.52-.34zM16 3C9.37 3 4 8.37 4 15c0 2.65.86 5.1 2.32 7.1L5 29l7.07-1.85A11.93 11.93 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <FormModal
            isOpen={isModalOpen}
            onClose={handleCloseForm}
            title="Get Started With Us"
          />
        </CartProvider>
      </ProductProvider>
    </HashRouter>
  );
}

export default App;
