import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    getFeaturedProducts
  } = useProducts();

  const { addToCart, getItemQuantity } = useCart();
  const [showFilters, setShowFilters] = useState(false);

  const featuredProducts = getFeaturedProducts();

  const calculateDiscountedPrice = (price, discount) => {
    return (price - (price * discount / 100)).toFixed(2);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 px-4 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Premium Spices & Herbs
          </h1>
          <p className="text-lg sm:text-xl text-orange-100 max-w-2xl">
            Discover authentic flavors from around the world. Fresh, organic, and delivered to your door.
          </p>
        </div>
      </div>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="card hover:shadow-xl transition-shadow shadow-md outline outline-black/5"
              >
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                   <div className='card_animation '>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                   </div>
                  {product.discount > 0 && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-600 font-bold text-base sm:text-lg">
                      ${calculateDiscountedPrice(product.price, product.discount)}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-gray-400 line-through text-xs sm:text-sm">
                        ${product.price}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search spices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary sm:hidden"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Sort By (Desktop) */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field sm:w-48 hidden sm:block"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="sm:hidden mb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} sm:block mb-6`}>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map(product => {
            const inCart = getItemQuantity(product.id) > 0;
            
            return (
              <div key={product.id} className="card hover:shadow-xl transition-shadow">
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                   <div className='card_animation'>
                     <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                   </div>
                    {product.discount > 0 && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </Link>

                <div className="p-3 sm:p-4">
                  <Link to={`/product/${product.id}`}>
                    <span className="inline-block text-xs text-orange-600 font-medium mb-1">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-600 font-bold text-base sm:text-lg">
                        ${calculateDiscountedPrice(product.price, product.discount)}
                      </span>
                      {product.discount > 0 && (
                        <span className="text-gray-400 line-through text-xs sm:text-sm">
                          ${product.price}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product, 1)}
                    disabled={product.stock === 0}
                    className={`w-full py-2 rounded-lg font-medium transition-colors text-sm ${
                      product.stock === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : inCart
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-orange-600 text-white hover:bg-orange-700'
                    }`}
                  >
                    {product.stock === 0 ? 'Out of Stock' : inCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
