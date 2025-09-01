import React, { useState } from 'react';
import { products } from '../products/Products'; // adjust the path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter(
          (product) => product.categoryId.toLowerCase() === filter
        );

  const addToCart = (product, e) => {
    e.stopPropagation(); // prevent card click
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      cart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleProducts = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="menu-page bg-white min-h-screen py-20 px-4">
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 mt-20">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious selection of ice cream flavors, each crafted
            with passion and the finest ingredients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            'all',
            'classic',
            'fruit',
            'chocolate',
            'healthy',
            'nutty',
            'arabic',
            'party',
            'mix',
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {cat === 'all'
                ? 'All Products'
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleProducts(product.id)}
            >
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">🍦</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <span className="text-2xl font-bold text-blue-600">
                  ${product.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button
                onClick={(e) => addToCart(product, e)}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
