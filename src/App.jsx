import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import ProductList from "./components/ProductList"
import ProductDetails from "./pages/ProductDetails"
import { getProducts } from "./services/api"
import SearchBar from "./components/SearchBar"
import Spinner from "./components/Spinner"
import ErrorMessage from "./components/ErrorMessage"

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  useEffect(() => { const loadProducts = async () => { try { setLoading(true); const data = await getProducts(); setProducts(data); } catch (err) { setError(err.message); } finally { setLoading(false); } }; loadProducts(); }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

            {/* HEADER */}
            <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
              <div className="max-w-6xl mx-auto px-4 py-4">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

                  {/* Logo */}
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    🛍️ QuickStore
                  </h1>

                  {/* Toggle + Search */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">

                    {/* Theme Toggle */}
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-lg hover:scale-105 transition-all duration-200 shadow-sm"
                    >
                      {darkMode ? "☀️" : "🌙"}
                    </button>

                    {/* Search */}
                    <div className="flex-1 sm:flex-none">
                      <SearchBar query={searchItem} onSearch={setSearchItem} />
                    </div>

                  </div>
                </div>

              </div>
            </header>

            {/* MAIN */}
            <main className="max-w-6xl mx-auto px-4 py-8">
              {loading && <Spinner />}
              {error && <ErrorMessage message={error} />}
              {!loading && !error && (
                <ProductList products={filteredProducts} />
              )}
            </main>

          </div>
        }
      />

      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;