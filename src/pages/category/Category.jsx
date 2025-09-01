// src/pages/Category/CategoryPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../categories/Categories";
import { products } from "../products/Products"; // create product list with categoryId

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter(
    (p) => p.categoryId === categoryId
  );

  if (!category) return <p>Category not found</p>;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
