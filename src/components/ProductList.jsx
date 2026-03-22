import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Safety check
  if (!products) return null;

  // Extract unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Filter products
  const filteredProducts = products.filter((p) =>
    selectedCategory ? p.category === selectedCategory : true
  );

  return (
    <>
      {/* Category Dropdown */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          Filter by Category
        </label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-400 mt-24 text-lg">
          No products found.
        </div>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductList;