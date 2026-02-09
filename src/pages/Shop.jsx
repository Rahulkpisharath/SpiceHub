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
      <div className="bg-gradient-to-r text-white py-12 px-4 sm:py-16 md:py-20 sample-bg">
        <div className="max-w-7xl mx-auto">
          {/*Floating items*/}
            <div className="art-board">
   
    
<div className='title'>  <h1 className="h1 uppercase text-sm/6 text-white text-7xl"> Premium Spices & Herbs</h1>
    {/* <p className="text-lg sm:text-xl 0">
            Discover authentic flavors from around the world. Fresh, organic, and delivered to your door.
          </p> */}
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">Explore Collection</button>
          </div>
  
    <div className="asset asset2"><img src="https://static.vecteezy.com/system/resources/thumbnails/055/848/128/small/a-fresh-turmeric-root-with-a-bright-orange-interior-and-a-rough-brown-skin-t-png.png" alt="turmeric"/></div>
    <div className="asset asset3"><img src="https://static.vecteezy.com/system/resources/thumbnails/055/848/163/small/a-fresh-ginger-root-with-a-knobby-tan-surface-and-a-textured-appearance-png.png" alt="elachi"/></div>
    <div className="asset asset8"><img src="https://static.vecteezy.com/system/resources/thumbnails/042/125/153/small/cinnamon-in-closeup-isolated-on-transparent-background-with-clipping-path-3d-render-free-png.png" alt="cinnamon"/></div>
    <div className="asset asset5"><img src="https://static.vecteezy.com/system/resources/thumbnails/051/803/245/small/clove-with-green-leaf-on-transparent-background-free-png.png" alt="clove"/></div>
    <div className="asset asset6"><img src="https://static.vecteezy.com/system/resources/thumbnails/072/105/719/small/a-single-green-cardamom-pod-with-prominent-vertical-ridges-and-a-small-stem-isolated-on-transparent-background-free-png.png" alt="Cardoman"/></div>
    {/* <div className="asset asset7"><img src="https://static.vecteezy.com/system/resources/thumbnails/025/252/266/small/spicy-red-chilli-fresh-produce-ai-generative-png.png" alt=""/></div> */}
     
     
  </div>
        
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
                  {/* {product.discount > 0 && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </span>
                  )} */}
                </div>
                <div className="p-3 sm:p-4 themed-box">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2 text-center text-white">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    {/* <span className="text-orange-600 font-bold text-base sm:text-lg">
                      ${calculateDiscountedPrice(product.price, product.discount)}
                    </span> */}
                    {/* {product.discount > 0 && (
                      <span className="text-gray-400 line-through text-xs sm:text-sm">
                        ${product.price}
                      </span>
                    )} */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

  
    </div>
  );
};

export default Shop;
