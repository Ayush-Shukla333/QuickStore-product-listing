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
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory("")}
          className={`px-3 py-1 rounded-full border transition ${
            selectedCategory === ""
              ? "bg-indigo-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
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