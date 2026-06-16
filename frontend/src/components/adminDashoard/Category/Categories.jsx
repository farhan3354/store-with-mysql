import React from "react";
import { useGetCategory } from "../../../hooks/useCategory";

export default function Categories() {
  const { data, isLoading } = useGetCategory();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-500 text-lg">Loading categories...</p>
      </div>
    );
  }

  const categories = data?.category || [];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-500 mt-2">
            Manage and organize your store categories
          </p>
        </div>

        <button className="mt-4 md:mt-0 px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition">
          + Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <p className="text-gray-500">Total Categories</p>
          <h2 className="text-4xl font-bold mt-2">{categories.length}</h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <p className="text-gray-500">Active Categories</p>
          <h2 className="text-4xl font-bold mt-2">{categories.length}</h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <p className="text-gray-500">Store Sections</p>
          <h2 className="text-4xl font-bold mt-2">{categories.length}</h2>
        </div>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700">
            No categories found
          </h3>
          <p className="text-gray-500 mt-2">
            Create your first category to get started
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold mb-4">
                {category.name?.charAt(0).toUpperCase()}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {category.name}
              </h3>

              <p className="text-gray-500 mt-2 line-clamp-3">
                {category.description}
              </p>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                  Edit
                </button>

                <button className="flex-1 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
