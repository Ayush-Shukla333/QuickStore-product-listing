import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/api";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(`/?${new URLSearchParams(window.location.search).toString()}`)}
            className="flex items-center gap-2 text-indigo-500 hover:text-indigo-700 font-medium transition"
          >
            ← Back
          </button>
        </div>
      </header>

      {/* Product */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col md:flex-row gap-8">

          {/* Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6 sm:p-8 md:w-80 shrink-0 min-h-64">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 sm:h-64 object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 flex-1">
            <span className="text-xs uppercase tracking-wide text-indigo-500 font-medium">
              {product.category}
            </span>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              ⭐ {product.rating.rate}
              <span className="text-gray-300">|</span>
              {product.rating.count} reviews
            </div>

            <div className="text-3xl font-bold text-gray-900 mt-2">
              ${product.price}
            </div>

            <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition w-full md:w-auto">
              Add to Cart
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default ProductDetails; 