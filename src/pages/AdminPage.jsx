import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const AdminPage = () => {
  const { products, updateProduct, addProduct, deleteProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'add'

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    discount: '0',
    stock: '',
    description: '',
    image: '',
    rating: '4.5',
    reviews: '0',
    featured: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      discount: product.discount.toString(),
      stock: product.stock.toString(),
      description: product.description,
      image: product.image,
      rating: product.rating.toString(),
      reviews: product.reviews.toString(),
      featured: product.featured
    });
    setActiveTab('edit');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(editingProduct, {
      ...formData,
      price: parseFloat(formData.price),
      discount: parseFloat(formData.discount),
      stock: parseInt(formData.stock),
      rating: parseFloat(formData.rating),
      reviews: parseInt(formData.reviews)
    });
    setEditingProduct(null);
    setActiveTab('list');
    resetForm();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct({
      ...formData,
      price: parseFloat(formData.price),
      discount: parseFloat(formData.discount),
      stock: parseInt(formData.stock),
      rating: parseFloat(formData.rating),
      reviews: parseInt(formData.reviews)
    });
    setShowAddForm(false);
    setActiveTab('list');
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: '',
      price: '',
      discount: '0',
      stock: '',
      description: '',
      image: '',
      rating: '4.5',
      reviews: '0',
      featured: false
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const handleQuickUpdate = (id, field, value) => {
    updateProduct(id, { [field]: value });
  };

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-purple-100">Manage your spice inventory and pricing</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => {
              setActiveTab('list');
              setEditingProduct(null);
              setShowAddForm(false);
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'list'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Product List ({products.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('add');
              setShowAddForm(true);
              setEditingProduct(null);
              resetForm();
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'add' || activeTab === 'edit'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {activeTab === 'edit' ? 'Edit Product' : 'Add New Product'}
          </button>
        </div>

        {/* Product List */}
        {activeTab === 'list' && (
          <div className="card overflow-hidden">
            {/* Desktop View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-500">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          step="0.01"
                          value={product.price}
                          onChange={(e) => handleQuickUpdate(product.id, 'price', parseFloat(e.target.value))}
                          className="w-24 px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          value={product.discount}
                          onChange={(e) => handleQuickUpdate(product.id, 'discount', parseFloat(e.target.value))}
                          className="w-20 px-2 py-1 border rounded"
                        />
                        <span className="ml-1">%</span>
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          value={product.stock}
                          onChange={(e) => handleQuickUpdate(product.id, 'stock', parseInt(e.target.value))}
                          className="w-20 px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={product.featured}
                          onChange={(e) => handleQuickUpdate(product.id, 'featured', e.target.checked)}
                          className="w-5 h-5 text-purple-600 rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden divide-y">
              {products.map(product => (
                <div key={product.id} className="p-4">
                  <div className="flex gap-3 mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{product.name}</h3>
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div>
                      <label className="text-gray-600 block mb-1">Price</label>
                      <input
                        type="number"
                        step="0.01"
                        value={product.price}
                        onChange={(e) => handleQuickUpdate(product.id, 'price', parseFloat(e.target.value))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 block mb-1">Discount %</label>
                      <input
                        type="number"
                        value={product.discount}
                        onChange={(e) => handleQuickUpdate(product.id, 'discount', parseFloat(e.target.value))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 block mb-1">Stock</label>
                      <input
                        type="number"
                        value={product.stock}
                        onChange={(e) => handleQuickUpdate(product.id, 'stock', parseInt(e.target.value))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 block mb-1">Featured</label>
                      <input
                        type="checkbox"
                        checked={product.featured}
                        onChange={(e) => handleQuickUpdate(product.id, 'featured', e.target.checked)}
                        className="w-6 h-6 text-purple-600 rounded mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium"
                    >
                      Edit Details
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="flex-1 px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add/Edit Form */}
        {(activeTab === 'add' || activeTab === 'edit') && (
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-6">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>

            <form onSubmit={editingProduct ? handleUpdate : handleAdd} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Product Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Organic Turmeric Powder"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category *</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Powder, Seeds, Blend, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Price ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="12.99"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Discount (%) *</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Stock Quantity *</label>
                  <input
                    type="number"
                    min="0"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Rating (1-5) *</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="4.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Reviews Count *</label>
                  <input
                    type="number"
                    min="0"
                    name="reviews"
                    value={formData.reviews}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="124"
                  />
                </div>

                <div className="flex items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-purple-600 rounded"
                    />
                    <span className="font-medium">Featured Product</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Image URL *</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="input-field"
                  placeholder="Premium quality organic spice..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('list');
                    setEditingProduct(null);
                    setShowAddForm(false);
                    resetForm();
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
