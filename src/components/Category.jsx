import React, { useEffect, useState } from 'react';
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';

export default function CategorySection() {
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const swiggyApiUrl =
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

      // Using alternative proxy (CORS bypass)
      const proxyUrl = `https://thingproxy.freeboard.io/fetch/${swiggyApiUrl}`;

      const response = await fetch(proxyUrl);
      const data = await response.json();

      console.log('Full Swiggy response:', data);

      const allCards = data?.data?.cards;
      console.log('All cards:', allCards);

      const categoryCard = allCards?.find(
        (card) =>
          card?.card?.card?.id === 'whats_on_your_mind' ||
          card?.card?.card?.title?.toLowerCase()?.includes("what's on your mind")
      );

      console.log('Category card found:', categoryCard);

      const categoryData =
        categoryCard?.card?.card?.gridElements?.infoWithStyle?.info;

      if (categoryData) {
        setCategory(categoryData);
        console.log('Categories:', categoryData);
      } else {
        console.warn('No category data found.');
      }
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
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <div
              key={cat.id || index}
              className="flex-shrink-0 w-[100px] flex flex-col items-center text-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${cat.imageId}`}
                alt={cat.action?.text || 'Category'}
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <span className="text-sm font-medium text-gray-700">
                {cat.action?.text}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">Loading categories...</p>
        )}
      </div>
    </div>
  );
}
