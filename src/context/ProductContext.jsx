import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialProducts } from '../data/dummyProducts';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('spice-products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    localStorage.setItem('spice-products', JSON.stringify(products));
  }, [products]);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price - (a.price * a.discount / 100)) - (b.price - (b.price * b.discount / 100));
        case 'price-high':
          return (b.price - (b.price * b.discount / 100)) - (a.price - (a.price * a.discount / 100));
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'featured':
        default:
          return b.featured - a.featured;
      }
    });

  const updateProduct = (id, updates) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, ...updates } : product
      )
    );
  };

  const addProduct = (newProduct) => {
    const id = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts(prev => [...prev, { ...newProduct, id }]);
  };

  const deleteProduct = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  const getFeaturedProducts = () => {
    return products.filter(product => product.featured).slice(0, 4);
  };

  const value = {
    products,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    updateProduct,
    addProduct,
    deleteProduct,
    getProductById,
    getFeaturedProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
