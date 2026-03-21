import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import ProductList from "./components/ProductList"
import ProductDetails from "./pages/ProductDetails"
import { getProducts } from "./services/api"
import SearchBar from "./components/SearchBar"
import Filter from "./components/Filter"
import { getCategories } from "./services/api"
import Spinner from "./components/Spinner"
import ErrorMessage from "./components/ErrorMessage"

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(); // ✅ fix: was res.data, API returns array directly
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm sticky top-0 z-10">
              <div className="max-w-6xl mx-auto px-4 py-4">

                {/* Top row — logo */}
                <div className="flex items-center justify-between mb-3 sm:mb-0">
                  <h1 className="text-2xl font-bold text-gray-800">🛍️ QuickStore</h1>
                </div>

                {/* Search + Filter row */}
                <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-0 sm:absolute sm:right-4 sm:top-4">
                  <SearchBar query={searchItem} onSearch={setSearchItem} />
                  {/* <Filter
                    categories={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                  /> */}
                </div>

              </div>
            </header>
            <main className="max-w-6xl mx-auto px-4 py-8">
              {loading && <Spinner />}
              {error && <ErrorMessage message={error} />}
              {!loading && !error && <ProductList products={filteredProducts} />}
            </main>
          </div>
        }
      />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App