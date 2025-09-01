import React from 'react';
import { categories } from "../categories/Categories";
import { useNavigate } from "react-router-dom";

export default function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <div className="categories-section mt-20 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:main-font]">
          Our Blabn Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/category/${category.id}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
