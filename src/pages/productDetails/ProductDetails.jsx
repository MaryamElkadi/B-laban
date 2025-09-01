// src/pages/Product/ProductPage.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../products/Products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const navigate = useNavigate();

  if (!product) return <p>Product not found</p>;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });

   
    navigate("/cart");
  };

  
  const recommended = products.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 mt-20">
      {/* Product details */}
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-sm h-sm object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <button
          onClick={addToCart}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>

      {/* Recommended Products */}
      {recommended.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recommended.map((rec) => (
              <div
                key={rec.id}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <Link to={`/product/${rec.id}`}>
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold">{rec.name}</h3>
                </Link>
                <p className="text-gray-600">${rec.price}</p>
                <button
                  onClick={() => {
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    const existingItem = cart.find((item) => item.id === rec.id);
                    if (existingItem) {
                      cart = cart.map((item) =>
                        item.id === rec.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                      );
                    } else {
                      cart.push({ ...rec, quantity: 1 });
                    }
                    localStorage.setItem("cart", JSON.stringify(cart));
                    toast.success(`${rec.name} added to cart!`);
                  }}
                  className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
