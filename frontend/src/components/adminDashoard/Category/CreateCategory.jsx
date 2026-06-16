import { useState } from "react";
import { useCategory } from "../../../hooks/useCategory";

function CreateCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const categoryMutation = useCategory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    categoryMutation.mutate(
      { name, description },
      {
        onSuccess: () => {
          setName("");
          setDescription("");
        },
      },
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Create New Category
        </h1>
        <p className="mt-2 text-gray-500">
          Add a new category to organize your store products.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Electronics"
              value={name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Write a short description..."
              value={description}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={categoryMutation.isPending}
              className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition duration-200 disabled:opacity-50"
            >
              {categoryMutation.isPending ? "Creating..." : "Create Category"}
            </button>
          </div>

          {categoryMutation.isSuccess && (
            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700">
              Category created successfully!
            </div>
          )}

          {categoryMutation.isError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
              Failed to create category. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
