import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, products } = useProducts();
  const { addToCart, getItemQuantity } = useCart();
  
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const discountedPrice = (product.price - (product.price * product.discount / 100)).toFixed(2);
  const inCart = getItemQuantity(product.id) > 0;
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-orange-600 hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/" className="text-orange-600 hover:underline">Shop</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="card mb-4 overflow-hidden">
              <div className="aspect-square bg-gray-200">
               
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
               
              </div>
            </div>
            
            {product.discount > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 font-semibold">
                  🎉 Save ${(product.price * product.discount / 100).toFixed(2)} with {product.discount}% off!
                </p>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block text-sm text-orange-600 font-medium mb-2">
              {product.category}
            </span>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
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
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-orange-600">
                  ${discountedPrice}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ${product.price}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </p>
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="mb-6">
                <label className="block font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-20 text-center input-field"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  product.stock === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : inCart
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-orange-600 text-white hover:bg-orange-700'
                }`}
              >
                {product.stock === 0 ? 'Out of Stock' : inCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              
              {product.stock > 0 && (
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-3 rounded-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  Buy Now
                </button>
              )}
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-gray-600">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">↩️</span>
                <div>
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-gray-600">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-medium">Quality Guaranteed</p>
                  <p className="text-gray-600">100% authentic products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="card hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {relatedProduct.discount > 0 && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{relatedProduct.discount}%
                      </span>
                    )}
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-600 font-bold">
                        ${(relatedProduct.price - (relatedProduct.price * relatedProduct.discount / 100)).toFixed(2)}
                      </span>
                      {relatedProduct.discount > 0 && (
                        <span className="text-gray-400 line-through text-sm">
                          ${relatedProduct.price}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
