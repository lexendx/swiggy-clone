import React, { useEffect, useState } from 'react';
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';

export default function CategorySection() {
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch('http://localhost:5000/restaurants');
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">What's on your mind?</h2>
        <div className="flex space-x-2">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
            <HiArrowSmLeft className="text-xl" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
            <HiArrowSmRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Category Scrollable Row */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={cat.id || index}
            className="flex-shrink-0 w-[100px] flex flex-col items-center text-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={cat.image || 'https://via.placeholder.com/80'}
              alt={cat.name}
              className="w-20 h-20 object-cover rounded-full mb-2"
            />
            <span className="text-sm font-medium text-gray-700">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
